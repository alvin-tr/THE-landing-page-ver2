<template>
  <div class="flex items-center justify-center bg-[#F7F8FA]">
    <div class="px-[100px] max-w-[1440px] w-full flex flex-col bg-[#F7F8FA] pt-[40px] pb-[22px] 
    max-size-lg:px-[50px]
    max-size-md:px-[10px]
    ">
    <img src="/img/footer/logoFooter.svg" class="w-[212px]" />
      <!-- body -->
      <div class="flex flex-row justify-between
      max-size-md:gap-1 max-size-md:flex-wrap max-size-md:justify-evenly
      max-size-pro:flex-col
      ">
        <!-- 1 -->
        <div class="flex flex-col w-[25%] mt-[30px]
        max-size-md:w-[40%]
        max-size-pro:w-full
        ">
          <!-- location -->
          <div class="flex flex-row items-center mt-[30px] cursor-pointer
          max-size-pro:mt-[10px]
          ">
            <img src="/img/footer/loactionFooter.svg" class="w-[24px]" />
            <p
              class="text-[14px] text-[#868689] leading-[20px] font-normal ml-[12px] hover:text-[#0066FF]"
            >
              61 Ngụy Như Kon Tum, Thanh Xuân, Hà Nội
            </p>
          </div>
          <!-- email -->
          <div class="flex flex-row items-center mt-[30px] cursor-pointer
          max-size-pro:mt-[10px]
          ">
            <img src="/img/footer/mailFooter.svg" class="w-[24px]" />
            <p
              class="text-[14px] text-[#868689] leading-[20px] font-normal ml-[12px] hover:text-[#0066FF]"
            >
              support@thehuman.express
            </p>
          </div>
          <!-- phone -->
          <div class="flex flex-row items-center mt-[30px] cursor-pointer
          max-size-pro:mt-[10px]
          ">
            <img src="/img/footer/phoneFooter.svg" class="w-[24px]" />
            <p
              class="text-[14px] text-[#868689] leading-[20px] font-normal ml-[12px] hover:text-[#0066FF]"
            >
              Hotline: 0974877007
            </p>
          </div>
          <!-- social -->
          <div class="flex flex-row items-center mt-[36px]
          max-size-pro:mt-[10px]
          ">
          <a href="">
            <img
              src="/img/footer/zaloFooter.svg"
              class="w-[24px] cursor-pointer"
            />
          </a>
          <a href="https://www.facebook.com/thehumanexpress">
            <img
              src="/img/footer/facebookFooter.svg"
              class="ml-[20px] w-[24px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src="/img/footer/youtubeFooter.svg"
              class="ml-[20px] w-[24px] cursor-pointer"
            />
          </a>
          </div>
        </div>
        <!-- dịch vụ -->
        <div class="flex flex-col ml-[112px] mt-[70px] w-[25%]
        max-size-md:w-[40%] max-size-md:ml-0
        max-size-pro:w-full max-size-pro:mt-[30px]
        ">
          <p class="text-[16px] text-[#1E1F24] leading-[24px] font-medium">
            Dịch vụ
          </p>
          <a
            @click="(() => {

            })"
            class="text-[14px] text-[#868689] mt-[24px] hover:text-[#0066FF]
            max-size-pro:mt-[10px]
            "
            >Chuyển phát quốc tế</a
          >
          <a
            @click="(() => {})"
            class="text-[14px] text-[#868689] mt-[24px] hover:text-[#0066FF]
            max-size-pro:mt-[10px]
            "
            >Chuyển phát Tiktok US</a
          >
          <a
            @click="(() => {})"
            class="text-[14px] text-[#868689] mt-[24px] hover:text-[#0066FF]
            max-size-pro:mt-[10px]
            "
            >Chuyển phát hàng FBA amazon</a
          >
        </div>
        <!-- hỗ trợ -->
        <div class="flex flex-col ml-[112px] mt-[70px] w-[25%]
        max-size-md:w-[40%] max-size-md:ml-0
        max-size-pro:mt-[30px]
        ">
          <p class="text-[16px] text-[#1E1F24] leading-[24px] font-medium">
            Hỗ trợ
          </p>
          <a
            href=""
            class="text-[14px] text-[#868689] mt-[24px] hover:text-[#0066FF]
            max-size-pro:mt-[10px]
            "
            >Điều khoản & chính sách</a
          >
          <a
            href=""
            class="text-[14px] text-[#868689] mt-[24px] hover:text-[#0066FF]
            max-size-pro:mt-[10px]
            "
            >Hướng dẫn sử dụng</a
          >
          <a
            href="https://docs.thehuman.express/"
            class="text-[14px] text-[#868689] mt-[24px] hover:text-[#0066FF]
            max-size-pro:mt-[10px]
            "
            >Kết nối API</a
          >
        </div>
        <!-- button -->
        <div class="flex flex-col mt-[70px] w-[25%]
        max-size-lg:justify-end
        max-size-md:w-[40%]
        max-size-pro:w-full max-size-pro:mt-0
        ">
          <div class="flex items-center justify-end">
            <div
              class="p-[20px] w-[54px] rounded-[50px] bg-white items-center justify-center"
            >
              <img
                src="/img/footer/arrowUpFooter.svg"
                class="text-[#1E1F24] font-[100]"
              />
            </div>
          </div>
          <div class="flex flex-row mt-[104px] w-full justify-end">
            <a
              class="px-[14px] py-[12px] w-[128px] rounded-[4px] bg-white text-[#1E1F24] flex items-center justify-center"
              href="https://app.thehuman.express/sign-up"
            >
              Đăng ký
            </a>
            <a
              class="px-[14px] py-[12px] w-[128px] rounded-[4px] bg-[#0066FF] text-white ml-[12px] flex items-center justify-center"
              href="https://app.thehuman.express/sign-in"
            >
              Đăng nhập
            </a>
          </div>
        </div>
      
      </div>
      <!-- body -->
      <div class="w-full h-[1px] bg-[#D5D9E5] mt-[40px]"/>
      <div class="w-full flex justify-between items-center mt-[26px]">
          <img src="/img/footer/logoBlueFooter.svg" alt="">
          <p class="text-[14px] text-[#868689] leading-[20px] font-normal"> © 2024 The Human Express. All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
</script>

<style lang="scss" scoped></style>
