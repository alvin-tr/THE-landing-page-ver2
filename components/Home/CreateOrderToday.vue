<template>
  <BaseLayout>
    <div
      class="px-[100px] max-size-md:px-[50px] max-size-sm:px-[20px] max-size-pro:px-[10px]"
    >
      <div class="w-full flex flex-col items-center mt-[100px]">
        <p class="text-[#1E1F24] text-[40px] font-medium leading-[60px]">
          Tạo đơn hàng ngay hôm nay
        </p>
        <img src="/img/createOrder.svg" class="mt-[114px]" />
        <div class="flex flex-row w-full justify-around 2xl:justify-evenly">
          <!-- 1 -->
          <div class="flex flex-col items-center justify-center w-[300px]">
            <p
              class="mt-[40px] text-[20px] text-[#1E1F24] leading-[32px] font-semibold text-center"
            >
              ĐĂNG KÝ TÀI KHOẢN
            </p>
            <p
              class="mt-[12px] text-[#868689] text-[16px] leading-[24px] text-center"
            >
              Tạo một tài khoản trên ứng dụng của T.H.E hoặc đăng nhập bằng
              email của bạn.
            </p>
          </div>
          <!-- 2 -->
          <div class="flex flex-col items-center mt-[-100px] w-[300px]">
            <p
              class="mt-[40px] text-[20px] text-[#1E1F24] leading-[32px] font-semibold text-center"
            >
              TẠO ĐƠN VÀ GỬI HÀNG
            </p>
            <p
              class="mt-[12px] text-[#868689] text-[16px] leading-[24px] text-center"
            >
              Tạo đơn hàng chỉ trong vài phút bằng nền tảng web hoặc thông qua
              API tích hợp.
            </p>
          </div>
          <!-- 3 -->
          <div class="flex flex-col items-center w-[300px]">
            <p
              class="mt-[40px] text-[20px] text-[#1E1F24] leading-[32px] font-semibold text-center"
            >
              THEO DÕI HÀNH TRÌNH
            </p>
            <p
              class="mt-[12px] text-[#868689] text-[16px] leading-[24px] text-center"
            >
              Nhập mã Tracking để theo dõi hành trình đơn
            </p>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
