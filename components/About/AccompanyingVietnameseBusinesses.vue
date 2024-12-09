<template>
  <BaseLayout>
    <div class="flex flex-row justify-center py-[64px] relative">
      <!-- 1: Phần văn bản -->
      <div class="w-[45%] mt-[200px]
        max-size-lg:mt-[100px]
      ">
        <p class="text-[60px] leading-[82px] font-semibold text-[#1E1F24]">
          Đồng hành cùng doanh nghiệp Việt
        </p>
        <p
          class="text-[22px] leading-[38px] font-normal text-[#868689] mt-[28px]"
        >
          The Human Express (T.H.E) là công ty chuyên cung cấp dịch vụ chuyển
          phát nhanh quốc tế, với sứ mệnh đồng hành và nâng cao năng lực cạnh
          tranh của doanh nghiệp Việt trên thị trường toàn cầu.
        </p>
        <br>
        <div class="flex flex-col">
          <div v-if="isExpanded" >
            <p class="text-[22px] leading-[38px] font-normal text-[#868689]">
                T.H.E đặt công nghệ hiện đại làm trọng tâm trong mọi hoạt động, không ngừng áp
            dụng các giải pháp tiên tiến để tối ưu hóa quy trình vận hành, đảm
            bảo tốc độ, sự chính xác và giúp khách hàng tiết kiệm chi phí.
            </p>
            <br>
            <p class="text-[22px] leading-[38px] font-normal text-[#868689]">
                Sự kết hợp giữa công nghệ đột phá và tinh thần đồng hành vì doanh
                nghiệp Việt chính là yếu tố giúp T.H.E trở thành lựa chọn hàng đầu
                trong lĩnh vực vận tải hàng hóa toàn cầu. T.H.E cam kết mang đến cho
                khách hàng dịch vụ vận chuyển nhanh chóng, an toàn và giá cả cạnh
                tranh, phù hợp mọi nhu cầu:
            </p>
            <br>
            <ul>
                <li><p class="text-[22px] leading-[38px] font-normal text-[#868689]">- Chuyển phát tiết kiệm: Tối ưu chi phí, giúp khách hàng yên tâm kinh doanh.</p></li>
                <li><p class="text-[22px] leading-[38px] font-normal text-[#868689]">- Chuyển phát tốc độ: Đáp ứng kịp thời nhu cầu vận chuyển nhanh, không chậm trễ.</p></li>
                <li><p class="text-[22px] leading-[38px] font-normal text-[#868689]">- Chuyển phát đặc biệt: Giải pháp tối ưu cho hàng hóa cồng kềnh, các mặt hàng khó</p></li>
                <li><p class="text-[22px] leading-[38px] font-normal text-[#868689]">- Chuyển phát Tiktok US: Dịch vụ vận chuyển chuyên biệt dành cho các seller Tiktok US</p></li>
                <li><p class="text-[22px] leading-[38px] font-normal text-[#868689]">- Chuyển phát hàng FBA: Đảm bảo hàng hóa được gửi trực tiếp đến các kho FBA của Amazon một cách nhanh chóng và hiệu quả.</p></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-row items-center" @click="toggleExpaned()">
          <p class="text-[#051063] text-[22px] leading-[38px] font-medium">
            {{isExpanded ? 'Rút gọn' : 'Xem thêm'}}
          </p>
          <UIcon
            class="text-[#051063] text-[22px] ml-[4px]"
            :name="isExpanded ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'"
          />
        </div>
      </div>

      <!-- 2: Ảnh chỉ sticky khi mở rộng -->
      <div class="w-[45%]">
        <div
          :class="{
            'sticky-image': isExpanded,
          }"
        >
          <img
            class="image-transition"
            src="/img/accompanyingVietnameseBusiness.svg"
            alt="Accompanying Vietnamese Business"
          />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>


<script setup>
const contentRef = ref(null);
const imageHeight = ref(0);
const isExpanded = ref(false)

const toggleExpaned = () => {
    isExpanded.value = !isExpanded.value
    updateImageHeight()
}

const updateImageHeight = () => {
  if (contentRef.value) {
    imageHeight.value = contentRef.value.offsetHeight + 200; // Thêm khoảng padding
  } else {
    imageHeight.value = 0;
  }
};
</script>

<style scoped>
.sticky-image {
  position: sticky;
  top: 20vh; 
}

.image-transition {
  transition: transform 1s ease-out, opacity 1s ease-out;
}

.sticky-image img {
  transform: scale(1.05); 
  opacity: 1;
}

img {
  transform: scale(1);
  opacity: 0.9;
}
</style>
