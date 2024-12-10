<template>
  <div class="pt-16 max-w-[1900px] mx-auto">
    <div class="grid grid-cols-4 gap-4 w-11/12 mx-auto mt-8">
      <TrackingsMultipleInput />
      <div
        class="track-content min-h-[85vh] lg:col-span-3 col-span-4 py-2 px-3 bg-[#FFFFFF]"
      >
        <div class="w-full h-full">
          <ul class="flex mb-0 list-none flex-wrap pt-1 pb-4 flex-row">
            <li
              v-for="(tab, i) in tabs"
              :key="i"
              class="-mb-px mt-2 border-b xl:mr-0 last:mr-0 flex-auto text-center cursor-pointer"
            >
              <a
                class="text-sm font-bold text-[#17171E] px-5 py-3 rounded block leading-normal"
                @click="toggleTabs(tab.key)"
                :class="{
                  'font-bold bg-gradient-to-b from-[rgba(55,93,226,0)] to-[rgba(55,93,226,0.08)]':
                    openTab === tab.key,
                  'font-normal bg-white': openTab != tab.key,
                }"
              >
                {{ tab.label }} ({{ tab.shipments?.length }})
              </a>
            </li>
          </ul>

          <div
            class="relative h-full flex flex-col min-w-0 break-words w-full mb-6 rounded"
          >
            <div
              v-for="(tab, i) in tabs"
              v-show="openTab === tab.key"
              :key="i"
              class="overflow-y-auto custom-scrollbar"
              style="height: calc(0.8 * 80vh)"
            >
              <div v-if="isLoading" class="flex flex-wrap gap-6">
                <TableLoading />
              </div>

              <div v-else>
                <div
                  v-if="!tab.shipments?.length"
                  class="flex flex-col items-center"
                >
                  <img
                    class="max-w-[351px] max-h-[209px]"
                    src="/old/noresult.svg"
                  />
                  <p class="text-center text-[#757575]">No tracking number.</p>
                </div>

                <div
                  v-else
                  v-for="(shipment, j) in tab.shipments"
                  :key="j"
                  class="min-w-[700px] overflow-x-auto"
                >
                  <div class="grid grid-cols-8 py-3 justify-between">
                    <div class="2xl:first:col-span-2 flex">
                      <div class="min-w-[25px] min-h-[25px]">
                        <img :src="data[shipment?.status].icon" />
                      </div>

                      <div class="flex-col ml-2">
                        <p
                          class="font-mulish font-semibold text-16 leading-24 flex items-center text-black"
                        >
                          {{ shipment.number }}
                        </p>
                        <p
                          class="font-mulish font-medium text-14 leading-20 flex items-center"
                          :style="{ color: data[shipment.status].color }"
                        >
                          {{ shipment.status }}
                        </p>
                      </div>
                    </div>
                    <div
                      class="2xl:col-span-6 my-3 col-span-8 grid grid-cols-6 gap-8 lg:mt-2 mt-5"
                    >
                      <div
                        class="flex items-center justify-between md:col-span-2 col-span-4"
                      >
                        <div class="flex items-center">
                          <img src="/old/vietnam.svg" />
                          <span
                            class="ml-2 font-mulish font-medium md:text-xs xl:text-sm leading-20 flex items-center text-gray-700"
                            >Vietnam</span
                          >
                        </div>
                        <div>
                          <img src="/old/icon-plane.svg" />
                        </div>

                        <div class="flex items-center">
                          <img src="/old/US.svg" />
                          <span
                            class="ml-4 font-mulish font-medium md:text-xs xl:text-sm leading-20 flex items-center text-gray-700"
                            >{{ shipment?.destCountry }}</span
                          >
                        </div>
                      </div>
                      <div class="md:col-span-4 col-span-5 flex items-center">
                        <p
                          v-if="shipment.events?.length"
                          class="font-mulish font-medium md:text-xs xl:text-sm flex items-center text-gray-700"
                        >
                          {{ formatDateTime(shipment.events[0]?.ship_time) }}
                          {{ shipment.events[0]?.location }}
                          {{ shipment.events[0]?.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="border-dashed border-2 border-blue-300 transform rotate-180 mt-3"
                  ></div>
                  <div class="flex-col my-4 w-full">
                    <p
                      class="font-mulish font-bold text-20 leading-32 flex items-center text-gray-900"
                    >
                      {{ shipment.status }}
                    </p>
                    <div class="grid grid-cols-4 gap-0.5 mt-2 w-full">
                      <div
                        v-for="(icon, i) in data[shipment?.status].timeline"
                        :key="i"
                        class="col-span-1"
                      >
                        <img :src="icon" />
                      </div>
                    </div>
                    <p
                      class="font-mulish font-medium text-xs leading-20 flex items-center text-blue-500 my-4"
                    >
                      {{ formatDescriptionshipments(shipment.status) }}
                    </p>
                    <div class="flex mt-4">
                      <span
                        class="flex items-center text-[14px] leading-5 font-semibold text-[#375DE2] font-mulish ml-2"
                        >THE</span
                      >
                      <span
                        class="flex items-center text-[14px] leading-5 font-semibold font-mulish ml-1"
                        >- {{ shipment.destCountry }} - No phone
                      </span>
                      <span
                        class="flex items-center text-xs leading-5 font-medium text-[#747592] font-mulish ml-1"
                      >
                        - Sync Time:
                        {{ getCurrentFormattedTime() }} (GMT+07:00)</span
                      >
                    </div>
                    <div class="py-4 px-2 progress-container">
                      <div
                        v-for="(event, k) in shipment.events"
                        :key="k"
                        class="flex items-center py-3"
                      >
                        <svg
                          :fill="k === 0 ? '#17171E' : '#ABB4CD'"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" />
                        </svg>
                        <span
                          :class="`px-5 flex items-center text-base font-medium font-mulish ${
                            k === 0 ? 'text-[#17171E]' : 'text-[#ABB4CD]'
                          }`"
                        >
                          {{ formatDateTime(event.ship_time) }}</span
                        >

                        <span
                          :class="`px-5 flex items-center text-base font-semibold font-mulish ${
                            k === 0 ? 'text-[#17171E]' : 'text-[#ABB4CD]'
                          }`"
                        >
                          {{ event.location }} {{ event.description }}</span
                        >
                      </div>
                    </div>
                    <div class="py-4">
                      <div class="grid grid-cols-6">
                        <div
                          class="grid 2xl:grid-cols-6 sm:grid-cols-3 lg:gap-3 gap-2 xl:col-span-3 lg:col-span-4 col-span-6"
                        >
                          <button
                            @click="copyLink"
                            class="sm:col-span-1 2xl:col-span-2 bg-[#FF7614] mt-3 rounded-[12px] flex text-white flex-row justify-center items-center px-[14px] py-[10px] gap-[8px]"
                          >
                            Copy Link
                            <img src="/old/copy-link.svg" />
                          </button>
                          <button
                            @click="copyDetail(shipment)"
                            class="sm:col-span-1 2xl:col-span-2 bg-[#E9F3FF] mt-3 border border-[#D3D8E5] rounded-[12px] flex flex-row justify-center items-center px-[14px] py-[10px] gap-[8px] box-border"
                          >
                            Copy Detail
                            <img src="/old/copy-detail.svg" />
                          </button>
                          <button
                            @click="convertTime"
                            class="sm:col-span-1 2xl:col-span-2 bg-white mt-3 border border-[#D3D8E5] rounded-[12px] flex flex-row justify-center items-center px-[14px] py-[10px] gap-[8px] box-border"
                          >
                            More Info
                          </button>
                        </div>
                        <div
                          class="xl:col-span-3 lg:col-span-2 col-span-6 flex items-center justify-end px-14 my-4"
                        >
                          <p
                            class="flex items-center font-mulish font-normal text-[14px] leading-[20px] text-[#17171E]"
                          >
                            Translate: English
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <button @click="check">Check</button> -->
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const currentTrackings = Array.isArray(route.query.trackings)
  ? [...route.query.trackings]
  : [route.query.trackings];
const inputRefs = ref([]);
const inputs = ref(currentTrackings);
useHead({ title: "Packet Tracking" });
const tabsStatus = ref([
  // { key: "pending", label: "Pending", shipments: [] },
  { key: "pre-transit", label: "Pre-transit", shipments: [] },
  { key: "in-transit", label: "In-Transit", shipments: [] },
  { key: "delivered", label: "Delivered", shipments: [] },
  { key: "canceled", label: "Canceled", shipments: [] },
  { key: "expired", label: "Expired", shipments: [] },
  { key: "archived", label: "Archived", shipments: [] },
  { key: "undelivered", label: "Undelivered", shipments: [] },
]);
const tabs = computed(() => {
  const allTab = {
    key: "All",
    label: "All",
    shipments: tabsStatus.value.reduce((acc, curr) => {
      acc = [...acc, ...curr.shipments];
      return acc;
    }, []),
  };

  const alertTab = {
    key: "alert",
    label: "Alert",
    shipments: tabsStatus.value.flatMap((tab) =>
      tab.shipments.filter((shipment) => shipment.alert === 3)
    ),
  };
  return [allTab, ...tabsStatus.value, alertTab];
});
// const {
//   isLoading,
//   inputs,
//   tabs,
//   inputRefs,
//   fetchData,
//   toggleTabs,
//   openTab,
//   handleKeydown,
//   removeInput,
//   copyDetail,
//   trackNumbers,
//   copyLink,
// } = useTracking();

const data = {
  "Pre-transit": {
    color: "#218B85",
    icon: "/old/pre-transit-icon.svg",
    timeline: [
      "/old/pre-transit.svg",
      "/old/no-progress.svg",
      "/old/no-progress.svg",
      "/old/no-progress.svg",
    ],
  },
  "In-Transit": {
    color: "#375DE2",
    icon: "/old/In-transit-icon.svg",
    timeline: [
      "/old/pre-transit.svg",
      "/old/pre-transit.svg",
      "/old/no-progress.svg",
      "/old/no-progress.svg",
    ],
  },
  Delivered: {
    color: "#2C882F",
    icon: "/old/delivered-icon.svg",
    timeline: [
      "/old/delivered.svg",
      "/old/delivered.svg",
      "/old/delivered.svg",
      "/old/delivered.svg",
    ],
  },
  Undelivered: {
    color: "#FF4C14",
    icon: "/old/undelivered-icon.svg",
    timeline: [
      "/old/alert-cancel.svg",
      "/old/alert-cancel.svg",
      "/old/alert-cancel.svg",
      "/old/no-progress.svg",
    ],
  },
  Canceled: {
    color: "#FF4C14",
    icon: "/old/cancelled-icon.svg",
    timeline: [
      "/old/alert-cancel.svg",
      "/old/alert-cancel.svg",
      "/old/alert-cancel.svg",
      "/old/no-progress.svg",
    ],
  },
  Expired: {
    color: "#8B3B21",
    icon: "/old/expired-icon.svg",
    timeline: [
      "/old/expired.svg",
      "/old/expired.svg",
      "/old/expired.svg",
      "/old/no-progress.svg",
    ],
  },
  Alert: {
    color: "#E8173C",
    icon: "/old/alert-icon.svg",
    timeline: [
      "/old/alert-cancel.svg",
      "/old/alert-cancel.svg",
      "/old/alert-cancel.svg",
      "/old/no-progress.svg",
    ],
  },
};

// const initInputs = () => {
//   if (route.query.numbers) {
//     inputs.value = route.query.numbers
//       .split(",")
//       .map((number) => ({ value: number }));
//   }
// };

// initInputs();
// fetchData(route.query)

onMounted(() => {});

// watch(
//   () => route.query.numbers,
//   () => {
//     fetchData(route.query);
//   },
//   {
//     immediate: true,
//     deep: true,
//   }
// );

// watch(
//   () => inputs.value,
//   (newInputs) => {
//     // Tạo chuỗi từ mảng inputs để cập nhật route
//     const numbersString = newInputs.map((input) => input.value).join(",");
//     router.push({ query: { ...route.query, numbers: numbersString } });
//   },
//   {}
// );

// const removeAll = () => {
//   inputs.value = [{ value: "" }];
// };
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
