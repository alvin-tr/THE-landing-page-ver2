<template>
  <div class="w-full">
    <div
      class="w-full h-[64px] bg-[#1310] flex flex-row items-center justify-between"
    >
      <!-- 1 -->
      <div class="flex flex-row items-center">
        <div class="my-[14px] ml-[80px] lg:ml-[20px] md:ml-[20px] sm:ml-[20px] pro:ml-[20px]">
          <img src="/public/img/logoHeader.svg" />
        </div>
        <div class="flex flex-row justify-between ml-[109px] lg:ml-[50px] pro:hidden md:hidden">
          <span class="text-[14px] leading-[20px] font-medium text-[#FFFFFF99]"
            >Về THE</span
          >
          <span
            class="text-[14px] leading-[20px] font-medium text-[#FFFFFF99] ml-[80px] lg:ml-[50px]"
            >Dịch vụ</span
          >
          <span
            class="text-[14px] leading-[20px] font-medium text-[#FFFFFF99] ml-[80px] lg:ml-[50px]"
            >Hỗ trợ</span
          >
        </div>
      </div>

      <div class="flex flex-row px-[100px] items-center lg:px-[30px] md:px-[20px] sm:px-[20px] pro:px-[20px]">
        <!-- EN | VN -->
        <div class="mr-[24px]">
          <span class="text-white">EN | VN</span>
        </div>
        <!-- phone -->
        <span
          class="flex flex-row px-[14px] py-[10px] bg-white rounded-[6px] items-center justify-center mr-[24px]"
        >
          <UIcon
            name="mingcute:phone-line"
            class="text-[#0066FF] text-[18px] mr-[8px]"
          />
          <p class="text-[#1E1F24] leading-[20px] font-medium">0974877007</p>
        </span>
        <!-- sign in / sign up -->
        <div class="flex flex-row items-center justify-center">
          <UIcon
            name="mingcute:user-4-line"
            class="mr-[4px] text-[20px] text-white"
          />
          <span class="flex flex-row text-white">Đăng ký | Đăng nhập</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
