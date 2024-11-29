<template>
  <div class="relative w-full h-[100vh] bg-[url('/assets/img/costEstimateBg.svg')]">
    <!-- <img src="/assets/img/costEstimateBg.svg" alt=""> -->
    <div class=" w-full">
        <Header/>
    </div>
    <!-- body -->
    <div class="px-[100px] flex flex-row">
        <!-- 1 -->
        <div class="w-[60%] mt-[300px]">
            <p class="text-white text-[60px] font-semibold leading-[82px] max-w-[633px] mb-[60px]">Cầu nối Doanh nghiệp Việt đến thị trường toàn cầu</p>
            <UButton label="Đăng ký" class="p-[14px] rounded-[6px] bg-white text-[#1E1F24] w-[180px] items-center justify-center" />
        </div>
        <!-- 2 -->
        <div class="w-[40%]">
            <CostEstimate/>
        </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
