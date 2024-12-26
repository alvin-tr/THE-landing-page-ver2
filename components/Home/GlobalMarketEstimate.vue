<template>
  <div class="relative w-full bg-cover pb-[69px] bg-center bg-no-repeat bg-[url('/img/costEstimateBg.svg')]">
    <slot></slot>
    <div class="px-[100px] max-size-sm:px-[10px]">
      <!-- body 1 -->
      <div class="w-full flex items-center justify-center">
        <div class="flex justify-between w-full max-w-[1440px]
        max-size-lg:flex-col max-size-lg:items-center
        ">
          <!-- 1 -->
          <div class="w-[53%] mt-[300px] flex flex-col
          max-size-xl1:mt-[100px]
          max-size-lg:mt-[50px] max-size-lg:w-full max-size-lg:flex max-size-lg:items-center max-size-lg:flex-col
          max-size-pro:mt-[10px]
          ">
            <span class="text-white text-[60px] font-semibold leading-[82px] mb-[30px] mt-[100px]
            max-size-lg:text-[50px] max-size-lg:text-center max-size-lg:mb-[20px] max-size-lg:mt-[50px]
            max-size-md:text-[45px] max-size-md:leading-[65px]
            max-size-pro:text-[25px] max-size-pro:text-center max-size-pro:leading-[35px] max-size-pro:mt-[50px]
            ">
              Cầu nối Doanh nghiệp Việt đến thị trường 
              <br>
              <div class="txtChange-container">
                
                <Transition class="max-size-lg:ml-[-150px]" name="slide-up">
                  <span class="txtChange" v-if="docState === 'america'">Hoa Kỳ</span>
                  <span class="txtChange" v-else-if="docState === 'europe'">Châu Âu</span>
                  <span class="txtChange" v-else-if="docState === 'global'">Toàn Cầu</span>
                </Transition>
              </div>
            </span>
            <UButton
              :label="$t('home.register')"
              class="p-[14px] rounded-[6px] bg-white text-lg text-[#1E1F24] w-[180px] items-center justify-center hover:bg-white"
              to="https://app.thehuman.express/sign-up"
              />
          </div>
          <!-- 2 -->
          <div class="flex justify-end
          max-size-lg:w-full ">
            <HomeCostEstimate />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const docState = ref('america')

const cycleStates = () => {
  if (docState.value === 'america') {
    docState.value = 'europe'
  } else if (docState.value === 'europe') {
    docState.value = 'global'
  } else if (docState.value === 'global') {
    docState.value = 'america'
  }
}

let intervalId

onMounted(() => {
  intervalId = setInterval(cycleStates, 5000) 
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

</script>

<style scoped>
.txtChange-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

.txtChange {
  position: absolute;
  color: #0066FF;
  width: 300px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
