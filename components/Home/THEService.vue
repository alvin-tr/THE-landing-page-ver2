<template>
  <div
    class="px-[60px] w-full max-h-[914px] overflow-y-hidden bg-white rounded-[12px] 
    size-xs:max-h-max 
    size-lg:max-h-[914px] size-lg:pb-[1150px]
    ">
    <div class="w-full flex flex-col 
    size-xs:items-center size-xs:px-[10px]
    size-lg:items-start
    ">
      <p
        class="text-[40px] text-[#1E1F24] font-[500] leading-[60px] tracking-[-0.8px] mt-[44px]
        size-xs:text-center size-xs:text-[30px] size-xs:mt-[20px] size-xs:px-[10px]
        size-lg:px-0
        ">
        Dịch vụ của THE
      </p>
      <p
        class="text-[16px] w-[42%] text-[#868689] font-medium leading-[24px] mt-[14px]
        size-xs:text-center size-xs:w-[50%] size-xs:text-[16px]
        size-lg:text-start
        ">
        Dịch vụ ổn định và tiết kiệm chi phí,được nhiều khách hàng tin tưởng và
        đánh giá cao
      </p>
      <div class="mt-[56px] flex flex-row w-full justify-between">
        <!-- list of contents -->
        <div class="flex flex-col w-[20%] 
        size-xs:hidden 
        size-lg:flex size-lg:w-[25%] size-lg:pb-[650px]
        
        ">
          <p
            v-for="(content, index) in listOfContents"
            :key="index"
            @click="scrollToService(index)"
            :class="[
              'text-[16px] font-medium leading-[24px] mb-[24px]',
              selectedService === index ? 'text-[#0066FF]' : 'text-[#868689]',
            ]"
            class="cursor-pointer"
          >
            {{ content }}
          </p>
        </div>
        <!-- content -->
        <div
          class="flex flex-col w-[75%] max-h-[914px] overflow-y-auto
          size-xs:w-full size-xs:max-h-max
          size-lg:overflow-y-auto size-lg:max-h-[914px] size-lg:w-[75%] size-lg:mb-[65px]
          size-xl:overflow-y-auto 
          ">
          <div
            v-for="(item, index) in services"
            class="flex flex-row mb-[65px] 
            size-xs:flex-col size-xs:w-full 
            size-lg:flex-row
            "
            :id="`service-${index}`"
            :key="index"
          >
            <!-- img -->
            <div class=" 
            size-xs:flex size-xs:justify-center 
            size-lg:flex size-lg:justify-start
            
            ">
              <img
                :src="item.image"
                alt="economyDelivery"
                class="min-w-[476px] bg-cover bg-center 
                size-xs:min-w-[300px] size-xs:w-[350px]
                size-lg:min-w-[350px] size-lg:w-[450px]
                size-xl:min-w-[476px]
                "/>
            </div>
            <!-- content -->
            <div class="flex flex-col ml-[48px] 
            size-xs:items-center size-xs:mt-[20px] size-xs:ml-0
            size-lg:ml-[38px] size-lg:mt-0 
            ">
              <p class="text-[32px] text-[#1E1F24] leading-[44px] font-medium ">
                {{ item.title }}
              </p>
              <p
                class="mt-[14px] text-[#868689] font-[500] leading-[24px] mb-[8px] 
                size-xs:text-center size-xs:w-[50%]
                size-lg:text-left size-lg:w-full
                ">
                {{ item.description }}
              </p>
              <!-- item -->
              <div class="flex flex-col 
              size-xs:w-[50%] 
              size-lg:w-full
              ">
                <div
                  v-for="criterialItem in item.criteria"
                  class="flex flex-row mt-[28px] items-center"
                >
                  <div class="p-[11px] mr-[14px] bg-[#EFF0F2] rounded-[6px]">
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
    </div>
  </div>
</template>

<script setup>
const listOfContents = [
  'Chuyển phát tiết kiệm',
  'Chuyển phát Tốc độ',
  'Chuyển phát Đặc biệt',
  'Chuyển phát Tikok US',
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
        description: 'Từ $5.6',
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
        description: 'Từ $5.7',
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
]

const selectedService = ref(0)

const scrollToService = (index) => {
  const target = document.getElementById(`service-${index}`)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    selectedService.value = index
  }
}
</script>

<style lang="scss" scoped></style>
