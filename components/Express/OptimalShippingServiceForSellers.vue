<template>
  <BaseLayout>
    <div class="px-[100px] mt-[100px] flex- flex-col bg-[#F7F8FA]
    max-size-lg:mt-[50px]
    max-size-md:px-[50px]
    max-size-pro:px-[20px]
    ">
      <div class="w-full flex justify-center mb-[48px]
      max-size-md:mb-[20px]
      ">
        <p class="text-[40px] leading-[60px] font-medium text-[#1E1F24]
        max-size-pro:text-[30px] max-size-pro:leading-[30px] max-size-pro:text-center
        ">
          {{ topic }}
        </p>
      </div>
      <div class="w-full">
        <img class="object-cover object-center" :src="imgSrc" alt="" />
      </div>
      <div class="mt-[40px] flex flex-row justify-between
      max-size-sm:flex-col
      ">
        <!-- 1 -->
        <div class="w-[60%] max-size-sm:w-full">
          <p class="text-[#1E1F24] text-[32px] leading-[44px] font-medium
          max-size-pro:text-[25px] max-size-pro:text-center
          ">
            {{ title }}
          </p>
          <div class="w-full mt-[40px] flex flex-wrap gap-[20px]">
            <div v-for="(item, index) in items" :key="index" :class="[
              'flex flex-row transition-all',
              items.length % 2 !== 0 && index === items.length - 1
                ? 'w-full'
                : 'w-[calc(50%-10px)]',
            ]">
              <!-- Nội dung -->
              <div class="w-full flex flex-row">
                <div class="w-[46px] h-[46px] mr-[14px] flex items-center justify-center">
                  <img :src="item.icon" alt="" />
                </div>
                <div class="w-full">
                  <p class="text-[16px] text-[#868689] leading-[24px] font-medium">
                    {{ item.title }}
                  </p>
                  <p class="text-[18px] text-[#1E1F24] leading-[24px] font-medium mt-[6px]">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="flex flex-col w-[30%]
        max-size-md:w-[35%]
        max-size-sm:w-full max-size-sm:mt-[30px] 
        ">
          <p class="text-[16px] text-[#868689] leading-[24px] font-medium max-size-sm:text-center">
            {{ descriptionRightSide }}
          </p>
          <div class="w-full mt-[50px] max-size-md:mt-[30px]
          max-size-sm:flex max-size-sm:justify-center
          ">
            <div @click="openModalGetAQuote = true"
              class="flex flex-row items-center justify-center w-[60%] py-[14px] rounded-[8px] bg-[#0066FF] max-size-sm:w-[50%]">
              <p class="text-white text-[16px] leading-[24px] font-medium">
                Nhận báo giá
              </p>
              <UIcon name="ri:arrow-right-line" class="ml-[5px] text-white text-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <GetAQuote  v-model="openModalGetAQuote"/>
  </BaseLayout>
</template>

<script setup>

const openModalGetAQuote = ref(false)

const props = defineProps({
  topic: String,
  title: String,
  descriptionRightSide: String,
  items: {
    type: Array,
    required: true,
  },
  imgSrc: String,
})

</script>

<style lang="scss" scoped></style>
