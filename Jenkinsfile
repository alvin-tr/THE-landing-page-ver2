#!/usr/bin/env groovy

node {
    // Clean workspace before doing anything
    deleteDir()

    try {
        try {
            // get deploy setting
            deploySettings = getDeploySettings()
        } catch(err) {
            println(err.getMessage());
            throw err
        }

        echo "Building..."

        // Prepare stage: clone projects
        stage ('Prepare') {
            // clone lionnix repo
            dir('logistic-landing-page-v2') {
                git(
                    credentialsId: 'GitAccessId',
                    branch: "${env.BRANCH_NAME}",
                    url: 'git@github.com:thehumansourcecode/logistic-landing-page-v2.git'
                )
            }
        }

        // Build stage: build image then push to private registry. Only build on branch master
        image = "${deploySettings.service_name}:${deploySettings.image_tag}"
        stage ('Build') {
            if (deploySettings.branch == 'main' || deploySettings.branch == 'dev' || deploySettings.branch == 'dev-eks') {
                dir('logistic-landing-page-v2') {
                    sh "docker build -t ${deploySettings.docker_registry}/${image} -f ${deploySettings.dockerfile_name} --build-arg MODE=${deploySettings.mode} ."
                    sh "aws ecr get-login-password --region ${deploySettings.aws_region} | docker login --username AWS --password-stdin ${deploySettings.docker_registry}"
                    sh "aws ecr describe-repositories --repository-names --region ${deploySettings.aws_region} ${deploySettings.service_name} || aws ecr create-repository --repository-name --region ${deploySettings.aws_region} ${deploySettings.service_name}"
                    sh "docker push ${deploySettings.docker_registry}/${image}"
                }
            } else {
                echo "Build only available for dev and staging branch. Skip."
                currentBuild.result = 'FAILED'
            }
        }

        // Deploy stage: deploy docker image to k8s
        stage ('Deploy') {
            deployTag = "${deploySettings.image_tag}"
            if (deploySettings.branch == 'main') {
                appEnv = "staging"
            }

            if (!deployTag) {
                currentBuild.result = 'FAILED'
                echo "Unable to get deploy tag or this branch is not allowed to deploy. Stop."
            }

            dir('logistic-landing-page-v2') {
                // use same namespace on staging/dev
                sh """
                    KUBECONFIG=${deploySettings.kube_config} helm upgrade --install -f ${deploySettings.helm_values_file} ${deploySettings.helm_release} --set image.tag=${deployTag} deploy/helm_chart

                    KUBECONFIG=${deploySettings.kube_config} kubectl rollout status deployment ${deploySettings.service_name} -n ${deploySettings.namespace}
                """
            }
        }

        stage('Remove image') {
            sh "docker rmi ${deploySettings.docker_registry}/${image}"
        }

        stage ('Clean') {
            deleteDir()
        }

    } catch (err) {
        currentBuild.result = 'FAILED'
        throw err
    }
}

def getDeploySettings() {
    def deploySettings = [:]


    dockerImageName = "nexus.lionnix.net/web-ui/shipment-landingpage-ui-v2"
    serviceName = "shipment-landingpage-ui-v2"
    namespace = "humanbay-ui"
    dockerRegistry = "975050053941.dkr.ecr.ap-southeast-1.amazonaws.com"
    awsRegion = "ap-southeast-1"

    // end fill args
    privateRegistryAddress = "https://nexus.lionnix.net" // private registry address
    branchName = env.BRANCH_NAME // current branch name of project
    buildNumber = env.BUILD_NUMBER // current build number
    dockerfileName = "deploy/docker/Dockerfile"

    if (branchName == 'main') {
        // deploy code on master branch to master
        helmValueFile = "default.values.prod.yaml"
        kubeConfig = "/var/jenkins_home/.kube/humanbay-prod"
        dockerImageTag = "release-${buildNumber}"
        mode = "production"
        deploySettings['helm_release'] = serviceName

    } else if (branchName == 'dev') {
        // deploy code on master branch to master
        helmValueFile = "default.values.dev.yaml"
        kubeConfig = "/var/jenkins_home/.kube/humanbay-dev"
        dockerImageTag = "dev-${buildNumber}"
        mode = "development"
        namespace = "dev-${namespace}"
        deploySettings['helm_release'] = "${serviceName}-dev"
    }

    // docker image info to build
    deploySettings['private_registry_address'] = privateRegistryAddress
    deploySettings['branch'] = branchName
    deploySettings['dockerfile_name'] = dockerfileName
    deploySettings['image_tag'] = dockerImageTag
    deploySettings['image_name'] = dockerImageName
    deploySettings['mode'] = mode
    deploySettings['docker_registry'] = dockerRegistry
    deploySettings['aws_region'] = awsRegion

    // k8s/helm info for deployment
    deploySettings['helm_values_file'] = "${helmValueFile}"
    deploySettings['kube_config'] = kubeConfig
    deploySettings['namespace'] = namespace

    // app name
    deploySettings['service_name'] = serviceName

    // switch to new aws cluster
    deploySettings['helm_cmd'] = "helmet"
    deploySettings['helmet_path'] = "/var/lib/jenkins/.helmet"

    return deploySettings
}
