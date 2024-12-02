<template>
  <div>
    <div
      class="relative w-full bg-cover pb-[69px] bg-center bg-no-repeat bg-[url('/img/costEstimateBg.svg')]"
    >
      <div class="w-full">
        <Header />
      </div>
      <!-- body -->
      <div class="w-full flex items-center justify-center">
        <div
          class="flex justify-between w-full max-w-[1440px] 
          size-xs:px-[10px] size-xs:flex-col size-xs:items-center
          size-xl:flex-row size-xl:items-end size-xl:px-[100px]
          ">
          <!-- 1 -->
          <div class="max-w-[60%] mt-[300px] 
          size-xs:mt-[50px] size-xs:w-full size-xs:max-w-full size-xs:flex size-xs:items-center size-xs:flex-col
          size-xl:w-[60%] size-xl:flex size-xl:items-start
          ">
            <p
              class="text-white text-[60px] font-semibold leading-[82px] max-w-[633px] mb-[60px] 
              size-xs:text-[30px] size-xs:leading-[30px] size-xs:font-[400] size-xs:text-center size-xs:mb-[30px]
              size-xl:text-[60px] size-xl:font-semibold size-xl:leading-[82px] size-xl:mb-[60px] size-xl:text-start
              ">
              Cầu nối Doanh nghiệp Việt đến thị trường toàn cầu
            </p>
            <UButton
              label="Đăng ký"
              class="p-[14px] rounded-[6px] bg-white text-[#1E1F24] w-[180px] items-center justify-center
              
              "
            />
          </div>
          <!-- 2 -->
          <div class="w-[40%] max-w-[40%] flex justify-end size-xs:justify-center size-xs:items-start size-md:w-full size-md:max-w-full">
            <HomeCostEstimate />
          </div>
        </div>
      </div>
    </div>
    <!-- body -->
    <div class="px-[100px] w-full flex flex-col items-center bg-[#F7F8FA]">
      <div class="max-w-[1440px]">
      <!-- Lựa chọn hàng đầu của doanh nghiệp Việt -->
        <div
          class="mt-[100px] w-full flex flex-col items-center justify-center 
          size-xs:hidden
          size-sm:flex size-sm:mt-[50px]
          ">
          <p
            class="text-[40px] text-[#1E1F24] font-medium leading-[60px] tracking-[-0.8px]
            size-xs:text-[20px]
            size-md:text-[35px]
            " >
            Lựa chọn hàng đầu của doanh nghiệp Việt
          </p>

          <img
            src="/public/img/backgroundOfChooseSolution.jpg"
            class="mt-[48px] w-full bg-cover bg-center size-xs:hidden"
          />
        </div>
        <div class="mt-[40px] size-xs:hidden size-sm:flex">
          <HomeInterest />
        </div>
        <div class="mt-[100px] w-full">
          <HomeTHEService />
        </div>
         <div class="mt-[100px]">
          <HomeCreateOrderToday/>
         </div>
          <div class="">
            <HomeOurPartners/>
          </div>
          <div class="mt-[72px]">
            <HomeRateAndComment/>
          </div>
          <div class="mt-[80px]">
            <HomeExperienceTheDifference/>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
