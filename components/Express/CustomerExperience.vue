<template>
    <BaseLayout>
          <div class="px-[100px] w-full pt-[100px]
          max-size-md:px-[30px] max-size-md:pt-[30px]
          max-size-pro:px-[20px]
          ">
            <div class=" py-[48px] my-[20px] overflow-hidden w-full flex flex-col items-center bg-white rounded-[20px] shadow-md shadow-[#d1d3da]
            max-size-xs:px-[10px]
            ">
              <p class="text-[40px] text-[#1E1F24] leading-[60px] font-medium text-center w-[45%]  
                max-size-md:w-[70%]
                max-size-pro:w-full max-size-pro:text-[30px] max-size-pro:leading-[40px]
              ">
                {{ title }}
              </p>
              <div class="flex flex-row mt-[70px] ml-[70px]
              max-size-pro:ml-0  max-size-pro:w-full max-size-pro:mt-[30px] 
              ">
                  <!-- 1 -->
                  <div class="w-[60%] flex flex-col
                  max-size-pro:w-full 
                  ">
                      <div 
                      v-for="itemExpress in CustomerExperienceItem"
                      class="flex flex-col mb-[66px] max-size-pro:justify-center max-size-pro:items-center max-size-pro:px-[10px]">
                          <div class="flex flex-row">
                              <img :src="itemExpress.icon" class="w-[26px]">
                              <p class="text-[20px] text-[#1E1F24] leading-[32px] font-semibold ml-[12px]">{{ itemExpress.title }}</p>
                          </div>
                          <p class="text-[16px] text-[#868689] leading-[24px] font-normal mt-[12px] w-[85%]">{{ itemExpress.description }}</p>
                      </div>
                  </div>
                  <!-- 2 -->
                  <div class="w-[40%] bg-[url('/img/homeUIInExpress.svg')] bg-cover
                  max-size-pro:hidden
                  ">
                  </div>
                  
              </div>
            </div>
          </div>
        </BaseLayout>
</template>

<script setup>
const props = defineProps({
    CustomerExperienceItem:{
        type: Array
    },
    title: String
})
</script>

<style scoped></style>
