<template>
  <div
    class="relative box-tracking flex-col justify-between lg:col-span-1 col-span-4 max-h-[350px] py-5 lg:relative bg-[#FFFFFF]"
  >
    <div class="box-tracking-title p-4 w-full">
      <span class="text-[20px] leading-[32px] font-bold">Tracking code</span>
      <span class="font-medium text-[14px] leading-5 text-[#747592]"
        >{{ inputs?.length }}/40</span
      >
    </div>
    <div class="h-48 overflow-y-auto custom-scrollbar">
      <div
        v-for="(input, index) in inputs"
        :class="{
          'flex items-center px-3 py-2': true,
          'bg-[#F5F5FA]': index % 2 == 0,
        }"
      >
        <span :style="{ color: isShowPlaceholder ? '#b3b8c2' : '#747592' }"
          >{{ index + 1 }}.
        </span>
        <BaseInput
          :placeholder="
            isShowPlaceholder ? 'Enter up to 40 numbers, one per line ' : ''
          "
          class="flex-1"
          variant="none"
          inputClass="w-full text-[14px] leading-5 text-[#747592] p-1 border-none focus:border-none focus:outline-none bg-transparent"
          :ref="(el) => (inputRefs[index] = el)"
          v-model="inputs[index]"
          :config="{
            textTransform: 'uppercase',
            maxLength: 16,
            noSpecialChar: true,
            noSpace: true,
          }"
          @keydown.enter.prevent="() => console.log('222222')"
        />
        <img
          class="w-[15px] h-[15px]"
          src="/old/close.svg"
          @click="removeInput(index, inputs, inputRefs)"
        />
      </div>
    </div>
    <div class="flex w-full justify-center">
      <button @click="() => trackNumbers()" class="button w-[60%] text-white">
        Track
        <img src="/old/track.svg" />
      </button>
      <div @click="removeAll" class="flex lg:justify-center ml-2">
        <img src="/old/bin.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const currentTrackings = Array.isArray(route.query.trackings)
  ? [...route.query.trackings]
  : [route.query.trackings];

const inputRefs = ref([]);
const inputs = ref(currentTrackings);
function removeInput(index) {
  inputs.value.splice(index, 1);
}
</script>

<style scoped>
.box-tracking {
  border: 0.2px solid #e5e5e5;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 32px;
}

/* Tracking code */
.box-tracking-title {
  /* font-family: "Mulish"; */
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #17171e;
}

.box-tracking-input {
  background: #f5f5fa;
}

.box-tracking-input .input {
  border: none;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 14px;
  height: 48px;
  left: 28px;
  right: 88px;
  bottom: 28px;
  background: #ff7614;
  border-radius: 12px;
}

.track-content {
  border: 0.2px solid #e5e5e5;
  border-radius: 29px;
}

.progress {
  position: relative;
  width: 87px;
  height: 0px;
  left: 32px;
  top: 447px;

  /* neu/7 */
  border: 1px solid #abb4cd;
  transform: rotate(-90deg);
}

.progress-container {
  position: relative;
  border-bottom: 1px dashed #d3d8e5;
}

.progress-container::before {
  --space-on-top: 40px;
  content: "";
  position: absolute;
  display: block;
  width: 1px;
  height: calc(100% - var(--space-on-top) * 2);
  top: var(--space-on-top);
  left: 12px;
  background-color: #abb4cd;
}

.progress-container .items-center {
  position: relative;
  z-index: 1;
}

/* CSS để tùy chỉnh thanh cuộn */
.custom-scrollbar::-webkit-scrollbar {
  width: 3px; /* Độ rộng của thanh cuộn */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1; /* Màu nền của track */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(158, 158, 158, 0.6); /* Màu của thumb */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555; /* Màu của thumb khi hover */
}
</style>
