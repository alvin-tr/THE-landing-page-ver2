<template>
  <div class="bg-[#3737]">
    <Questions
    :parent="{}"
    :ui="{ wrapper: 'bg-white mb-2' }"
    v-model="currentQuestion"
    :questions="questions"
    class="mt-[40px] "
  ></Questions>
  </div>
</template>

<script setup>
import Questions from '../Questions.vue'
const currentQuestion = ref('1')

const questions = ref([
  {
    title: 'Các thuật ngữ',
    key: '1',
    status: false,
    children: [],
    handleClick: () => console.log(33333),
  },
  {
    title: 'Chính sách hoàn tiền của THE',
    key: '2',
    status: false,
    children: [
      {
        title: 'Phạm vi trách nhiệm',
        key: '2.1',
        status: false,
        children: [],
      },
      {
        title: 'Các trường hợp và chính sách',
        key: '2.2',
        status: false,
        ui: {
          key: 'text-[#333333] font-medium',
          title: 'text-[#333333] font-normal',
          wrapper: 'border-l-[1px] border-[#e5e5e5] border-solid pl-2',
          textWrapper: '!py-1',
        },
        children: [
          {
            title: 'Hủy đơn hàng',
            key: '2.2.1',
            status: false,
            children: [],
          },
          {
            title: 'Relabel',
            key: '2.2.2',
            status: false,
            children: [],
          },
          {
            title: 'Đơn hàng thất lạc',
            key: '2.2.3',
            status: false,
            children: [],
          },
          {
            title: 'Đơn hàng mất mát',
            key: '2.2.4',
            status: false,
            children: [],
          },
          {
            title: 'Đơn hàng Hư hỏng',
            key: '2.2.5',
            status: false,
            children: [],
          },
          {
            title: 'Đơn hàng trễ toàn trình',
            key: '2.2.6',
            status: false,
            children: [],
          },
        ],
      },
      {
        title: 'Lưu ý và quy định khác',
        key: '2.3',
        status: false,
        children: [],
      },
      {
        title: 'Miễn trừ trách nhiệm',
        key: '2.4',
        status: false,
        children: [],
      },
    ],
  },
  {
    title: 'Quy định về khiếu nại',
    key: '3',
    status: false,
    children: [
      {
        title: 'Thời gian nộp khiếu nại',
        key: '3.1',
        status: false,
        children: [],
      },
      {
        title: 'Thời gian giải quyết khiếu nại',
        key: '3.2',
        status: false,
        children: [],
      },
    ],
  },
  {
    title: 'Các Quy định khác',
    key: '4',
    status: false,
    children: [
      {
        title: 'Thời hạn khả dụng của THE tracking',
        key: '4.1',
        status: false,
        children: [],
      },
      {
        title: 'Bảo hiểm',
        key: '4.2',
        status: false,
        children: [],
      },
    ],
  },
  {
    title: 'Hàng hóa hạn chế hoặc không nhận vận chuyển',
    key: '5',
    status: false,
    children: [],
  },
])

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
