<template>
  <div class="rounded-[12px] bg-[#FFFFFF1A] py-[24px] ">
    <!-- 1 -->
    <div class="flex flex-row border-b-[2px] border-[#FFFFFF80] px-[52px]">
        <!-- 1 -->
        <div 
        @click="tabChangeCostEstimate = 0"
        class="px-[14px]">
            <p 
            :class="tabChangeCostEstimate === 0 ? 'text-white' : 'text-[#FFFFFF80]'"
            >Ước tính chi phí</p>
            <div 
            :class="tabChangeCostEstimate === 0 ? 'w-full bg-white h-[1px] mt-[8px]' : 'bg-[#FFFFFF80]'"></div>
        </div>
        <!-- 2 -->
        <div 
        @click="tabChangeCostEstimate = 1"
        class="px-[14px]">
            <p 
            :class="tabChangeCostEstimate === 1 ? 'text-white' : 'text-[#FFFFFF80]'"
            class="text-[#FFFFFF80]">Tra cứu hành trình đơn hàng</p>
            <div 
            :class="tabChangeCostEstimate === 1 ? 'w-full bg-white h-[1px] mt-[8px]' : 'hidden'" 
            ></div>
        </div>
    </div>
    <!-- 2 -->
    <div class="px-[52px]">
        <p class="text-[34px] leading-[50px] text-white">Ước tính chi phí</p>
    </div>
  </div>
</template>

<script setup>
const tabChangeCostEstimate = ref(0)
</script>

<style lang="scss" scoped></style>
