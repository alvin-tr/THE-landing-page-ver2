<template>
  <UModal
    v-model="isOpen"
    :ui="{
      overlay: {
        background: 'bg-[#1E1F24CC]',
      },
      container: 'flex items-center justify-center text-center',
      width:
        'w-[30%] max-size-lg:w-[50%] max-size-md:w-[70%] max-size-sm:w-[85%] max-size-pro:w-[95%]',
    }"
    :transition="false"
  >
    <div class="px-[36px] py-[22px] flex flex-col">
      <div class="w-full flex justify-end">
        <div
          @click="closeModal"
          class="bg-[#EDEEF0] rounded-[4px] w-[28px] h-[28px] flex items-center justify-center"
        >
          <UIcon name="ri:close-line" class="text-black" />
        </div>
      </div>

      <div class="flex flex-col w-full">
        <p class="text-[32px] text-[#1E1F24] leading-[44px] font-medium">
          Nhận báo giá
        </p>
        <p
          class="text-[16px] text-[#868689] leading-[24px] font-medium mt-[14px]"
        >
          Vui lòng nhập các thông tin sau đây để được hỗ trợ về bảng giá của THE
        </p>

        <UForm :schema="schema" :state="state" @submit="onSubmit" class="">
          <!-- tên -->
          <UFormGroup name="full_name">
            <div class="flex flex-col mt-[32px]">
              <span class="text-[12px] text-[#1E1F24] leading-[20px]"
                >Tên <span class="text-[#E8173C]"> * </span></span
              >
              <div
                class="p-[12px] flex flex-row items-center rounded-[6px] bg-[#EDEEF0]"
              >
                <UIcon
                  name="mynaui:user-circle"
                  class="text-[#0066FF] text-[20px] mr-[8px]"
                />
                <BaseInput
                  v-model="state.full_name"
                  variant="none"
                  placeholder="Nhập tên"
                  inputClass="text-[#000]"
                  class="text-[#86869] leading-[20px] w-full"
                  :config="{
                    maxLength: 30,
                    textTransform: 'lowercase',
                  }"
                />
              </div>
            </div>
          </UFormGroup>
          <!-- Email -->
          <UFormGroup name="email">
            <div class="flex flex-col mt-[16px]">
              <span class="text-[12px] text-[#1E1F24] leading-[20px]"
                >Email <span class="text-[#E8173C]"> * </span></span
              >
              <div
                class="p-[12px] flex flex-row items-center rounded-[6px] bg-[#EDEEF0]"
              >
                <UIcon
                  name="iconoir:mail"
                  class="text-[#0066FF] text-[20px] mr-[8px]"
                />
                <BaseInput
                  v-model="state.email"
                  variant="none"
                  type="email"
                  placeholder="Nhập email"
                  inputClass="text-[#000]"
                  class="text-[#86869] leading-[20px] w-full"
                  :config="{
                    maxLength: 50,
                  }"
                />
              </div>
            </div>
          </UFormGroup>
          <!-- Số điện thoại -->
          <UFormGroup name="phone_number">
            <div class="flex flex-col mt-[16px]">
              <span class="text-[12px] text-[#1E1F24] leading-[20px]"
                >Số điện thoại <span class="text-[#E8173C]"> * </span></span
              >
              <div
                class="p-[12px] flex flex-row items-center rounded-[6px] bg-[#EDEEF0]"
              >
                <UIcon
                  name="si:phone-line"
                  class="text-[#0066FF] text-[20px] mr-[8px]"
                />
                <BaseInput
                  v-model="state.phone_number"
                  variant="none"
                  placeholder="Nhập số điện thoại"
                  inputClass="text-[#000]"
                  class="text-[#86869] leading-[20px] w-full"
                  :config="{
                    maxLength: 50,
                    type: 'numeric',
                    maxLength: 11,
                  }"
                />
              </div>
            </div>
          </UFormGroup>
          <!-- onSubmit -->
          <div class="mt-[40px] w-[full] flex justify-end">
            <UButton
              :loading="isLoading"
              :disabled="isLoading"
              color="#0066FF"
              type="submit"
              class="p-[14px] w-[128px] bg-[#0066FF] rounded-[6px] flex items-center justify-center cursor-pointer"
            >
              <p class="text-white leading-[20px] font-medium">Nhận báo giá</p>
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
  </UModal>
</template>

<script setup>
import axios from 'axios'

const { $yup } = useNuxtApp()

const isOpen = defineModel()

const state = reactive({
  email: undefined,
  phone_number: undefined,
  full_name: undefined,
})

const schema = $yup.object({
  full_name: $yup
    .string()
    .required('Full name is required')
    .max(30, 'No more than 30 characters'),
    // .matches(/^[A-Za-z\s]+$/, 'Full name must only contain letters'),
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
const isLoading = ref(false)

async function onSubmit() {
  try {
    isLoading.value = true
    // await schema.validate(state, { abortEarly: false })
    const response = await axios.post(
      'https://casso-services-49d8a051217a.herokuapp.com/humanexpress/customer',
      { name: state.full_name, phone: state.phone_number, email: state.email }
    )
    state.email = ''
    state.phone_number = ''
    state.full_name = ''
  } catch (err) {
    console.log('Validation failed')
  } finally {
    isLoading.value = false
    isOpen.value = false
  }
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<style lang="scss" scoped></style>
