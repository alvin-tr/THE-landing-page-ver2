<template>
  <BaseLayout ref="currentElementRef">
    <div
      class="px-[100px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px]"
    >
      <div
        class="px-[60px] w-full max-h-[914px] overflow-hidden bg-white rounded-[12px] mt-[100px] max-size-lg:px-[15px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px]"
      >
        <div class="w-full flex flex-col max-size-lg:items-center">
          <p
            class="text-[40px] text-[#1E1F24] font-[500] leading-[60px] tracking-[-0.8px] mt-[44px]"
          >
            Dịch vụ của THE
          </p>
          <p
            class="text-[16px] w-[42%] text-[#868689] font-medium leading-[24px] mt-[14px] max-size-lg:w-full max-size-lg:text-center"
          >
            Dịch vụ ổn định và tiết kiệm chi phí,được nhiều khách hàng tin tưởng
            và đánh giá cao
          </p>
          <!--  -->
          <div class="mt-[56px] flex flex-row w-full justify-between">
            <!-- list of contents -->
            <div class="flex flex-col w-[20%] max-size-lg:w-[30%]">
              <p
                v-for="(content, index) in listOfContents"
                :key="index"
                @click="scrollToService(index)"
                :class="[
                  'text-[16px] font-medium leading-[24px] mb-[24px]',
                  selectedService === index
                    ? 'text-[#0066FF]'
                    : 'text-[#868689]',
                ]"
                class="cursor-pointer"
              >
                {{ content }}
              </p>
            </div>
            <!-- content -->
            <div
              class="flex flex-col w-[75%] max-h-[914px] overflow-y-auto max-size-lg:w-[60%] max-size-md:w-[70%] max-size-sm:w-[65%]"
              onSlideMove()
            >
              <div
                v-for="(item, index) in services"
                class="flex flex-row mb-[65px] max-size-lg:flex-col max-size-md:ml-[30px] max-size-pro:ml-0"
                :id="`service-${index}`"
                :key="index"
              >
                <!-- img -->
                <img
                  :src="item.image"
                  alt="economyDelivery"
                  class="min-w-[476px] bg-cover bg-center max-size-md:min-w-[350px] max-size-md:max-w-[200px] max-size-pro:min-w-[150px] max-size-pro:max-w-[230px] max-size-xs:min-w-[100px] max-size-xs:max-w-[210px]"
                />
                <!-- children -->
                <div
                  class="flex flex-col ml-[48px] max-size-lg:ml-0 max-size-md:mt-[20px]"
                >
                  <p
                    class="text-[32px] text-[#1E1F24] leading-[44px] font-medium"
                  >
                    {{ item.title }}
                  </p>
                  <p
                    class="mt-[14px] text-[#868689] font-[500] leading-[24px] mb-[8px]"
                  >
                    {{ item.description }}
                  </p>
                  <!-- item -->
                  <div class="flex flex-col">
                    <div
                      v-for="criterialItem in item.criteria"
                      class="flex flex-row mt-[28px] items-center max-size-lg:mt-[10px]"
                    >
                      <div
                        class="p-[11px] mr-[14px] bg-[#EFF0F2] rounded-[6px]"
                      >
                        <img :src="criterialItem.icon" class="w-[24px]" />
                      </div>
                      <div class="flex flex-col">
                        <p
                          class="text-[16px] text-[#868689] font-medium leading-[24px]"
                        >
                          {{ criterialItem.title }}
                        </p>
                        <p
                          class="text-[18px] text-[#1E1F24] font-medium leading-[24px] mt-[6px]"
                        >
                          {{ criterialItem.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
const currentElementRef = ref();
const listOfContents = [
  "Chuyển phát tiết kiệm",
  "Chuyển phát Tốc độ",
  "Chuyển phát Đặc biệt",
  "Chuyển phát Tikok US",
];
const services = [
  {
    image: "/img/economyDelivery.svg",
    title: "Chuyển phát tiết kiệm",
    description:
      "Dịch vụ vận chuyển tiết kiệm, tối ưu chi phí, phù hợp với những đơn hàng không yêu cầu giao gấp",
    criteria: [
      {
        icon: "/icon/watchIcon.svg",
        title: "Thời gian",
        description: "7-10 ngày",
      },
      {
        icon: "/icon/dollarIcon.svg",
        title: "Chi phí",
        description: "Từ $5.1",
      },
      {
        icon: "/icon/mapIcon.svg",
        title: "Theo dõi hành trình",
        description: "Minh bạch từng địa điểm",
      },
    ],
  },
  {
    image: "/img/speedDelivery.svg",
    title: "Chuyển phát Tốc độ",
    description:
      "Dịch vụ ưu tiên giao hàng thần tốc, đúng hẹn trên từng chặng đường",
    criteria: [
      {
        icon: "/icon/watchIcon.svg",
        title: "Thời gian",
        description: "5-8 ngày",
      },
      {
        icon: "/icon/dollarIcon.svg",
        title: "Chi phí",
        description: "Từ $6.1",
      },
      {
        icon: "/icon/mapIcon.svg",
        title: "Theo dõi hành trình",
        description: "Minh bạch từng địa điểm",
      },
    ],
  },
  {
    image: "/img/specialDelivery.svg",
    title: "Chuyển phát Đặc biệt",
    description:
      "Giải pháp vận chuyển cho hàng hóa kích thước lớn (chiều dài trên 55cm), sản phẩm khó (mỹ phẩm, sản phẩm chứa pin, nam châm..)",
    criteria: [
      {
        icon: "/icon/boxIcon.svg",
        title: "Chất lượng",
        description: "An toàn & Đảm bảo",
      },
      {
        icon: "/icon/dollarIcon.svg",
        title: "Chi phí",
        description: "Tiết kiệm & nhanh chóng",
      },
      {
        icon: "/icon/mapIcon.svg",
        title: "Theo dõi hành trình",
        description: "Minh bạch từng địa điểm",
      },
    ],
  },
  {
    image: "/img/tiktokUSDelivery.svg",
    title: "Chuyển phát Tikok US",
    description:
      "Dịch vụ vận chuyển tiết kiệm, tối ưu chi phí, phù hợp với những đơn hàng không yêu cầu giao gấp",
    criteria: [
      {
        icon: "/icon/watchIcon.svg",
        title: "Thời gian",
        description: "6-9 ngày",
      },
      {
        icon: "/icon/watchIcon.svg",
        title: "Thời gian kích hoạt in-transit",
        description: "Đảm bảo theo SLA TiktokUS: 24-48h",
      },
      {
        icon: "/icon/dollarIcon.svg",
        title: "Chi phí",
        description: "Từ $5.7",
      },
      {
        icon: "/icon/boxIcon.svg",
        title: "Đơn hàng",
        description: "Mọi kích cỡ và khối lượng",
      },
    ],
  },
];

const selectedService = ref(0);
const scrollToService = (index) => {
  const target = document.getElementById(`service-${index}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    selectedService.value = index;
  }
};
function getScrollPosition(element) {
  return {
    currentScrollTop: element.scrollTop,
    maxScrollTop: element.scrollHeight - element.clientHeight,
    currentScrollLeft: element.scrollLeft,
    maxScrollLeft: element.scrollWidth - element.clientWidth,
  };
}
onMounted(() => {
  // document.addEventListener('scroll', (e) => {
  //   if (currentElementRef.value) {
  //     const scrollPosition = getScrollPosition(currentElementRef.value)
  //     console.log('Scroll Position:', scrollPosition)
  //   }
  // })
});
</script>

<style scoped>
/* Định dạng thanh cuộn */
::-webkit-scrollbar {
  width: 8px; /* Độ rộng của thanh cuộn */
  height: 8px; /* Độ cao (nếu là thanh cuộn ngang) */
}

/* Định dạng thanh cuộn (track) */
::-webkit-scrollbar-track {
  background: #f0f0f0b7; /* Màu nền track */
  border-radius: 10px; /* Bo tròn track */
}

/* Định dạng thanh cuộn (thumb) */
::-webkit-scrollbar-thumb {
  background: #c9c9c9; /* Màu của thanh cuộn */
  border-radius: 10px; /* Bo tròn thanh cuộn */
}

/* Định dạng thanh cuộn khi hover */
::-webkit-scrollbar-thumb:hover {
  background: #004fcc; /* Màu thanh cuộn khi hover */
}
</style>
