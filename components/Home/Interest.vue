<script setup>
const interestItem = [
    {
        icon: "/icon/liveIcon/IconGiaiPhap.webm",
        title: "Giải pháp All in one toàn diện",
        description:
            "Hệ sinh thái khép kín từ tạo đơn hàng, theo dõi vận chuyển đến thanh toán trên một nền tảng duy nhất, đảm bảo sự tiện lợi và đồng bộ.",
    },
    {
        icon: "/icon/liveIcon/IconNenTang.webm",
        title: "Nền tảng công nghệ hiện đại",
        description:
            "Tích hợp hệ thống <span style='color: #0066FF;'>OMS</span> và <span style='color: #0066FF;'>ERP</span>, tối ưu hóa quy trình quản lý vận hành để phục vụ khách hàng một cách chuyên nghiệp và hiệu quả nhất.",
    },
    {
        icon: "/icon/liveIcon/IconTheoDoi.webm",
        title: "Theo dõi đơn hàng realtime",
        description:
            "Dễ dàng theo dõi từng bước vận chuyển thông qua tính năng tracking theo thời gian thực",
    },
    {
        icon: "/icon/liveIcon/IconTichHop.webm",
        title: "Tích hợp API",
        description:
            "Tạo đơn hàng chỉ trong vài phút bằng nền tảng web hoặc thông qua API tích hợp",
    },
    {
        icon: "/icon/liveIcon/IconDaDang.webm",
        title: "Đa dạng phương thức thanh toán",
        description:
            "Linh hoạt với nhiều tùy chọn thanh toán, phù hợp với mọi nhu cầu của khách hàng",
    },
    {
        icon: "/icon/liveIcon/IconViDoanhNghiep.webm",
        title: "Vì doanh nghiệp Việt",
        description: "Thấu hiểu & mang lại những giá trị tốt nhất tới doanh nghiệp Việt Nam",
    },
];
</script>

<template>
    <div class="flex flex-wrap gap-8 w-full justify-center">
        <div v-for="(item, index) in interestItem" :key="index"
            class="flex flex-col items-center text-center rounded-lg p-6 w-[31%] ">
            <video 
            :src="item.icon" 
            autoplay
            loop
            muted
            playsinline
            class="mb-4 w-[84px] h-[84px]" 
            ></video>
            <h3 class="text-[20px] font-[600] text-[#1E1F24] text-center tracking-[-0.2px] mt-[28px]">{{ item.title }}
            </h3>
            <p class="text-[16px] text-[#868689] font-[400] leading-[24px] mt-[12px]" v-html="item.description"></p>
        </div>
    </div>
</template>

<style scoped>
.highlight {
    color: #0066FF;
}
</style>
