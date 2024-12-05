<template>
    <BaseLayout>
          <div class="px-[100px] w-full shadow-lg shadow-[#7cd87ce4] pt-[100px]">
            <div class=" py-[48px] overflow-hidden w-full flex flex-col items-center bg-white rounded-[20px]">
              <p class="text-[40px] text-[#1E1F24] leading-[60px] font-medium text-center w-[45%]  ">
                Lựa chọn hàng đầu của doanh nghiệp Việt
              </p>
              <div class="flex flex-row mt-[70px] ml-[70px]">
                  <!-- 1 -->
                  <div class="w-[60%] flex flex-col">
                      <div 
                      v-for="itemExpress in CustomerExperienceItem"
                      class="flex flex-col mb-[66px]">
                          <div class="flex flex-row">
                              <img :src="itemExpress.icon" class="w-[26px]">
                              <p class="text-[20px] text-[#1E1F24] leading-[32px] font-semibold ml-[12px]">{{ itemExpress.title }}</p>
                          </div>
                          <p class="text-[16px] text-[#868689] leading-[24px] font-normal mt-[12px] w-[85%]">{{ itemExpress.description }}</p>
                      </div>
                  </div>
                  <!-- 2 -->
                  <div class="w-[40%] bg-[url('/img/homeUIInExpress.svg')] bg-cover">
                  </div>
                  
              </div>
            </div>
          </div>
        </BaseLayout>
</template>

<script setup>
const CustomerExperienceItem = [
    {
        icon: '/icon/express/userExpress.svg',
        title: '100% Khách hàng hài lòng',
        description: 'T.H.E thấu hiểu và đồng hành cùng các doanh nghiệp Việt trên con đường chinh phục thị trường quốc tế. Đội ngũ chuyên nghiệp của T.H.E luôn sẵn sàng hỗ trợ 24/7 và đảm bảo quá trình vận chuyển diễn ra suôn sẻ, nhanh chóng.'
    },
    {
        icon: '/icon/express/planeExpress.svg',
        title: 'Tối ưu trải nghiệm khách hàng',
        description: 'Mọi thao tác trong quy trình tạo đơn, theo dõi vận chuyển và thanh toán được tích hợp trên một hệ thống đồng bộ giúp khách hàng quản lý dễ dàng và hiệu quả'
    },
    {
        icon: '/icon/express/boxExpress.svg',
        title: 'Tiết kiệm chi phí',
        description: 'Với các gói dịch vụ linh hoạt và công nghệ tối ưu, T.H.E giúp khách hàng tiết kiệm chi phí mà vẫn đảm bảo chất lượng dịch vụ, phù hợp với mọi nhu cầu'
    },
    {
        icon: '/icon/express/timeExpress.svg',
        title: 'Thời gian vận chuyển nhanh chóng',
        description: 'Với tần suất vận chuyển hàng không đều đặn mỗi ngày, T.H.E cam kết giao hàng nhanh chóng và đúng thời gian, đảm bảo sự hài lòng và giữ vững uy tín cho nhà bán hàng, góp phần nâng cao hiệu quả kinh doanh và tạo dựng lòng tin lâu dài với khách hàng'
    },
]
</script>

<style scoped></style>
