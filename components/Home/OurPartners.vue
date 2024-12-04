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

        <Swiper/>
    </div>
</template>

<script setup>

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