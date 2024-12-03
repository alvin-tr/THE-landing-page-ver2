<template>
  <div class="px-[100px] max-size-pro:px-[10px]">
    <!-- body 1 -->
    <div class="w-full flex items-center justify-center">
      <div class="flex justify-between w-full max-w-[1440px]
      max-size-lg:flex-col max-size-lg:items-center
      ">
        <!-- 1 -->
        <div class="w-[53%] mt-[300px]
        max-size-lg:mt-[50px] max-size-lg:w-full max-size-lg:flex max-size-lg:items-center max-size-lg:flex-col
        ">
          <p class="text-white text-[60px] font-semibold leading-[82px] mb-[60px]
          max-size-lg:text-[50px] max-size-lg:text-center max-size-lg:mb-[20px]
          max-size-md:text-[45px] max-size-md:leading-[65px]
          max-size-pro:text-[30px] max-size-pro:text-center max-size-pro:leading-[45px]
          ">
            Cầu nối Doanh nghiệp Việt đến thị trường Hoa Kỳ | Châu Âu | Toàn Cầu
          </p>
          <UButton
            label="Đăng ký"
            class="p-[14px] rounded-[6px] bg-white text-[#1E1F24] w-[180px] items-center justify-center
            
            "/>
        </div>
        <!-- 2 -->
        <div class="flex justify-end
        max-size-lg:w-full ">
          <HomeCostEstimate />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
