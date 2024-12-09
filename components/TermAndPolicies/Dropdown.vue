<template>
  <div class="flex flex-col">
    <!-- 1 -->
    <div class="layoutDropdown" @click="scrollToSection('#target-section-1')">
      <p class="blueTxt">1.</p>
      <p class="blackTxt">Các thuật ngữ</p>
    </div>
    <!-- 2 -->
    <div class="layoutDropdown flex-col">
      <!-- to nhat -->
      <div class="flex justify-between w-full">
        <div class="flex">
          <p class="blueTxt">2.</p>
          <p class="blackStrongTxt">Chính sách hoàn tiền của THE</p>
        </div>
        <div
          class="p-[4px] bg-[#F2F3F5] rounded-[4px] w-[20px] h-[20px] flex justify-center items-center"
        >
          <UIcon
            name="tabler:chevron-down"
            class="text-[#1E1F24] text-[12px]"
          />
        </div>
      </div>
      <!-- 2.1 -->
      <div class="px-[20px] flex justify-between w-full mt-[14px]">
        <div class="flex">
          <p class="blueTxt">2.1</p>
          <p class="blackStrongTxt">Phạm vi trách nhiệm</p>
        </div>
      </div>
      <!-- 2.2 -->
       <div class="px-[20px] flex justify-between w-full mt-[14px]">
        <div class="flex">
          <p class="blueTxt">2.2</p>
          <p class="blackStrongTxt">Phạm vi trách nhiệm</p>
        </div>
        <div
          class="p-[4px] bg-[#F2F3F5] rounded-[4px] w-[20px] h-[20px] flex justify-center items-center"
        >
          <UIcon
            name="tabler:chevron-down"
            class="text-[#1E1F24] text-[12px]"
          />
        </div>
      </div>
    </div>
    <!-- 5 -->
    <div class="layoutDropdown" @click="scrollToSection('#target-section-5')">
      <span
        class="text-[#0066FF] text-[16px] leading-[24px] font-medium mr-[14px]"
        >5.
        <span class="text-[#333333]"
          >Hàng hóa hạn chế hoặc không nhận vận chuyển</span
        ></span
      >
    </div>
  </div>
</template>

<script setup>
const dropdowns = [
  {
    label: '2. Chính sách hoàn tiền của THE',
    children: [
      { label: '2.1. Phạm vi trách nhiệm', content: '' },
      {
        label: '2.2. Các trường hợp và chính sách',
        content: ' 2.2.1. Hủy đơn hàng',
        children: [
          { label: '2.2.1. Hủy đơn hàng' },
          { label: '2.2.2. Relabel' },
          { label: '2.2.3. Đơn hàng thất lạc' },
          { label: '2.2.4. Đơn hàng mất mát' },
          { label: '2.2.5. Đơn hàng Hư hỏng' },
          { label: '2.2.6. Đơn hàng trễ toàn trình' },
        ],
      },
    ],
  },
]
const emit = defineEmits(['scroll-to-section'])

const scrollToSection = (sectionId) => {
  emit('scroll-to-section', sectionId)
}
</script>

<style scoped>
.layoutDropdown {
  padding-inline: 20px;
  padding-block: 18px;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 6px;
  display: flex;
}
.blueTxt {
  font-size: 16px;
  color: #0066ff;
  font-weight: 500;
  line-height: 24px;
  margin-right: 14px;
}
.blackStrongTxt {
  font-size: 16px;
  color: #333333;
  font-weight: 500;
  line-height: 24px;
  margin-right: 14px;
}
.blackTxt {
  font-size: 16px;
  color: #333333;
  font-weight: 400;
  line-height: 24px;
}
</style>
