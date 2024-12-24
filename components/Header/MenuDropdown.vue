<template>
  <div>
    <Questions
      :parent="{}"
      :ui="{ wrapper: 'bg-white mb-2' }"
      v-model="currentDropdowns"
      :questions="dropdowns"
      class="mt-[40px] sticky top-[5vh]"
    ></Questions>
  </div>
</template>

<script setup>
import Questions from '../Questions.vue'
const currentDropdowns = ref('1')

const dropdowns = ref([
  {
    title: 'Về THE',
    key: '1',
    status: false,
    children: [
      {
        title: 'Giới thiệu về THE',
        key: '1.1',
        status: false,
        to: '/about',
        children: [],
      },
      {
        title: 'Liên hệ',
        key: '1.2',
        status: false,
        to: '/',
        children: [],
      },
      {
        title: 'Tuyển dụng',
        key: '1.3',
        status: false,
        to: '/',
        children: [],
      },
    ],
  },
  {
    title: 'Dịch vụ',
    key: '2',
    status: false,
    children: [
      {
        title: 'Chuyển phát quốc tế',
        key: '2.1',
        status: false,
        children: [],
      },
      {
        title: 'Chuyển phát Tiktok US',
        key: '2.2',
        status: false,
        to: '/',
        children: [],
      },
      {
        title: 'Chuyển phát hàng FBA',
        key: '2.3',
        status: false,
        to: '/',
        children: [],
      },
    ],
  },
  {
    title: 'Hỗ trợ',
    key: '3',
    status: false,
    children: [
      {
        title: 'Điều khoản & chính sách',
        key: '3.1',
        status: false,
        to: '/',
        children: [],
      },
      {
        title: 'Hướng dẫn sử dụng',
        key: '3.2',
        status: false,
        to: '/',
        children: [],
      },
      {
        title: 'Kết nối API',
        key: '3.3',
        status: false,
        to: '/',
        children: [],
      },
    ],
  },
])
</script>

<style lang="scss" scoped></style>
