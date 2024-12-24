<template>
  <HomeGlobalMarketEstimate class="relative">
    <Header class="absolute top-0" v-model="isOpenMenu" />
  </HomeGlobalMarketEstimate>
  <div class="w-full flex flex-col items-center bg-[#F7F8FA]">
    <p
      class="text-[40px] w-[60%] text-center mt-[100px] text-[#1E1F24] font-medium leading-[60px] tracking-[-0.8px] max-md 
      max-size-pro:text-[30px] max-size-pro:w-full max-size-pro:leading-[40px] max-size-pro:mt-[30px]
      max-size-md:text-center"
    >
      Dịch vụ vận chuyển quốc tế hàng đầu cho doanh nghiệp Việt
    </p>
    <HomeInterest />
    <HomeTHEService> </HomeTHEService>
    <HomeCreateOrderToday />
    <HomeOurPartners />
    <HomeCommentSwiper />
    <HomeExperienceTheDifference />
    <USlideover v-model="isOpenMenu">
      <UCard
        class="flex flex-col flex-1 bg-[#F2F3F5]"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex justify-between items-center w-full">
            <div class="flex">
              <UIcon
                name="i-material-symbols-light-account-circle-outline"
                class="text-[#0066FF] text-[20px] font-normal"
              />
              <a
                href="https://app.thehuman.express/sign-up"
                class="text-[#333333] text-[14px] leading-[20px] ml-[4px]"
                >Đăng ký</a
              >
              <p class="text-[#333333] text-[14px] leading-[20px]">/</p>
              <a
                href="https://app.thehuman.express/sign-in"
                class="text-[#333333] text-[14px] leading-[20px]"
                >Đăng nhập</a
              >
            </div>
            <!-- x -->
            <div
              @click="
                () => {
                  isOpenMenu = false
                }
              "
              class="flex items-center"
            >
              <UIcon
                name="i-mingcute-close-line"
                class="text-[#868689] text-[20px] font-normal"
              />
            </div>
          </div>
          <!-- <UButton
            color="gray"
            variant="ghost-9++++++++++++"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-5 z-10"
            square
            padded
            @click="isOpenMenu = false"
          /> -->
          <Placeholder class="h-8" />
        </template>

        <HeaderMenuDropdown/>

        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </USlideover>
  </div>
</template>

<script setup>
const isOpenMenu = ref(false)
</script>

<style lang="scss" scoped></style>
