<template>
  <div>
    <div class="relative w-full bg-cover pb-[69px] bg-center bg-no-repeat bg-[url('/public/img/costEstimateBg.svg')]">
      <div class=" w-full">
        <Header />
      </div>
      <!-- body -->
      <div class="w-full flex items-center justify-center ">
        <div class="flex flex-row justify-between items-end px-[100px] w-full max-w-[1440px]">
          <!-- 1 -->
          <div class="max-w-[60%] w-[60%] mt-[300px]">
            <p class="text-white text-[60px] font-semibold leading-[82px] max-w-[633px] mb-[60px]">Cầu nối Doanh nghiệp
              Việt đến thị trường toàn cầu</p>
            <UButton label="Đăng ký"
              class="p-[14px] rounded-[6px] bg-white text-[#1E1F24] w-[180px] items-center justify-center" />
          </div>
          <!-- 2 -->
          <div class="w-[40%] max-w-[40%] flex justify-end">
            <HomeCostEstimate />
          </div>
        </div>
      </div>

    </div>
    <!-- Lựa chọn hàng đầu của doanh nghiệp Việt -->
    <div class="px-[100px] w-full max-w-[1440px] flex flex-col items-center bg-[#F7F8FA]">
      <div class="mt-[100px] w-full flex flex-col items-center justify-center">
        <p class="text-[40px] text-[#1E1F24] font-medium leading-[60px] tracking-[-0.8px]">Lựa chọn hàng đầu của doanh
          nghiệp Việt</p>

          <img src="/public/img/backgroundOfChooseSolution.jpg" class="mt-[48px] w-full bg-cover bg-center">
      </div>
      <!-- Quyền lợi -->
       <div class="mt-[40px]">
       <HomeInterest/>
       </div>
       <!-- Dịch vụ của THE -->
       <div class="mt-[100px] w-full">
        <HomeTHEService/>
       </div>

    </div>

  </div>

</template>

<script setup></script>

<style lang="scss" scoped></style>
