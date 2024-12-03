<template>
  <div
    class="rounded-[12px] w-[464px] py-[24px] mt-[87px] bg-cover bg-center bg-no-repeat bg-[url('/public/img/backgroundOfCostEstimate.png')] max-size-lg:w-full max-size-md:mt-[50px]"
  >
    <!-- 1button title -->
    <div
      class="flex flex-row border-b-[2px] border-[#FFFFFF80] px-[52px] max-size-sm:px-[20px] max-size-xs:px-0"
    >
      <!-- 1 -->
      <div @click="tabChangeCostEstimate = 0" class="px-[14px] cursor-pointer">
        <p
          :class="
            tabChangeCostEstimate === 0 ? 'text-white' : 'text-[#FFFFFF80]'
          "
        >
          Ước tính chi phí
        </p>
        <div
          :class="
            tabChangeCostEstimate === 0
              ? 'w-full bg-white h-[1px] mt-[8px]'
              : 'bg-[#FFFFFF80]'
          "
        ></div>
      </div>
      <!-- 2 -->
      <div @click="tabChangeCostEstimate = 1" class="px-[14px] cursor-pointer">
        <p
          :class="
            tabChangeCostEstimate === 1 ? 'text-white' : 'text-[#FFFFFF80]'
          "
          class="text-[#FFFFFF80]"
        >
          Tra cứu hành trình đơn hàng
        </p>
        <div
          :class="
            tabChangeCostEstimate === 1
              ? 'w-full bg-white h-[1px] mt-[8px]'
              : 'hidden'
          "
        ></div>
      </div>
    </div>
    <!-- 1 -->
    <div
      :class="tabChangeCostEstimate === 0 ? 'block' : 'hidden'"
      class="px-[52px] mt-[32px] max-size-sm:px-[20px]"
    >
      <p class="text-[34px] leading-[50px] text-white">Ước tính chi phí</p>
      <p class="font-normal text-[#FFFFFF80] mt-[8px]">
        Vui lòng nhập các thông tin sau đây để ước tính chi phí vận chuyển đơn
        hàng của bạn
      </p>
      <!-- Trọng lượng -->
      <div class="flex flex-col mt-[32px]">
        <span
          class="text-[12px] font-normal flex flex-row text-[#FFFFFF] ml-[4px]"
          >Trọng lượng
          <p class="text-[#E8173C] ml-[2px]">*</p></span
        >
        <div
          class="flex flex-row p-[12px] bg-[#394154] rounded-[6px] mt-[6px] max-size-lg:items-center max-size-lg:justify-center"
        >
          <img
            class="max-size-lg:w-[30px] max-size-md:w-[25px]"
            src="/public/icon/iconInputWeight.svg"
          />
          <UInput
            placeholder="Nhập trọng lượng"
            type="number"
            variant="none"
            class="w-[266px] ml-[8px] text-[#ffffff] rounded-[6px] max-size-lg:w-full"
            input-class="text-white 
            max-size-lg:text-[20px] max-size-md:text-[15px]
            
            "
          />
          <p class="text-[#FFFFFF] font-normal ml-[8px]">gram</p>
        </div>
      </div>
      <!-- Dài | Rọng | Cao -->
      <div class="flex flex-row mt-[16px]">
        <!-- Dài -->
        <div class="w-[35%]">
          <span
            class="text-[12px] font-normal flex flex-row text-[#FFFFFF] ml-[4px]"
            >Dài
            <p class="text-[#E8173C] ml-[2px]">*</p></span
          >
          <div
            class="mt-[6px] px-[14px] py-[12px] flex flex-row bg-[#394154] rounded-[6px] items-center"
          >
            <UInput
              type="number"
              variant="none"
              class="text-[#ffffff] bg-[#394154] rounded-[6px]"
            />
            <p class="text-white ml-[5px]">cm</p>
          </div>
        </div>
        <!-- Rộng -->
        <div class="ml-[12px] w-[35%]">
          <span
            class="text-[12px] font-normal flex flex-row text-[#FFFFFF] ml-[4px]"
            >Rộng
            <p class="text-[#E8173C] ml-[2px]">*</p></span
          >
          <div
            class="mt-[6px] px-[14px] py-[12px] flex flex-row bg-[#394154] rounded-[6px] items-center"
          >
            <UInput
              type="number"
              variant="none"
              class="text-[#ffffff] bg-[#394154] rounded-[6px]"
            />
            <p class="text-white ml-[5px]">cm</p>
          </div>
        </div>
        <!-- Cao -->
        <div class="ml-[12px] w-[35%]">
          <span
            class="text-[12px] font-normal flex flex-row text-[#FFFFFF] ml-[4px]"
            >Cao
            <p class="text-[#E8173C] ml-[2px]">*</p></span
          >
          <div
            class="mt-[6px] px-[14px] py-[12px] flex flex-row bg-[#394154] rounded-[6px] items-center"
          >
            <UInput
              type="number"
              variant="none"
              class="text-[#ffffff] bg-[#394154] rounded-[6px]"
            />
            <p class="text-white ml-[5px]">cm</p>
          </div>
        </div>
      </div>
      <!-- ----- -->
      <div
        class="w-[360px] overflow-hidden h-[20px] flex items-center mt-[32px] max-size-lg:w-full"
      >
        <p class="text-[#686E78] w-full tracking-[4.5px]">
          -----------------------------------------------------------------------------------------
        </p>
      </div>
      <!-- Cước tạm tính -->
      <div class="flex flex-row mt-[36px] max-size-xs:mt-[15px]">
        <div class="w-[50%]">
          <p class="text-[12px]">Cước tạm tính</p>
          <p class="text-[20px] leading-[32px]">$1000.00</p>
        </div>
        <div class="w-[50%] flex items-center justify-end">
          <UButton class="bg-[#0066FF] font-medium px-[30px] py-[12px]"
            >Tính giá</UButton
          >
        </div>
      </div>
      <!-- click vào đây -->
      <div class="mt-[74px] w-full max-size-xs:mt-[30px]">
        <span class="text-[12px] text-[#FFFFFF80] font-normal"
          >Cước tính chỉ mang tính chất tham khảo.
          <a href="" class="underline cursor-pointer text-white"
            >Click vào đây</a
          >
          để xem bảng giá chi tiết</span
        >
      </div>
    </div>
    <!-- 2 -->
    <div
      :class="tabChangeCostEstimate === 1 ? 'block' : 'hidden'"
      class="px-[52px] mt-[32px]"
    >
      <p class="text-[34px] leading-[44px] text-white font-medium">
        Tra cứu hành trình đơn hàng
      </p>

      <div class="mt-[24px]">
        <span
          class="text-[12px] text-white font-normal leading-[20px] flex flex-row mr-[5px]"
          >Mã tracking
          <p class="text-[#E8173C]">*</p></span
        >

        <div
          class="w-[360px] h-[302px] bg-[#394154] mt-[6px] rounded-[6px]"
        >
          <textarea
            placeholder="Vui lòng nhập mã tracking, các mã được phân tách với nhau bởi dấu Enter"
            class="w-full h-full resize-none bg-[#394154] border-0 p-[12px] rounded-[6px]"
            rows="4"
          ></textarea>
        </div>

        <!-- trash -->
         <div class="flex flex-row justify-between mt-[36px]">
          <div class="p-[12px] flex items-center justify-center border-[1px] border-[#52627D] rounded-[4px] w-[44px] h-[44px]">
          <UIcon name="solar:trash-bin-trash-outline"/>
          </div>
          <div class="bg-[#0066FF] w-[128px] h-[44px] rounded-[6px] flex items-center justify-center">
            <p class="text-[14px] text-white leading-[20px] font-medium">Track</p>
          </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabChangeCostEstimate = ref(0)
</script>

<style scoped></style>
