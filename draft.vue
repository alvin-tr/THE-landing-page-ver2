<template>
     <div
      class="px-[100px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px]"
    >
      <div
        class="px-[60px] w-full max-h-[750px] overflow-hidden bg-white rounded-[12px] mt-[100px] 
        max-size-lg:px-[15px] 
        max-size-md:px-[50px] 
        max-size-sm:px-[20px] 
        max-size-pro:px-[10px]
        ">
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
              class="flex flex-col w-[75%] max-h-[914px] overflow-y-auto 
              max-size-lg:w-[60%] 
              max-size-md:w-[70%]
              max-size-sm:w-[65%]
              ">
              <div
                v-for="(item, index) in services"
                class="flex flex-row mb-[65px] 
                max-size-lg:flex-col
                max-size-md:ml-[30px]
                max-size-pro:ml-0
                "
                :id="`service-${index}`"
                :key="index"
              >
                <!-- img -->
                  <img
                    :src="item.image"
                    alt="economyDelivery"
                    class="min-w-[476px] bg-cover bg-center 
                    max-size-md:min-w-[350px] max-size-md:max-w-[200px]
                    max-size-pro:min-w-[150px] max-size-pro:max-w-[230px] 
                    max-size-xs:min-w-[100px] 
                    max-size-xs:max-w-[210px]
                    "/>
                <!-- children -->
                <div
                  class="flex flex-col ml-[48px] 
                  max-size-lg:ml-0 
                  max-size-md:mt-[20px] 
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>

    <div class="w-[75%]">
              <Splide :options="slideOptions" ref="splide" @splide:moved="onSlideMove">
                <SplideSlide v-for="(item, index) in services" :key="index">
                  <div
                    class="flex flex-row mb-[65px] mx-[20px] max-size-lg:flex-col max-size-md:ml-[30px] max-size-pro:ml-0"
                    :id="`service-${index}`"
                    :key="index"
                  >
                    <!-- img -->
                    <div
                      class="w-[476px] min-w-[476px]  min-h-[582px] object-cover "
                    >
                      <img
                        :src="item.image"
                        alt="economyDelivery"
                        class="w-full h-[582px] object-cover rounded-[12px] max-size-md:min-w-[350px] max-size-md:max-w-[200px] max-size-pro:min-w-[150px] max-size-pro:max-w-[230px] max-size-xs:min-w-[100px] max-size-xs:max-w-[210px]"
                      />
                    </div>
                    <!-- children -->
                    <div
                      class="flex flex-col ml-[28px] max-size-lg:ml-0 max-size-md:mt-[20px]"
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
                            class="p-[11px] w-[46px] h-[46px] mr-[14px] bg-[#EFF0F2] rounded-[6px]"
                          >
                            <img
                              :src="criterialItem.icon"
                              class="w-[24px] min-w-[24px]"
                            />
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

                      <div class="bg-[#0066FF] flex flex-row w-[252px] py-[14px] items-center justify-center rounded-[6px] mt-[64px]">
                            <p class="text-[16px] font-medium leading-[24px] mr-[5px]">Xem chi tiết</p>
                            <UIcon name="mingcute:arrow-right-line" class="text-[16px]"/>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const slideOptions = {
  pagination: false,
  arrows: false,
  type: 'loop',
  paginationDirection: 'ltr',
  autoplay: true,
  interval: 2000,
  perPage: 1,
}

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
    title: 'Chuyển phát hàng FBA',
    description:
      'Dịch vụ vận chuyển hàng đến các kho FBA của Amazon một cách nhanh chóng và hiệu quả.',
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

const selectedService = ref(0)
const splide = ref()

const goToSlide = (index) => {
  if (splide.value) {
    selectedService.value = index
    splide.value.go(index)
  }
}
const onSlideMove = (splided) => {
  selectedService.value = splided.index;
}
</script>

<style lang="scss" scoped>

</style>