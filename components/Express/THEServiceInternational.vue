<template>
  <BaseLayout ref="currentElementRef">
    <div
      class="px-[100px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px]"
    >
      <div
        class="px-[60px] w-full max-h-[914px] overflow-hidden rounded-[12px] mt-[100px] 
        max-size-lg:px-[15px] 
        max-size-md:px-[50px] 
        max-size-sm:px-[20px] 
        max-size-pro:px-[10px] max-size-pro:mt-0
        " >
        <div class="w-full flex flex-col max-size-lg:items-center">
          <slot></slot>
          <!--  -->
          <div class="mt-[56px] flex flex-row w-full justify-between">
            <!-- list of contents -->
            <div class="flex flex-col w-[20%] max-size-lg:w-[30%] max-size-pro:hidden">
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
              class="flex flex-col w-[75%] max-h-[914px] overflow-y-auto 
              max-size-lg:w-[60%]
              max-size-md:w-[70%]
              max-size-sm:w-[65%]
              max-size-pro:w-full
              "
               @scroll="handleScroll"
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
                  class="bg-cover bg-center 
                  max-size-md:w-full 
                  max-size-pro:w-full
                  max-size-xs:min-w-[100px] max-size-xs:max-w-[210px]"
                />
                <!-- content -->
                <div
                  class="flex flex-col ml-[48px] 
                  max-size-lg:ml-0 max-size-md:mt-[20px]
                  ">
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
                    <button @click="(() => {
                     openModalGetAQuote = true
                    })" class="w-[60%] mt-[30px]">
                      <div class="bg-[#0066FF] px-[30px] py-[14px] flex flex-row rounded-[6px] items-center justify-center">
                        <p class="text-[16px] text-white">Nhận báo giá</p>
                        <UIcon name="mingcute:arrow-right-line" class="text-white text-[20px] ml-[5px]"/>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <GetAQuote  v-model="openModalGetAQuote"/>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const currentElementRef = ref();
const openModalGetAQuote = ref(false)

const listOfContents = [
  "Chuyển phát tiết kiệm",
  "Chuyển phát Tốc độ",
  "Chuyển phát Đặc biệt",
];
const services = [
  {
    image: "/img/economyDelivery.svg",
    title: "Chuyển phát tiết kiệm",
    description:
      "Dịch vụ vận chuyển tiết kiệm, tối ưu chi phí, phù hợp với những đơn hàng không yêu cầu giao gấp",
    to:'/international-express',
    criteria: [
      {
        icon: "/icon/watchIcon.svg",
        title: "Thời gian",
        description: "7-10 ngày",
      },
      {
        icon: "/icon/dollarIcon.svg",
        title: "Chi phí",
        description: "Từ $4.9",
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
    to:'/international-express',
    criteria: [
      {
        icon: "/icon/watchIcon.svg",
        title: "Thời gian",
        description: "5-8 ngày",
      },
      {
        icon: "/icon/dollarIcon.svg",
        title: "Chi phí",
        description: "Từ $5.6",
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
    to:'/international-express',
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
  
];

const selectedService = ref(0);

const scrollToService = (index) => {
  const target = document.getElementById(`service-${index}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    selectedService.value = index;
  }
};

const handleScroll = () => {
  const offsets = services.map((_, index) => {
    const element = document.getElementById(`service-${index}`);
    if (element) {
      return element.getBoundingClientRect().top;
    }
    return Number.MAX_VALUE;
  });

  // Tìm phần tử gần nhất
  const closestIndex = offsets.findIndex((offset) => offset >= 0 && offset < window.innerHeight / 2);
  if (closestIndex !== -1) {
    selectedService.value = closestIndex;
  }
};

onMounted(() => {
      // Lấy ID của mục tiêu từ query params
      const targetId = route.query.target

      if (targetId) {
        // Đợi DOM render xong rồi scroll đến mục tiêu
        nextTick(() => {
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        })
      }
    })

</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

/* Ẩn thanh cuộn trên Firefox */
html {
  scrollbar-width: none; /* Firefox */
}

/* Ẩn thanh cuộn trên IE và Edge */
body {
  -ms-overflow-style: none; /* IE và Edge */
}
</style>
