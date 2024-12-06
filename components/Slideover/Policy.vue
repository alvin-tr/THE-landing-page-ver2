<template>
  <USlideover :ui = "{ background:'bg-[#F2F3F5]'}">
    <div class = "p-4 overflow-y-auto">
      <div class = "flex justify-between py-2 my-3">
        <div class = "flex items-center justify-center gap-3">
          <div class = "flex gap-2 font-roboto font-medium text-[16px] leading-[20px] items-center cursor-pointer" >
            <img src = "/img/user-hover.svg">
            <span><a href="https://app.thehuman.express/sign-up" target="_blank" rel="noopener noreferrer">Đăng ký</a></span>/
            <span><a href="https://app.thehuman.express/sign-in" target="_blank" rel="noopener noreferrer">Đăng nhập</a></span>
          </div>
        </div>
        <div @click = "slideover.close()">
          <img src = "/img/close.svg">
        </div>
      </div>
      <div v-if = "isShowAccordion">
        <Accordion />   
      </div> 
    </div>
  </USlideover>
</template>

<script setup>
const route = useRoute()
const slideover = useSlideover()

const isShowAccordion = computed(() => {
  return route.path.includes('policy');
})
</script>

<style scoped>

</style>