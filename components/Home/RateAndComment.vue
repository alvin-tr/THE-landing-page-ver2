<script setup>
const items = [
  {
    title: 'Rất tuyệt vời',
    content:
      'Thực sự tuyệt vời! Tìm kiếm thông tin dễ dàng và nhanh chóng. Đội ngũ hỗ trợ khách hàng chuyên nghiệp, luôn sẵn sàng giúp đỡ. Cảm thấy an tâm và tin tưởng khi sử dụng dịch vụ vận chuyển của The Human Express.',
    avatar: '/img/avatar/user-icon1.svg',
    name: 'Le Thi Thuan',
    company: 'Amazon Seller',
  },
  {
    title: 'Dễ sử dụng',
    content:
      'Đơn giản là tuyệt vời! Dễ dàng tìm thấy thông tin về các dịch vụ và tùy chọn vận chuyển. Giao diện trực quan và thân thiện, giúp mình tiết kiệm thời gian và nỗ lực. Mình sẽ rủ đồng nghiệp dùng thử dịch vụ này.',
    avatar: '/img/avatar/user-icon2.svg',
    name: 'Dang Minh Hoang',
    company: 'CEO - The Human INC',
  },
  {
    title: 'Trải nghiệm tốt',
    content:
      'Trải nghiệm rất tốt nhé!! Web cung cấp đầy đủ thông tin về tuyến đường, phí vận chuyển và thời gian giao hàng. Dịch vụ chất lượng cao, tư vấn tận tình, không thể hài lòng hơn với sự chuyên nghiệp này.',
    avatar: '/img/avatar/user-icon3.svg',
    name: 'Hoang Nguyen',
    company: 'Dropship Seller',
  },
  {
    title: 'Thông tin rõ ràng',
    content:
      'Vận chuyển quốc tế dễ mà siêu nhanh luôn ạ. Trang web rất dễ sử dụng, có thể theo dõi lộ trình vận chuyển nữa. Mình đánh giá cao thiết kế và đội ngũ phát triển của công ty nhé, hy vọng các bạn có tiếp tục phát triển.',
    avatar: '/img/avatar/user-icon4.svg',
    name: 'Van Nguyen',
    company: 'CEO - Megamind Digital Limited',
  },
  {
    title: 'Tiện dụng',
    content:
      'Sản phẩm tiện dụng lắm. Tôi có thể tính toán phí vận chuyển và chọn phương thức vận chuyển phù hợp nhanh chóng. Rất hài lòng với trải nghiệm của mình và sẽ tiếp tục sử dụng dịch vụ nha.',
    avatar: '/img/avatar/user-icon5.svg',
    name: 'Vu Thu Hien',
    company: 'Amazon Seller',
  },
]
const caroselRef = ref(null)
const handleNext = () => {
  if (caroselRef.value.page === caroselRef.value.pages)
    return caroselRef.value.select(1)
  caroselRef.value.next()
}
const handlePrev = () => {
  if (caroselRef.value.page === 1)
    return caroselRef.value.select(caroselRef.value.pages)
  caroselRef.value.prev()
}

onMounted(() => {
  setInterval(() => {
    if (!caroselRef.value) return

    if (caroselRef.value.page === caroselRef.value.pages) {
      return caroselRef.value.select(0)
    }

    caroselRef.value.next()
  }, 3000)
})
</script>

<template>
  <BaseLayout>
    <div class="px-[100px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px]">
      <div class="mt-[72px]">
        <UCarousel
          ref="caroselRef"
          :items="items"
          :ui="{
            // arrows:'',
            item: 'basis-full',
            container: 'rounded-lg',
            arrows: { wrapper: 'absolute w-full top-1/2 -translate-y-1/2' },
  
            indicators: {
              wrapper: 'relative bottom-0 mt-4',
            },
          }"
          indicators
          arrows
          class="lg:w-[50%] w-[70%] mx-auto"
        >
          <template #prev="{ onClick, disabled }">
            <div
              class="absolute right-full w-[60px] h-[60px] p-[5px] mx-[30px] bg-white flex items-center justify-center rounded-[50px] sm:w-[120px] sm:h-[120px] screen490:w-[80px] screen490:h-80px cursor-pointer"
              :disabled="disabled"
              @click="handlePrev"
            >
              <UIcon name="mingcute:arrow-left-line" class="text-[#333333cf] text-[25px]"/>
            </div>
          </template>
          <template #next="{ onClick, disabled }">
            <div
              class="absolute left-full w-[60px] h-[60px] p-[5px] mx-[30px] bg-white flex items-center justify-center rounded-[50px] sm:w-[120px] sm:h-[120px] screen490:w-[80px] screen490:h-80px cursor-pointer"
              :disabled="disabled"
              @click="handleNext"
            >
              <UIcon name="mingcute:arrow-right-line" class="text-[#333333cf] text-[25px]"/>
            </div>
          </template>
          <template #default="{ item }">
            <div class="flex flex-col gap-4 xl:px-10">
              <p
                class="font-medium text-[18px] leading-[28px] text-center text-[#0066FF]"
              >
                {{ item.title }}
              </p>
              <p class="text-[14px] leading-[20px] text-center text-[#333333]">
                {{ item.content }}
              </p>
              <div class="flex flex-col items-center gap-3 mt-4">
                <UAvatar :src="item.avatar" size="xl" />
                <p
                  class="font-medium text-[16px] leading-[24px] text-center text-[#333333]"
                >
                  {{ item.name }}
                </p>
                <p
                  class="font-normal text-[12px] leading-[20px] text-center text-[#868689]"
                >
                  {{ item.company }}
                </p>
              </div>
            </div>
            <!-- <img :src="item" class="w-full" draggable="false"> -->
          </template>
  
          <template #indicator="{ onClick, page, active }">
            <div
              :class="{
                'bg-slate-300 w-[32px] h-[4px]': true,
                '!bg-[#0066FF]': active,
              }"
              @click="onClick(page)"
            ></div>
          </template>
        </UCarousel>
      </div>
    </div>
  </BaseLayout>
</template>
