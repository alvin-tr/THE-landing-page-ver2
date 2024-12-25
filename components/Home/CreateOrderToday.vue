<template>
  <BaseLayout>
    <div
      class="px-[100px]
      max-size-md:px-[50px]
      max-size-xl05:px-0
      max-size-sm:px-[20px]
      max-size-pro:px-[10px]
      ">
      <div class="w-full flex flex-col items-center mt-[100px]
      max-size-xl05:mt-[80px]
      max-size-pro:mt-[50px]
      ">
        <p class="text-[#1E1F24] text-[40px] font-medium leading-[60px]
        max-size-sm1:text-center
        max-size-pro:text-center
        max-size-pro1:text-[35px] max-size-pro1:leading-[40px]
        ">
          Tạo đơn hàng ngay hôm nay
        </p>
        <img src="/img/createOrderLG.svg" class="mt-[114px] max-size-md:hidden max-size-xl05:mt-[30px] max-size-lg:w-full" />
        <img src="/img/createOrderSM.svg" class="mt-[30px] hidden max-size-md:flex max-size-pro:hidden" />
        <img src="/img/createOrderPRO.svg" class="mt-0 hidden max-size-pro:flex" />
      </div>
    </div>
  </BaseLayout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
