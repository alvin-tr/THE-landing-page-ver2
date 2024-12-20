<template>
  <div class="tracking-inputs">
    <div
      class="relative box-tracking flex-col justify-between col-span-4 py-[10px] h-fit bg-[#FFFFFF] lg:relative size-lg:col-span-1"
    >
      <!-- Nhập mã tracking -->
      <div class="box-tracking-title p-4 w-full">
        <span class="text-[20px] leading-[32px] font-bold"
          >Nhập mã Tracking</span
        >
      </div>
      <!-- input tracking code -->
      <div
        class="max-h-[320px] min-h-48 h-fit min overflow-y-auto custom-scrollbar"
      >
        <div
          v-for="(input, index) in inputs"
          :key="index"
          :class="{
            'flex items-center px-3 py-2': true,
            'bg-[#F5F5FA]': index % 2 == 0,
            invalid:
              invalidTrackings.includes(input) || isDuplicate(input, inputs),
          }"
        >
          <span
            class="order-input-tracking"
            :style="{ color: isShowPlaceholder ? '#b3b8c2' : '#747592' }"
          >
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
            :id="`input-${id}-${index}`"
            @keydown.enter.prevent="
              () => {
                if (hasDuplicateTrackings()) return;
                addNewInput(index);
              }
            "
            @keydown.up.prevent="() => focusInput(index - 1)"
            @keydown.down.prevent="() => focusInput(index + 1)"
            @keydown.delete="(e) => handleDelete(e, index)"
          />
          <img
            v-if="!invalidTrackings.includes(input)"
            class="w-[15px] h-[15px] cursor-pointer"
            src="/old/close.svg"
            @click="removeInput(index)"
          />
          <img
            v-else
            class="w-[15px] h-[15px] cursor-pointer"
            src="/img/closeInvalid.svg"
            @click="removeInput(index)"
          />
        </div>
      </div>
      <!-- trash -->
      <div
        class="flex w-full justify-between items-center cursor-pointer mt-[10px]"
      >
        <div
          @click="removeAll"
          class="flex lg:justify-center ml-2 p-[10px] bg-[#F2F3F5] rounded-[6px]"
        >
          <UIcon
            name="i-solar-trash-bin-minimalistic-linear"
            class="text-[20px] text-[#131314]"
          />
        </div>

        <span
          class="font-medium text-[14px] mr-[10px] leading-5 text-[#747592]"
        >
          {{ inputs?.length }}/40
        </span>
      </div>
    </div>

    <div class="mt-[20px]">
      <button
        @click="trackNumbers"
        class="button w-full text-[15px] text-white"
      >
        Track
        <UIcon name="mdi:map-search-outline" class="text-white text-[20px]" />
      </button>
      <div
        v-if="invalidTrackings?.length"
        class="flex bg-[#ffefed] py-4 px-6 items-center border-[1px] border-solid border-red-500 rounded-[10px] gap-12 mb-8 mt-[10px]"
      >
        <p class="text-black line-clamp-3 overflow-hidden">
          Không tìm thấy mã tracking
          {{ invalidTrackings.join(", ") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, useId, watch } from "vue";
const id = useId();
const route = useRoute();
const router = useRouter();
const getCurrentTrackingsFromQuery = () => {
  const trackings = Array.isArray(route.query.trackings)
    ? [...route.query.trackings]
    : [route.query.trackings || ""];

  return Array.from(new Set(trackings));
};

const invalidTrackings = defineModel("invalid-trackings", {
  default: [],
});

const toast = useToast();

const inputs = ref(getCurrentTrackingsFromQuery());
const removeInput = (index) => {
  if (inputs.value.length === 1) {
    inputs.value[0] = "";
    nextTick(() => {
      focusInput(0);
    });
    return;
  }
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
  const newInput = document.getElementById(`input-${id}-${index}`);
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
  if (hasDuplicateTrackings()) return;
  router.push({
    query: {
      trackings: Array.from(new Set([...inputs.value])),
    },
  });
};

const removeAll = () => {
  inputs.value = [""];
  nextTick(() => {
    focusInput(0);
  });
};
const hasDuplicateTrackings = () => {
  if (!hasDuplicates(inputs.value)) return false;

  toast.add({
    title: "Lỗi",
    description: "Mã tracking đã tồn tại",
    color: "red",
  });

  return true;
};
watch(
  () => [...inputs.value],
  () => {
    invalidTrackings.value = [];
  }
);
watch(
  () => {
    return route.query.trackings;
  },
  () => {
    inputs.value = getCurrentTrackingsFromQuery();
  }
);
</script>
<style>
.tracking-inputs .invalid {
  input {
    color: #f87171 !important;
  }
  .order-input-tracking {
    color: #f87171 !important;
  }
}
</style>
<style scoped>
.box-tracking {
  border: 0.2px solid #e5e5e5;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 4px;
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
  padding: 12px;
  gap: 14px;
  height: 48px;
  left: 28px;
  right: 88px;
  bottom: 28px;
  background: #0066ff;
  border-radius: 12px;
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
