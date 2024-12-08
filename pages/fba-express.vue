<template>
    <div class="bg-[#F7F8FA]">
        <HomeGlobalMarketEstimate>
            <Header  />
        </HomeGlobalMarketEstimate>
        <ExpressOptimalShippingServiceForSellers
        title="Chuyển phát hàng FBA"
        descriptionRightSide="Dịch vụ chuyển phát hàng FBA của THE giúp tối ưu chi phí và thời gian vận chuyển, đảm bảo hàng hóa được gửi trực tiếp đến các kho FBA của Amazon một cách nhanh chóng và hiệu quả."
        imgSrc="/img/express/tiktokExpress.svg"
        :items="itemOfExpress"
        />
        <ExpressCustomerExperience :CustomerExperienceItem="CustomerExperienceItem"/>
        <ExpressOperatingProcedure/>
        <HomeRateAndComment class="mt-[-172px] max-size-pro:mt-[-100px]"/>
        <HomeExperienceTheDifference/>
    </div>
</template>

<script setup>
const itemOfExpress = [
    {
        icon: '/icon/express/timeExpress.svg',
        title: 'Thời gian',
        description: '3-7 ngày'
    },
    {
        icon: '/icon/dollarIcon.svg',
        title: 'Chi phí',
        description: 'Từ $39/kg'
    },
    {
        icon: '/icon/mapIcon.svg',
        title: 'Theo dõi hành trình',
        description: 'Minh bạch từng địa điểm'
    },
    {
        icon: '/icon/express/boxExpress.svg',
        title: 'Đơn hàng',
        description: 'Mọi kích cỡ và khối lượng'
    },
    {
        icon: '/icon/documentIcon.svg',
        title: 'Bảng chỉ báo kho FBA cho ngày hôm sau',
        description: 'Giúp nhà bán hàng chuẩn bị kịp thời hàng tồn kho, đảm bảo sẵn sàng bán.'
    },
]
const CustomerExperienceItem = [
    {
        icon: '/icon/express/userExpress.svg',
        title: 'Đồng hành cùng sự phát triển của nhà bán hàng Việt',
        description: 'T.H.E nhận thấy rõ tiềm năng và cơ hội phát triển của các nhà bán hàng Việt trên nền tảng Amazon, T.H.E không chỉ cung cấp các giải pháp tối ưu hóa quy trình vận chuyển mà còn đảm bảo quyền lợi, tránh gây tổn thất cho khách hàng trong những trường hợp không mong muốn'
    },
    {
        icon: '/icon/express/planeExpress.svg',
        title: 'Tối ưu trải nghiệm khách hàng',
        description: 'T.H.E cung cấp các công cụ và dịch vụ hỗ trợ theo dõi tình trạng kho, giúp khách hàng dễ dàng quản lý hàng tồn kho, lên kế hoạch bổ sung hàng hóa kịp thời, tránh tình trạng thiếu hụt hàng bán'
    },
    {
        icon: '/icon/express/boxExpress.svg',
        title: 'Tiết kiệm chi phí',
        description: 'Dịch vụ của T.H.E giúp nhà bán hàng giảm thiểu chi phí so với việc tự vận chuyển trực tiếp đến kho FBA, nâng cao hiệu quả kinh doanh.'
    },
    {
        icon: '/icon/express/timeExpress.svg',
        title: 'Tốc độ giao hàng nhanh chóng',
        description: 'Với tần suất vận chuyển hàng đều đặn mỗi ngày, T.H.E đảm bảo hàng hóa được chuyển nhanh chóng và đúng hạn đến kho FBA.'
    },
]
</script>

<style lang="scss" scoped>

</style>