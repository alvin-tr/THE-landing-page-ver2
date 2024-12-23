<template>
  <HomeGlobalMarketEstimate class="relative">
    <Header class="absolute top-0" v-model="isOpenMenu"/>
  </HomeGlobalMarketEstimate>
  <div class="w-full flex flex-col items-center bg-[#F7F8FA]">
    <p
      class="text-[40px] w-[60%] text-center mt-[100px] text-[#1E1F24] font-medium leading-[60px] tracking-[-0.8px] max-md max-size-pro:text-[30px] max-size-md:text-center"
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
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-5 z-10"
            square
            padded
            @click="isOpenMenu = false"
          />
          <Placeholder class="h-8" />
        </template>

        <!-- option -->
        <div
          class="flex flex-row justify-between ml-[109px] max-size-lg:ml-[30px] max-size-md:hidden max-size-xs:hidden"
        >
          <!-- Về THE -->
          <div
            class="text-[14px] p-[10px] leading-[20px] font-medium text-[#FFFFFF99] cursor-pointer relative group/aboutTHE
            transition duration-500
            group-hover:text-[#1E1F24]
            ">
            Về THE
            <!-- hover -->
            <div
              class="group-hover/aboutTHE:flex hidden absolute top-[10px] w-full h-[50px] transition duration-500"
            >
              <div
                class="group-hover/aboutTHE:flex hidden absolute flex-col top-[40px] left-0 p-[4px] rounded-[8px] bg-white transition duration-500"
              >
                <div
                  v-for="itemHover in hoverAboutTHE"
                  :key="itemHover.title"
                  class="px-[20px] py-[14px] flex flex-row w-full min-w-[208px] hover:bg-[#D8ECFF] rounded-[8px]"
                  @click="(() => {
                    $router.push(itemHover.to)
                  })"
                >
                  <img :src="itemHover.icon" class="mr-[10px] w-[25px]" />
                  <p
                    class="text-[16px] text-[#1E1F24] leading-[24px] font-medium"
                  >
                    {{ itemHover.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Dịch vụ -->
          <div
            class="text-[14px] leading-[20px] p-[10px] font-medium text-[#FFFFFF99] ml-[80px] cursor-pointer relative 
            group/service transition duration-500
            group-hover:text-[#1E1F24]
            max-size-lg:ml-[50px]"
          >
            Dịch vụ
            <!-- hover -->
            <div
              class="group-hover/service:flex hidden absolute top-[10px] w-full h-[50px]"
            >
              <div
                class="hidden absolute top-[40px] right-[-700px] group-hover/service:flex flex-row bg-white rounded-[8px] max-size-lg:right-[-615px]"
              >
                <a
                  :href="itemService.to"
                  v-for="itemService in hoverService"
                  class="flex flex-col w-full min-w-[312px] p-[16px]"
                >
                  <img :src="itemService.img" class="bg-cover bg-center" />
                  <p
                    class="mt-[12px] text-[16px] text-[#1E1F24] leading-[24px] font-medium"
                  >
                    {{ itemService.title }}
                  </p>
                  <p
                    class="mt-[8px] text-[12px] text-[#868689] leading-[20px] font-medium"
                  >
                    {{ itemService.description }}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <!-- Hỗ trợ -->
          <div
            class="text-[14px] leading-[20px] p-[10px] font-medium text-[#FFFFFF99] ml-[80px] cursor-pointer relative 
            group/support transition duration-500
            group-hover:text-[#1E1F24]
            max-size-lg:ml-[50px]"
          >
            Hỗ trợ
            <!-- hover -->
            <div
              class="group-hover/support:flex hidden absolute top-[10px] w-full h-[50px]"
            ></div>
            <div
              class="group-hover/support:flex hidden absolute flex-col top-[40px] left-0 p-[4px] rounded-[8px] bg-white"
            >
              <div
                v-for="itemHover in hoverSupport"
                :key="itemHover.title"
                class="px-[20px] py-[14px] flex flex-row w-[260px] min-w-[208px] hover:bg-[#D8ECFF] rounded-[8px]"
                :to="itemHover.to"
              >
                <a
                  :href="itemHover.to"
                  class="flex items-center w-full"
                  :target="itemHover.to ? '_blank' : '_self'"
                  rel="noopener noreferrer"
                >
                  <img :src="itemHover.icon" class="mr-[10px]" />
                  <p
                    class="text-[16px] w-full text-[#1E1F24] leading-[24px] font-medium"
                  >
                    {{ itemHover.title }}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

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
