<template>
  <div
    class="relative box-tracking flex-col justify-between size-lg:col-span-1 col-span-4 max-h-[350px] py-5 lg:relative bg-[#FFFFFF]"
  >
    <div class="box-tracking-title p-4 w-full">
      <span class="text-[20px] leading-[32px] font-bold">Tracking code</span>
      <span class="font-medium text-[14px] leading-5 text-[#747592]">
        {{ inputs?.length }}/40
      </span>
    </div>
    <div class="h-48 overflow-y-auto custom-scrollbar">
      <div
        v-for="(input, index) in inputs"
        :key="index"
        :class="{
          'flex items-center px-3 py-2': true,
          'bg-[#F5F5FA]': index % 2 == 0,
        }"
      >
        <span :style="{ color: isShowPlaceholder ? '#b3b8c2' : '#747592' }">
          {{ index + 1 }}.
        </span>

        <BaseInput
          :placeholder="
            isShowPlaceholder ? 'Enter up to 40 numbers, one per line ' : ''
          "
          ref="inputRefs"
          class="flex-1"
          variant="none"
          inputClass="w-full text-[14px] leading-5 text-[#747592] p-1 border-none focus:border-none focus:outline-none bg-transparent"
          v-model="inputs[index]"
          :config="{
            textTransform: 'uppercase',
            maxLength: 30,
            noSpecialChar: true,
            noSpace: true,
          }"
          :id="`input-${index}`"
          @keydown.enter.prevent="addNewInput(index)"
          @keydown.up.prevent="() => focusInput(index - 1)"
          @keydown.down.prevent="() => focusInput(index + 1)"
          @keydown.delete="(e) => handleDelete(e, index)"
        />
        <img
          v-if="inputs.length > 1"
          class="w-[15px] h-[15px]"
          src="/old/close.svg"
          @click="removeInput(index)"
        />
      </div>
    </div>
    <div class="flex w-full justify-center">
      <button @click="trackNumbers" class="button w-[60%] text-white">
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
const getCurrentTrackingsFromQuery = () => {
  const trackings = Array.isArray(route.query.trackings)
    ? [...route.query.trackings]
    : [route.query.trackings || ""];

  return Array.from(new Set(trackings));
};

const inputs = ref(getCurrentTrackingsFromQuery());
const removeInput = (index) => {
  inputs.value.splice(index, 1);
};
const handleDelete = (e, index) => {
  const target = e.target;
  if (inputs.value.length === 1) return;
  if (target.value !== "") return;
  e.preventDefault();
  removeInput(index);
  nextTick(() => {
    focusInput(index - 1);
  });
};

const focusInput = (index) => {
  const newInput = document.getElementById(`input-${index}`);
  if (newInput) {
    newInput.focus();
    newInput.setSelectionRange(newInput.value.length, newInput.value.length);
  }
};

const addNewInput = (index) => {
  if (inputs.value.length >= 40) return;
  if (inputs.value[index + 1] !== "") inputs.value.splice(index + 1, 0, "");
  nextTick(() => {
    focusInput(index + 1);
  });
};

const trackNumbers = () => {
  router.push({
    query: {
      trackings: [...inputs.value],
    },
  });
};

const removeAll = () => {
  inputs.value = [];
};
</script>

<style scoped>
.box-tracking {
  border: 0.2px solid #e5e5e5;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 32px;
}

.box-tracking-title {
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

.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(158, 158, 158, 0.6);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
