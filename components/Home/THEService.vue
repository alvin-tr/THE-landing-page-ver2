<template>
  <div
    class="px-[60px] w-full max-h-[914px] overflow-y-hidden bg-white rounded-[12px]"
  >
    <div class="w-full flex flex-col">
      <p
        class="text-[40px] text-[#1E1F24] font-[500] leading-[60px] tracking-[-0.8px] mt-[44px]"
      >
        Dịch vụ của THE
      </p>
      <p
        class="text-[16px] w-[42%] text-[#868689] font-medium leading-[24px] mt-[14px]"
      >
        Dịch vụ ổn định và tiết kiệm chi phí,được nhiều khách hàng tin tưởng và
        đánh giá cao
      </p>
      <div class="mt-[56px] flex flex-row w-full justify-between">
        <!-- list of contents -->
        <div class="flex flex-col w-[20%]">
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
          class="flex flex-col w-[75%] max-h-[914px] overflow-y-auto"
        >
          <div
            v-for="(item, index) in services"
            class="flex flex-row mb-[65px]"
            :id="`service-${index}`"
            :key="index"
          >
            <!-- img -->
            <div>
              <img
                :src="item.image"
                alt="economyDelivery"
                class="min-w-[476px] bg-cover bg-center"
              />
            </div>
            <!-- content -->
            <div class="flex flex-col ml-[48px]">
              <p class="text-[32px] text-[#1E1F24] leading-[44px] font-medium">
                {{ item.title }}
              </p>
              <p
                class="mt-[14px] text-[#868689] font-[500] leading-[24px] mb-[8px]"
              >
                {{ item.description }}
              </p>
              <div class="flex flex-col">
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
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    selectedService.value = index
  }
}
</script>

<style lang="scss" scoped></style>
