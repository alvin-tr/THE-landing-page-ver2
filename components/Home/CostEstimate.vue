<template>
  <div
    class="rounded-[12px] w-[464px] h-[631px] py-[24px] mt-[87px] bg-cover bg-center bg-no-repeat bg-[url('/public/img/backgroundOfCostEstimate.png')] max-h-[631px] max-size-lg:w-full max-size-md:mt-[50px]"
  >
    <!-- 1button title -->
    <div
      class="flex flex-row border-b-[2px] border-[#FFFFFF80] px-[52px] max-size-sm:px-[20px] max-size-xs:px-0"
    >
      <!-- 1 -->
      <div @click="tabChangeCostEstimate = 0" class="px-[14px] cursor-pointer">
        <p
          :class="
            tabChangeCostEstimate === 0 ? 'text-white' : 'text-[#FFFFFF80]'
          "
        >
          {{ $t('home.estimatingPrice') }}
        </p>
        <div
          :class="
            tabChangeCostEstimate === 0
              ? 'w-full bg-white h-[1px] mt-[8px]'
              : 'bg-[#FFFFFF80]'
          "
        ></div>
      </div>
      <!-- 2 -->
      <div @click="tabChangeCostEstimate = 1" class="px-[14px] cursor-pointer">
        <p
          :class="
            tabChangeCostEstimate === 1 ? 'text-white' : 'text-[#FFFFFF80]'
          "
          class="text-[#FFFFFF80]"
        >
          Tra cứu hành trình đơn hàng
        </p>
        <div
          :class="
            tabChangeCostEstimate === 1
              ? 'w-full bg-white h-[1px] mt-[8px]'
              : 'hidden'
          "
        ></div>
      </div>
    </div>
    <!-- 1 -->
    <div
      v-if="tabChangeCostEstimate === 0"
      class="px-[52px] mt-[32px] max-size-sm:px-[20px]"
    >
      <p class="text-[34px] leading-[50px] text-white">Ước tính chi phí</p>
      <p class="font-normal text-[#FFFFFF80] mt-[8px]">
        Vui lòng nhập các thông tin sau đây để ước tính chi phí vận chuyển đơn
        hàng của bạn
      </p>
      <UForm :schema="schemaPriceEstimate" :state="productInfo">
        <UFormGroup name="weight">
          <!-- Trọng lượng -->
          <div class="flex flex-col mt-[32px]">
            <span
              class="text-[12px] font-normal flex flex-row text-[#FFFFFF] ml-[4px]"
              >Trọng lượng
              <p class="text-[#E8173C] ml-[2px]">*</p></span
            >
            <div
              class="flex flex-row p-[12px] bg-[#394154] rounded-[6px] mt-[6px] max-size-lg:items-center max-size-lg:justify-center"
            >
              <img
                class="max-size-lg:w-[30px] max-size-md:w-[25px]"
                src="/public/icon/iconInputWeight.svg"
              />
              <BaseInput
                v-model="productInfo.weight"
                variant="none"
                placeholder="Nhập trọng lượng"
                input-class="text-white max-size-lg:text-[20px] max-size-md:text-[15px]"
                class="w-[266px] ml-[8px] text-[#ffffff] rounded-[6px] max-size-lg:w-full"
                :config="{
                  type: 'numeric',
                  maxLength: 11,
                }"
              />
              <p class="text-[#FFFFFF] font-normal ml-[8px]">gram</p>
            </div>
          </div>
        </UFormGroup>
        <!-- Dài | Rọng | Cao -->
        <div class="flex flex-row mt-[16px]">
          <!-- Dài -->
          <UFormGroup name="length">
            <div class="w-[90%]">
              <span
                class="text-[12px] font-normal flex flex-row text-[#FFFFFF] ml-[4px]"
                >Dài
                <p class="text-[#E8173C] ml-[2px]">*</p></span
              >
              <div
                class="mt-[6px] px-[14px] py-[12px] flex flex-row bg-[#394154] rounded-[6px] items-center"
              >
                <BaseInput
                  v-model="productInfo.length"
                  variant="none"
                  class="text-[#ffffff] bg-[#394154] rounded-[6px]"
                  :config="{
                  type: 'numeric',
                  maxLength: 11,
                }"
                />
                <p class="text-white ml-[5px]">cm</p>
              </div>
            </div>
          </UFormGroup>
          <!-- Rộng -->
          <UFormGroup name="width">
            <div class=" w-[90%]">
              <span
                class="text-[12px] font-normal flex flex-row text-[#FFFFFF] ml-[4px]"
                >Rộng
                <p class="text-[#E8173C] ml-[2px]">*</p></span
              >
              <div
                class="mt-[6px] px-[14px] py-[12px] flex flex-row bg-[#394154] rounded-[6px] items-center"
              >
                <BaseInput
                  v-model="productInfo.width"
                  variant="none"
                  class="text-[#ffffff] bg-[#394154] rounded-[6px]"
                  :config="{
                  type: 'numeric',
                  maxLength: 11,
                }"
                />
                <p class="text-white ml-[5px]">cm</p>
              </div>
            </div>
          </UFormGroup>
          <!-- Cao -->
          <UFormGroup name="height">
            <div class=" w-[90%]">
              <span
                class="text-[12px] font-normal flex flex-row text-[#FFFFFF] ml-[4px]"
                >Cao
                <p class="text-[#E8173C] ml-[2px]">*</p></span
              >
              <div
                class="mt-[6px] px-[14px] py-[12px] flex flex-row bg-[#394154] rounded-[6px] items-center"
              >
                <BaseInput
                  v-model="productInfo.height"
                  variant="none"
                  class="text-[#ffffff] bg-[#394154] rounded-[6px]"
                  :config="{
                  type: 'numeric',
                  maxLength: 11,
                }"
                />
                <p class="text-white ml-[5px]">cm</p>
              </div>
            </div>
          </UFormGroup>
        </div>
      </UForm>
      <!-- ----- -->
      <div
        class="w-[360px] overflow-hidden h-[20px] flex items-center mt-[32px] max-size-lg:w-full"
      >
        <p class="text-[#686E78] w-full tracking-[4.5px]">
          -----------------------------------------------------------------------------------------
        </p>
      </div>
      <!-- Cước tạm tính -->
      <div class="flex flex-row mt-[36px] max-size-xs:mt-[15px]">
        <div class="w-[50%]">
          <p class="text-[12px]">Cước tạm tính</p>
          <p class="text-[20px] leading-[32px]">$1000.00</p>
        </div>
        <div class="w-[50%] flex items-center justify-end">
          <UButton
            class="bg-[#0066FF] hover:bg-[#0066FF] font-medium px-[30px] py-[12px]"
            >Tính giá</UButton
          >
        </div>
      </div>
      <!-- Uớc tính chỉ mang tính chất tham khảo -->
      <div class="mt-[44px] w-full max-size-xs:mt-[30px]">
        <span class="flex flex-row items-center">
          <UIcon class="mr-[5px]" name="mingcute:warning-line" />
          <p class="leading-[20px] text-[#FFFFFF80]">
            Cước tính chỉ mang tính chất tham khảo
          </p>
        </span>
      </div>
    </div>
    <!-- 2 -->
    <div
      v-else
      class="px-[52px] mt-[32px] max-size-md:px-[20px] max-size-xs:px-[10px]"
    >
      <p class="text-[34px] leading-[44px] text-white font-medium">
        Tra cứu hành trình đơn hàng
      </p>

      <UForm
        class="mt-[24px]"
        @submit="
          () => {
            $router.push({
              path: '/trackings',
              query: { tracking: trackings },
            })
          }
        "
      >
        <span
          class="text-[12px] text-white font-normal leading-[20px] flex flex-row mr-[5px]"
          >Mã tracking
          <p class="text-[#E8173C]">*</p></span
        >

        <div
          class="w-[360px] h-[302px] bg-[#394154] mt-[6px] rounded-[6px] max-size-md:w-full"
        >
          <UFormGroup name="tracking">
            <BaseInputTracking
              v-model="trackings"
              placeholder="Vui lòng nhập mã tracking, các mã được phân tách với nhau bởi dấu Enter"
            />
          </UFormGroup>
          <!-- <textarea
            placeholder="Vui lòng nhập mã tracking, các mã được phân tách với nhau bởi dấu Enter"
            class="w-full h-full resize-none bg-[#394154] border-0 p-[12px] rounded-[6px]"
            rows="4"
          ></textarea> -->
        </div>

        <!-- trash -->
        <div class="flex flex-row justify-between mt-[36px]">
          <UButton
            class="p-[12px] flex items-center justify-center border-[1px] border-[#52627D] rounded-[4px] w-[44px] h-[44px]"
            variant="none"
            type="button"
          >
            <UIcon name="solar:trash-bin-trash-outline" />
          </UButton>
          <UButton
            :disabled="!trackings?.length"
            type="submit"
            class="bg-[#0066FF] hover:bg-[#0066FF] disabled:bg-[#0066FF] disabled:opacity-30 w-[128px] h-[44px] rounded-[6px] flex items-center justify-center"
          >
            <p class="text-[14px] text-white leading-[20px] font-medium">
              Track
            </p>
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import * as Yup from 'yup'

const { startLoading, isLoading } = useLoading()

const tabChangeCostEstimate = ref(0)
const trackings = ref([])
const errorMessage = ref([])
const price = ref(0.0)

const productInfo = reactive({
  weight: '',
  width: '',
  length: '',
  height: '',
})

const state = {}

const schemaPriceEstimate = Yup.object().shape({
  weight: Yup.number()
    .typeError('Trọng lượng là bắt buộc')
    .required('Trọng lượng là bắt buộc')
    .max(19949.99, 'Trọng lượng không được vượt quá 19949.99 gram')
    .test('is-decimal', 'Chỉ cho phép tối đa 2 số sau dấu thập phân', (value) =>
      /^\d+(\.\d{1,2})?$/.test(value.toString())
    ),
  width: Yup.number()
    .typeError('Chiều rộng là bắt buộc')
    .required('Chiều rộng là bắt buộc')
    .max(243, 'Chiều rộng không được vượt quá 243 cm')
    .test('is-decimal', 'Chỉ cho phép tối đa 2 số sau dấu thập phân', (value) =>
      /^\d+(\.\d{1,2})?$/.test(value.toString())
    ),
  height: Yup.number()
    .typeError('Chiều cao là bắt buộc')
    .required('Chiều cao là bắt buộc')
    .max(243, 'Chiều cao không được vượt quá 243 cm')
    .test('is-decimal', 'Chỉ cho phép tối đa 2 số sau dấu thập phân', (value) =>
      /^\d+(\.\d{1,2})?$/.test(value.toString())
    ),
  length: Yup.number()
    .typeError('Chiều cao là bắt buộc')
    .required('Chiều dài là bắt buộc')
    .max(243, 'Chiều dài không được vượt quá 243 cm')
    .test('is-decimal', 'Chỉ cho phép tối đa 2 số sau dấu thập phân', (value) =>
      /^\d+(\.\d{1,2})?$/.test(value.toString())
    ),
})

async function getPrice(event) {
  errorMessage.value = []

  if (productInfo.weight === 0) {
    errorMessage.value.push('Trọng lượng không hợp lệ')
  }
  if (productInfo.length === 0) {
    errorMessage.value.push('Chiều dài không hợp lệ')
  }
  if (productInfo.width === 0) {
    errorMessage.value.push('Chiều rộng không hợp lệ')
  }
  if (productInfo.height === 0) {
    errorMessage.value.push('Chiều cao không hợp lệ')
  }

  if (errorMessage.value.length) return

  await startLoading(async () => {
    try {
      const response = await axios.post(
        url + '/v1/customer/services/price',
        event.data
      )
      // const response = await axios.post('https://api.thehuman.express/v1/customer/services/price', event.data)
      // const response = await axios.post('https://api-dev.humanbay.express/v1/customer/services/price', event.data)
      price.value = response.data.price
    } catch (error) {
      errorMessage.value = error.response.data.messages
      price.value = 0.0
    } finally {
    }
  })
}
</script>

<style scoped></style>
