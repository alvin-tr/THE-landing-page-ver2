<template>
  <div class="w-full flex items-center justify-center">
    <div
      class="w-full max-w-[1440px] h-[64px] bg-[#1310] flex flex-row items-center justify-between size-2xl:h-[84px]"
    >
      <!-- 1 -->
      <div class="flex flex-row items-center ">
      <!-- img -->
        <div class="my-[14px] ml-[80px] size-xs:ml-[10px] size-xl:ml-[80px]">
          <img class="w-[104px] size-2xl:w-[170px]" src="/public/img/logoHeader.svg" />
        </div>
        <!-- option -->
        <div class="flex flex-row justify-between ml-[109px] size-xs:hidden size-md:block size-md:ml-[30px]">
          <span class="text-[14px] leading-[20px] font-medium text-[#FFFFFF99] size-2xl:text-[20px] size-xl:ml-[109px]"
            >Về THE</span
          >
          <span
            class="text-[14px] leading-[20px] font-medium text-[#FFFFFF99] ml-[80px] size-md:ml-[30px] size-2xl:text-[20px] size-xl:ml-[80px]"
            >Dịch vụ</span
          >
          <span
            class="text-[14px] leading-[20px] font-medium text-[#FFFFFF99] ml-[80px] size-md:ml-[30px] size-2xl:text-[20px] size-xl:ml-[80px]"
            >Hỗ trợ</span
          >
        </div>
      </div>

      <div class="flex flex-row px-[100px] items-center size-xs:px-[10px] size-xl:px-[80px]">
        <!-- EN | VN -->
        <div class="mr-[24px] size-xs:hidden size-md:block size-2xl:text-[20px]">
          <span class="text-white">EN | VN</span>
        </div>
        <!-- phone -->
        <span
          class="flex flex-row px-[14px] py-[10px] bg-white rounded-[6px] items-center justify-center mr-[24px] size-xs:hidden size-lg:flex "
        >
          <UIcon
            name="mingcute:phone-line"
            class="text-[#0066FF] text-[18px] mr-[8px] size-2xl:text-[30px]"
          />
          <p class="text-[#1E1F24] leading-[20px] font-medium size-2xl:text-[20px]">0974877007</p>
        </span>
        <!-- sign in / sign up -->
        <div class="flex flex-row items-center justify-center">
          <UIcon
            name="mingcute:user-4-line"
            class="mr-[4px] text-[20px] text-white"
          />
          <span class="flex flex-row text-white size-2xl:text-[20px]">Đăng ký | Đăng nhập</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
