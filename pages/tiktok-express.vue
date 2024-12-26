<template>
    <div class="bg-[#F7F8FA]">
        <HomeGlobalMarketEstimate>
            <Header class="fixed top-0 z-50 "/>
        </HomeGlobalMarketEstimate>
        <ExpressOptimalShippingServiceForSellers
        topic="Chuyển phát Tiktok Shop US"
        title="Dịch vụ chuyên biệt dành cho nhà bán hàng TiktokUS"
        descriptionRightSide="Dịch vụ Vận tải chuyên biệt cho seller TikTok US của The Human Express giúp các seller Việt tối ưu quy trình vận chuyển và mở rộng kinh doanh tại thị trường Mỹ nhanh chóng, an toàn và hiệu quả."
        imgSrc="/img/express/tiktokExpress.svg"
        :items="itemOfExpress"
        />
        <ExpressCustomerExperience :CustomerExperienceItem="CustomerExperienceItem" title="Giúp nhà bán hàng Việt Nam vươn tầm quốc tế!"/>
        <ExpressOperatingProcedure/>
        <HomeRateAndComment class="max-size-sm:mt-[-100px] "/>
        <HomeExperienceTheDifference/>
    </div>
</template>

<script setup>
const itemOfExpress = [
    {
        icon: '/icon/express/timeExpress.svg',
        title: 'Thời gian',
        description: '6-9 ngày'
    },
    {
        icon: '/icon/dollarIcon.svg',
        title: 'Chi phí',
        description: 'Từ $5.8'
    },
    {
        icon: '/icon/mapIcon.svg',
        title: 'Thời gian kích hoạt in-transit',
        description: 'Đảm bảo theo SLA TiktokUS: 24-48h'
    },
    {
        icon: '/icon/express/boxExpress.svg',
        title: 'Đơn hàng',
        description: 'Mọi kích cỡ và khối lượng'
    },
]
const CustomerExperienceItem = [
    {
        icon: '/icon/express/userExpress.svg',
        title: 'Đồng hành cùng sự phát triển của nhà bán hàng Việt',
        description: 'Được thiết kế riêng để hỗ trợ các nhà bán hàng Việt Nam vươn ra thị trường quốc tế, đặc biệt là trên nền tảng TikTok tại Mỹ. T.H.E không chỉ giúp các seller Việt Nam mở rộng quy mô kinh doanh mà còn cung cấp các giải pháp vận chuyển thuận tiện, đảm bảo việc giao hàng quốc tế trở nên dễ dàng và hiệu quả.'
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

<style lang="scss" scoped>

</style>