<template>
    <div 
    class="w-full bg-cover bg-no-repeat bg-center bg-[url('/img/transparentEarth.svg')] flex flex-col items-center justify-center mt-[72px]
    max-size-lg:mt-0
    
    ">
        <div class="flex flex-col items-center mt-[150px]">
          <p class="text-[34px] text-[#333333] leading-[50px] font-medium 
          max-size-pro:text-[30px]
          ">Đối tác của chúng tôi</p>
        <div class="w-[100px] h-[6px] bg-[#0066FF] mt-[20px] 
        max-size-pro:mt-[5px]
        "/>
        </div>

        <div class="marquee-wrapper overflow-hidden relative mt-[28px]">
            <div class="marquee flex items-center space-x-[50px]">
              <img v-for="(item, index) in logos" :key="index" :src="item.url" class="logo-item " />

              <img
                v-for="(item, index) in logos"
                :key="'repeat-' + index"
                :src="item.url"
                class="logo-item "
              />
            </div>
          </div>
    </div>
</template>

<script setup>
const logos = [
  {
    url: '/img/logoPartner/logo-fedex.svg',
  },
  {
    url: '/img/logoPartner/logo-dhl.svg',
  },
  {
    url: '/img/logoPartner/logo-ups.svg',
  },
  {
    url: '/img/logoPartner/logo-usps.svg',
  },
  {
    url: '/img/logoPartner/logo-yoycol.svg',
  },
  {
    url: '/img/logoPartner/logo-burgerprint.svg',
  },
]
</script>

<style scoped>
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee {
  display: flex;
  align-items: center;
  gap: 50px;
  animation: marquee-animation 10s linear infinite;
}

@keyframes marquee-animation {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logo-item {
  width: 800px;
  height: auto;
  margin-block: 20px
}

@media (max-width: 425px) {
  .marquee-wrapper {
  margin-block: 20px;
}
  .marquee {
    gap: 5px; 
  }
  .logo-item {
  width: 100px;
}
}

@media (max-width: 641px) {
  .marquee-wrapper {
  margin-block: 20px;
}
  .marquee {
    gap: 5px;
  }
  .logo-item {
  width: 100px;
}
}
</style>