<template>
  <div class="w-full relative">
    <!-- <Header /> -->
    <NuxtPage />
    <Footer />
    <!-- button -->
        <div class="flex flex-col mt-[70px] w-[25%] fixed bottom-[30px] right-[30px]
        ">
          <div class="flex items-center justify-end">
            <UButton
            @click="scrollToTop"
              class="p-[20px]  rounded-[50px] bg-white items-center justify-center group"
              color="blue"
            >
              <UIcon
                name="tabler:arrow-narrow-up"
                class="text-[#1E1F24] text-[30px] font-[100] group-hover:text-white"
              />
            </UButton>
          </div>
        </div>
  </div>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped></style>
