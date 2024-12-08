<template>
  <BaseLayout>
    <div class="px-[100px] mt-[100px] flex- flex-col bg-[#F7F8FA]
    max-size-lg:mt-[50px]
    max-size-md:px-[50px]
    max-size-pro:px-[20px]
    ">
      <div class="w-full flex justify-center mb-[48px]
      max-size-md:mb-[20px]
      ">
        <p class="text-[40px] leading-[60px] font-medium text-[#1E1F24]
        max-size-pro:text-[30px] max-size-pro:leading-[30px] max-size-pro:text-center
        ">
          Chuyển phát Tiktok Shop US
        </p>
      </div>
      <div class="w-full">
        <img class="object-cover object-center" :src="imgSrc" alt="" />
      </div>
      <div class="mt-[40px] flex flex-row justify-between
      max-size-sm:flex-col
      ">
        <!-- 1 -->
        <div class="w-[60%] max-size-sm:w-full">
          <p class="text-[#1E1F24] text-[32px] leading-[44px] font-medium
          max-size-pro:text-[25px] max-size-pro:text-center
          ">
            {{ title }}
          </p>
          <div class="w-full mt-[40px] flex flex-wrap gap-[20px]">
            <div v-for="(item, index) in items" :key="index" :class="[
              'flex flex-row transition-all',
              items.length % 2 !== 0 && index === items.length - 1
                ? 'w-full'
                : 'w-[calc(50%-10px)]',
            ]">
              <!-- Nội dung -->
              <div class="w-full flex flex-row">
                <div class="w-[46px] h-[46px] mr-[14px] flex items-center justify-center">
                  <img :src="item.icon" alt="" />
                </div>
                <div class="w-full">
                  <p class="text-[16px] text-[#868689] leading-[24px] font-medium">
                    {{ item.title }}
                  </p>
                  <p class="text-[18px] text-[#1E1F24] leading-[24px] font-medium mt-[6px]">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="flex flex-col w-[30%]
        max-size-md:w-[35%]
        max-size-sm:w-full max-size-sm:mt-[30px] 
        ">
          <p class="text-[16px] text-[#868689] leading-[24px] font-medium max-size-sm:text-center">
            {{ descriptionRightSide }}
          </p>
          <div class="w-full mt-[50px] max-size-md:mt-[30px]
          max-size-sm:flex max-size-sm:justify-center
          ">
            <div @click="openModalGetAQuote = true"
              class="flex flex-row items-center justify-center w-[60%] py-[14px] rounded-[8px] bg-[#0066FF] max-size-sm:w-[50%]">
              <p class="text-white text-[16px] leading-[24px] font-medium">
                Nhận báo giá
              </p>
              <UIcon name="ri:arrow-right-line" class="ml-[5px] text-white text-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <UModal :ui="{
      overlay: {
        background: 'bg-[#1E1F24CC]',
      },
      container: 'flex items-center justify-center text-center',
      width: 'w-[30%] max-size-lg:w-[50%] max-size-md:w-[70%] max-size-sm:w-[85%] max-size-pro:w-[95%]',
    }" v-model="openModalGetAQuote" :transition="false">
      <div class="px-[36px] py-[22px] flex flex-col">
        <div class="w-full flex justify-end">
          <div @click="openModalGetAQuote = false"
            class="bg-[#EDEEF0] rounded-[4px] w-[28px] h-[28px] flex items-center justify-center">
            <UIcon name="ri:close-line" class="text-black" />
          </div>
        </div>

        <div class="flex flex-col w-full">
          <p class="text-[32px] text-[#1E1F24] leading-[44px] font-medium">
            Nhận báo giá
          </p>
          <p class="text-[16px] text-[#868689] leading-[24px] font-medium mt-[14px]">
            Vui lòng nhập các thông tin sau đây để được hỗ trợ về bảng giá của
            THE
          </p>

          <UForm :schema="schema" :state="state" class="">
            <!-- tên -->
            <UFormGroup name="full_name">
              <div class="flex flex-col mt-[32px]">
                <span class="text-[12px] text-[#1E1F24] leading-[20px]">Tên <span class="text-[#E8173C]"> *
                  </span></span>
                <div class="p-[12px] flex flex-row items-center rounded-[6px] bg-[#EDEEF0]">
                  <UIcon name="mynaui:user-circle" class="text-[#0066FF] text-[20px] mr-[8px]" />
                  <BaseInput v-model="state.full_name" variant="none" placeholder="Nhập tên" inputClass="text-[#000]"
                    class="text-[#86869] leading-[20px] w-full" :config="{
                      maxLength: 30,
                      textTransform: 'lowercase',
                      noSpecialChar: true,
                      noNumber: true,
                    }" />
                </div>
              </div>
            </UFormGroup>
            <!-- Email -->
            <UFormGroup name="email">
              <div class="flex flex-col mt-[16px]">
                <span class="text-[12px] text-[#1E1F24] leading-[20px]">Email <span class="text-[#E8173C]"> *
                  </span></span>
                <div class="p-[12px] flex flex-row items-center rounded-[6px] bg-[#EDEEF0]">
                  <UIcon name="iconoir:mail" class="text-[#0066FF] text-[20px] mr-[8px]" />
                  <BaseInput v-model="state.email" variant="none" type="email" placeholder="Nhập email"
                    inputClass="text-[#000]" class="text-[#86869] leading-[20px] w-full" :config="{
                      maxLength: 50,
                    }" />
                </div>
              </div>
            </UFormGroup>
            <!-- Số điện thoại -->
            <UFormGroup name="phone_number">
              <div class="flex flex-col mt-[16px]">
                <span class="text-[12px] text-[#1E1F24] leading-[20px]">Số điện thoại <span class="text-[#E8173C]"> *
                  </span></span>
                <div class="p-[12px] flex flex-row items-center rounded-[6px] bg-[#EDEEF0]">
                  <UIcon name="si:phone-line" class="text-[#0066FF] text-[20px] mr-[8px]" />
                  <BaseInput v-model="state.phone_number" variant="none" placeholder="Nhập số điện thoại" inputClass="text-[#000]"
                    class="text-[#86869] leading-[20px] w-full" :config="{
                      maxLength: 50,
                      type: 'numeric',
                      maxLength: 11,
                    }" />
                </div>
              </div>
            </UFormGroup>
            <!-- onSubmit -->
            <div class="mt-[40px] w-[full] flex justify-end">
              <button type="submit" @click="onSubmit"
                class="p-[14px] w-[128px] bg-[#0066FF] rounded-[6px] flex items-center justify-center cursor-pointer">
                <p class="text-white leading-[20px] font-medium">
                  Nhận báo giá
                </p>
              </button>
            </div>
          </UForm>
        </div>
      </div>
    </UModal>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '../BaseLayout.vue'
const { $yup } = useNuxtApp()

const openModalGetAQuote = ref(false)
const isDisabled = ref(false)

const props = defineProps({
  title: String,
  descriptionRightSide: String,
  items: {
    type: Array,
    required: true,
  },
  imgSrc: String,
})

const state = reactive({
  email: undefined,
  phone_number: undefined,
  full_name: undefined,
})

const schema = $yup.object({
  full_name: $yup
    .string()
    .required('Full name is required')
    .max(30, 'No more than 30 characters')
    .matches(/^[A-Za-z\s]+$/, 'Full name must only contain letters'),
  email: $yup
    .string()
    .required('Email is required')
    .email('This field must be an email'),
  phone_number: $yup
    .string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      'This field must be a valid phone number'
    )
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits'),
})

async function onSubmit() {
  try {
    await schema.validate(state, { abortEarly: false })

  } catch (err) {
    console.log('Validation failed')
  }
}

const errors = reactive({}) // Reactive object to store errors
</script>

<style lang="scss" scoped></style>
