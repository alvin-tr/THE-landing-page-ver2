<template>
    <BaseLayout>
        <div class="py-[100px] flex flex-col items-center">
            <p class="text-[#1E1F24] text-[40px] leading-[60px] font-medium">
                Quy trình vận hành của T.H.E
            </p>
            <div class="w-full min-w-[1024px]">
                <img src="/img/express/operatingProcedureExpress.svg" alt="">
            </div>
        </div>
    </BaseLayout>
</template>

<script setup>
    const textOfOperatingProcedureExpressImg = [
        {
            title: 'Lập kế hoạch',
            description: 'Tiếp nhận yêu cầu từ khách hàng - Tư vấn dịch vụ phù hợp -  Cung cấp báo giá '
        },
        {
            title: 'Nhận hàng',
            description: 'Thu hàng tại địa chỉ khách, kiểm tra, đóng gói, và cấp mã vận đơn.'
        },
        {
            title: 'Vận chuyển',
            description: 'Gửi hàng theo lộ trình, cập nhật trạng thái vận đơn.'
        },
        {
            title: 'Giao hàng',
            description: 'Liên hệ, giao tận nơi, xác nhận hoàn tất trên hệ thống'
        },
    ]
</script>

<style lang="scss" scoped>

</style>