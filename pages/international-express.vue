<template>
  <div class="bg-[#F7F8FA]">
    <HomeGlobalMarketEstimate>
      <Header class="fixed top-0 z-50 transition-colors duration-300"/>
    </HomeGlobalMarketEstimate>
    <ExpressTHEServiceInternational/>
    <ExpressCustomerExperience :CustomerExperienceItem="CustomerExperienceItem" title="Lựa chọn hàng đầu của doanh nghiệp Việt"/>
    <ExpressOperatingProcedure />
    <HomeRateAndComment class="mt-[-100px]"/>
    <HomeExperienceTheDifference/>
  </div>
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

<style lang="scss" scoped></style>
