<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
const items = [
  {
    title: "Rất tuyệt vời",
    content:
      "Thực sự tuyệt vời! Tìm kiếm thông tin dễ dàng và nhanh chóng. Đội ngũ hỗ trợ khách hàng chuyên nghiệp, luôn sẵn sàng giúp đỡ. Cảm thấy an tâm và tin tưởng khi sử dụng dịch vụ vận chuyển của The Human Express.",
    avatar: "/img/avatar/user-icon1.svg",
    name: "Le Thi Thuan",
    company: "Amazon Seller",
  },
  {
    title: "Dễ sử dụng",
    content:
      "Đơn giản là tuyệt vời! Dễ dàng tìm thấy thông tin về các dịch vụ và tùy chọn vận chuyển. Giao diện trực quan và thân thiện, giúp mình tiết kiệm thời gian và nỗ lực. Mình sẽ rủ đồng nghiệp dùng thử dịch vụ này.",
    avatar: "/img/avatar/user-icon2.svg",
    name: "Dang Minh Hoang",
    company: "CEO - The Human INC",
  },
  {
    title: "Trải nghiệm tốt",
    content:
      "Trải nghiệm rất tốt nhé!! Web cung cấp đầy đủ thông tin về tuyến đường, phí vận chuyển và thời gian giao hàng. Dịch vụ chất lượng cao, tư vấn tận tình, không thể hài lòng hơn với sự chuyên nghiệp này.",
    avatar: "/img/avatar/user-icon3.svg",
    name: "Hoang Nguyen",
    company: "Dropship Seller",
  },
  {
    title: "Thông tin rõ ràng",
    content:
      "Vận chuyển quốc tế dễ mà siêu nhanh luôn ạ. Trang web rất dễ sử dụng, có thể theo dõi lộ trình vận chuyển nữa. Mình đánh giá cao thiết kế và đội ngũ phát triển của công ty nhé, hy vọng các bạn có tiếp tục phát triển.",
    avatar: "/img/avatar/user-icon4.svg",
    name: "Van Nguyen",
    company: "CEO - Megamind Digital Limited",
  },
  {
    title: "Tiện dụng",
    content:
      "Sản phẩm tiện dụng lắm. Tôi có thể tính toán phí vận chuyển và chọn phương thức vận chuyển phù hợp nhanh chóng. Rất hài lòng với trải nghiệm của mình và sẽ tiếp tục sử dụng dịch vụ nha.",
    avatar: "/img/avatar/user-icon5.svg",
    name: "Vu Thu Hien",
    company: "Amazon Seller",
  },
];
const caroselRef = ref(null);

const indexActive = ref(0);
const swiperInstance = defineModel();
const onSwiper = (swiper) => {
  // console.log(swiper)
  swiperInstance.value = swiper;
};
function handlePrev() {
  if (swiperInstance.value) swiperInstance.value.slidePrev();
}
function handleNext() {
  if (swiperInstance.value) swiperInstance.value.slideNext();
}
const onSlideChange = (swiper) => {
  // console.log('slide change', )
  indexActive.value = swiper.realIndex;
};
const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return ` <div
  //           class="bg-black min-w-[40px] h-[6px] cursor-pointer ${className}}"
  //         ></div>`;
  //   },
};
</script>
<style>
.comment .swiper-pagination {
  display: flex;
  top: 100%;
  height: fit-content;
}
</style>
<template>
  <BaseLayout class="comment">
    <div
      class="px-[100px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px]"
    >
      <div class="mt-[72px] flex items-center max-w-[1024px] mx-auto">
        <!-- prev -->
        <div
          class="w-[60px] h-[60px] min-w-[60px] rounded-full bg-[#3737] flex items-center justify-center cursor-pointer
          max-size-2xl:size-[60px]
          max-size-pro:min-w-[40px] max-size-pro:h-[40px]
          "
          @click="handlePrev"
        >
          <UIcon
            name="mingcute:arrow-left-line"
            class="text-[#333333cf] text-[25px]"
          />
        </div>
        <Swiper
          class="mySwiper relative"
          :loop="true"
          slides-per-view="1"
          :space-between="24"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :modules="[Autoplay, Pagination, Navigation]"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="pagination"
          @click="() => swiperInstance.slideTo(index)"
        >
          <SwiperSlide v-for="item in items">
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
          </SwiperSlide>
        </Swiper>
        <!-- next -->
        <div
          class="size-[60px] min-w-[60px] rounded-full bg-white flex items-center justify-center cursor-pointer
          max-size-pro:min-w-[40px] max-size-pro:h-[40px]
          "
          @click="handleNext"
        >
          <UIcon
            name="mingcute:arrow-right-line"
            class="text-[#333333cf] text-[25px]"
          />
        </div>
      </div>
      <div class="w-fit mx-auto flex gap-3 mt-9">
        <div
          v-for="(item, index) in items"
          :class="{
            'bg-slate-300 min-w-[40px] h-[6px] cursor-pointer': true,
            '!bg-[#0066FF]': indexActive === index,
          }"
          @click="
            () => {
              swiperInstance.slideToLoop(index);
            }
          "
        ></div>
      </div>
    </div>
  </BaseLayout>
</template>
