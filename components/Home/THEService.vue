<template>
  <BaseLayout ref="currentElementRef" class="home-service">
    <div
      class="px-[100px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px]"
    >
      <div
        class="px-[60px] w-full bg-white rounded-[12px] mt-[100px] max-size-lg:px-[15px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px] max-size-pro:mt-0"
      >
        <div class="w-full flex flex-col max-size-lg:items-center">
          <div class="sticky top-0 bg-white z-30">
            <p
              class="text-[40px] text-[#1E1F24] font-[500] leading-[60px] tracking-[-0.8px] mt-[44px] max-size-pro:text-center"
            >
              Dịch vụ của THE
            </p>
            <p
              class="text-[16px] w-[42%] text-[#868689] font-medium leading-[24px] mt-[14px] max-size-lg:w-full max-size-lg:text-center"
            >
              Dịch vụ ổn định và tiết kiệm chi phí,được nhiều khách hàng tin
              tưởng và đánh giá cao
            </p>
          </div>
          <!--  -->
          <div class="mt-[56px] flex flex-row w-full justify-between h-fit">
            <!-- list of contents -->
            <div
              class="flex flex-col w-[20%] sticky top-[220px] h-fit max-size-lg:w-[30%] max-size-md:hidden"
            >
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
              class="flex flex-col w-[75%] overflow-y-auto 
              max-size-lg:w-[60%] 
              max-size-md:w-full max-size-md:items-center"
              @scroll="handleScroll"
            >
              <div
                v-for="(item, index) in services"
                class="flex flex-row mb-[65px] max-size-lg:flex-col max-size-md:ml-[30px] max-size-md:justify-center max-size-md:items-center max-size-pro:ml-0"
                :id="`service-${index}`"
                :key="index"
              >
                <!-- img -->
                <img
                  :src="item.image"
                  alt="economyDelivery"
                  class="mbg-cover bg-center 
                  max-size-md:w-full 
                  max-size-pro:w-full
                  max-size-xs:min-w-[100px] max-size-xs:max-w-[210px]"
                />
                <!-- content -->
                <div
                  class="flex flex-col ml-[48px] max-size-lg:ml-0 max-size-lg:mt-[20px] max-size-md:mt-[20px]"
                >
                  <p
                    class="text-[32px] text-[#1E1F24] leading-[44px] font-medium max-size-md:text-center"
                  >
                    {{ item.title }}
                  </p>
                  <p
                    class="mt-[14px] text-[#868689] font-[500] leading-[24px] mb-[8px] max-size-md:text-center"
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
                    <!-- button -->
                    <div
                      class="flex max-size-md:items-center max-size-md:justify-center"
                    >
                      <button
                        @click="
                          $router.push({
                            path: item.to,
                            query: { target: `service-${index}` },
                          })
                        "
                        class="w-[60%] mt-[30px] max-size-pro:w-full"
                      >
                        <div
                          class="bg-[#0066FF] px-[30px] py-[14px] flex flex-row rounded-[6px] items-center justify-center"
                        >
                          <p class="text-[16px] text-white">Xem chi tiết</p>
                          <UIcon
                            name="mingcute:arrow-right-line"
                            class="text-white text-[20px] ml-[5px]"
                          />
                        </div>
                      </button>
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
import { onMounted } from 'vue'

const router = useRouter()

const currentElementRef = ref()

const listOfContents = [
  'Chuyển phát tiết kiệm',
  'Chuyển phát Tốc độ',
  'Chuyển phát Đặc biệt',
  'Chuyển phát Tikok US',
  'Chuyển phát hàng FBA',
]
const services = [
  {
    image: '/img/economyDelivery.svg',
    title: 'Chuyển phát tiết kiệm',
    description:
      'Dịch vụ vận chuyển tiết kiệm, tối ưu chi phí, phù hợp với những đơn hàng không yêu cầu giao gấp',
    to: '/international-express',
    criteria: [
      {
        icon: '/icon/watchIcon.svg',
        title: 'Thời gian',
        description: '7-10 ngày',
      },
      {
        icon: '/icon/dollarIcon.svg',
        title: 'Chi phí',
        description: 'Từ $5.1',
      },
      {
        icon: '/icon/mapIcon.svg',
        title: 'Theo dõi hành trình',
        description: 'Minh bạch từng địa điểm',
      },
    ],
  },
  {
    image: '/img/speedDelivery.svg',
    title: 'Chuyển phát Tốc độ',
    description:
      'Dịch vụ ưu tiên giao hàng thần tốc, đúng hẹn trên từng chặng đường',
    to: '/international-express',
    criteria: [
      {
        icon: '/icon/watchIcon.svg',
        title: 'Thời gian',
        description: '5-8 ngày',
      },
      {
        icon: '/icon/dollarIcon.svg',
        title: 'Chi phí',
        description: 'Từ $6.1',
      },
      {
        icon: '/icon/mapIcon.svg',
        title: 'Theo dõi hành trình',
        description: 'Minh bạch từng địa điểm',
      },
    ],
  },
  {
    image: '/img/specialDelivery.svg',
    title: 'Chuyển phát Đặc biệt',
    description:
      'Giải pháp vận chuyển cho hàng hóa kích thước lớn (chiều dài trên 55cm), sản phẩm khó (mỹ phẩm, sản phẩm chứa pin, nam châm..)',
    to: '/international-express',
    criteria: [
      {
        icon: '/icon/boxIcon.svg',
        title: 'Chất lượng',
        description: 'An toàn & Đảm bảo',
      },
      {
        icon: '/icon/dollarIcon.svg',
        title: 'Chi phí',
        description: 'Tiết kiệm & nhanh chóng',
      },
      {
        icon: '/icon/mapIcon.svg',
        title: 'Theo dõi hành trình',
        description: 'Minh bạch từng địa điểm',
      },
    ],
  },
  {
    image: '/img/tiktokUSDelivery.svg',
    title: 'Chuyển phát Tikok US',
    description:
      'Dịch vụ vận chuyển tiết kiệm, tối ưu chi phí, phù hợp với những đơn hàng không yêu cầu giao gấp',
    to: '/tiktok-express',
    criteria: [
      {
        icon: '/icon/watchIcon.svg',
        title: 'Thời gian',
        description: '6-9 ngày',
      },
      {
        icon: '/icon/watchIcon.svg',
        title: 'Thời gian kích hoạt in-transit',
        description: 'Đảm bảo theo SLA TiktokUS: 24-48h',
      },
      {
        icon: '/icon/dollarIcon.svg',
        title: 'Chi phí',
        description: 'Từ $5.7',
      },
      {
        icon: '/icon/boxIcon.svg',
        title: 'Đơn hàng',
        description: 'Mọi kích cỡ và khối lượng',
      },
    ],
  },
  {
    image: '/img/FBADelivery.svg',
    title: 'Chuyển phát Tikok US',
    description:
      'Dịch vụ vận chuyển hàng đến các kho FBA của Amazon một cách nhanh chóng và hiệu quả.',
    to: '/fba-express',
    criteria: [
      {
        icon: '/icon/watchIcon.svg',
        title: 'Thời gian',
        description: '3-7 ngày',
      },
      {
        icon: '/icon/mapIcon.svg',
        title: 'Theo dõi hành trình',
        description: 'Minh bạch từng địa điểm',
      },
      {
        icon: '/icon/dollarIcon.svg',
        title: 'Chi phí',
        description: 'Từ $39/kg',
      },
      {
        icon: '/icon/documentIcon.svg',
        title: 'Bảng chỉ báo kho FBA',
        description: 'Giúp nhà bán hàng theo dõi kế hoạch ghép đơn đi FBA',
      },
    ],
  },
]
onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const selectedService = ref(0)

const scrollToService = (index) => {
  const target = document.getElementById(`service-${index}`)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    selectedService.value = index
  }
}

const handleScroll = () => {
  const serviceElements = services.map((_, index) =>
    document.getElementById(`service-${index}`)
  )

  for (let i = 0; i < serviceElements.length; i++) {
    const element = serviceElements[i]
    if (element) {
      const rect = element.getBoundingClientRect()
      // Kiểm tra nếu phần tử này đang trong viewport (top và bottom)
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        selectedService.value = i
        break
      }
    }
  }
}
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
