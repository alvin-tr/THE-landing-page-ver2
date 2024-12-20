<template>
  <div class="bg-[#F7F8FA]">
    <HeaderTracking class="z-200" />
    <div class="pt-16 max-w-[1900px] mx-auto">
      <div class="grid grid-cols-4 gap-4 w-11/12 mx-auto mt-8 max-size-lg:mt-0">
        <TrackingsMultipleInput
          class="max-size-lg:hidden"
          v-model:invalid-trackings="invalidTrackings"
        />

        <div class="size-lg:col-span-3 col-span-4">
          <div class="track-content min-h-[85vh] py-2 px-3 bg-[#FFFFFF]">
            <div class="w-full h-full">
              <!-- tab -->
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
                    <!-- appear when empty data -->
                    <div
                      v-if="!tab.shipments?.length"
                      class="flex flex-col items-center justify-center"
                    >
                      <img
                        class="mt-[300px] max-size-lg:mt-[200px] max-size-pro:mt-[100px]"
                        src="/img/nodataIMG.svg"
                      />
                      <p class="text-center text-[#757575]">Không có dữ liệu</p>
                    </div>
                    <!-- appear when exist data  -->
                    <div
                      v-else
                      v-for="(shipment, j) in tab.shipments"
                      :key="j"
                      class="min-w-[700px] overflow-x-auto max-size-pro:min-w-[425px]"
                    >
                      <div
                        class="flex flex-row py-3 justify-between max-size-pro:flex-col"
                      >
                        <!-- label of order -->
                        <div class="flex w-[25%]">
                          <div class="min-w-[25px] min-h-[25px]">
                            <img :src="data[shipment?.status].icon" />
                          </div>

                          <div class="flex-col ml-2">
                            <p
                              class="font-semibold text-16 leading-24 flex text-black"
                            >
                              {{ shipment.number }}
                            </p>
                            <p
                              class="font-medium text-14 leading-20 flex"
                              :style="{ color: data[shipment.status].color }"
                            >
                              {{ shipment.status }}
                            </p>
                          </div>
                        </div>
                        <!-- hành trình may bay -->
                        <div
                          class="flex flex-row w-[30%] items-center justify-center max-size-pro:w-full"
                        >
                          <!-- symbol of VietNam -->
                          <div
                            class="flex flex-row items-center justify-center w-[30%]"
                          >
                            <img src="/old/vietnam.svg" />
                            <p class="text-[#868689] ml-[14px]">Vietnam</p>
                          </div>
                          <!-- symbol plane -->
                          <div
                            class="mx-[44px] w-[30%] flex items-center justify-center"
                          >
                            <img src="/old/icon-plane.svg" />
                          </div>
                          <!-- symbol US -->
                          <div
                            class="flex flex-row w-[30%] items-center justify-center"
                          >
                            <img src="/old/US.svg" />
                            <span
                              class="ml-4 font-medium md:text-xs xl:text-sm leading-20 flex text-[#868689]"
                              >{{ shipment?.destCountry }}</span
                            >
                          </div>
                        </div>
                        <!-- information of order -->
                        <div
                          class="flex w-[40%] items-center justify-center max-size-lg:w-[30%]"
                        >
                          <p
                            v-if="shipment.events?.length"
                            class="font-normal md:text-xs xl:text-sm flex text-[#868689]"
                          >
                            {{ formatDateTime(shipment.events[0]?.ship_time) }}
                            {{ shipment.events[0]?.location }}
                            {{ shipment.events[0]?.description }}
                          </p>
                        </div>
                      </div>
                      <!-- cross line -->
                      <div
                        class="border-dashed border-[1px] border-[#BDBDC0] transform rotate-180 mt-3"
                      ></div>
                      <!-- status and timeline shipping -->
                      <div class="flex-col my-4 w-full">
                        <p
                          class="font-mulish font-bold text-[14px] leading-32 flex text-gray-900"
                        >
                          {{ shipment.status }}
                        </p>
                        <!-- blue line -->
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
                          class="font-mulish font-medium text-[14px] leading-20 flex text-blue-500 my-4"
                        >
                          {{ formatDescriptionshipments(shipment.status) }}
                        </p>
                        <!-- timeline  -->
                        <div class="flex mt-4">
                          <span
                            class="flex text-[14px] leading-5 font-semibold text-[#375DE2] font-mulish ml-2"
                            >THE</span
                          >
                          <span
                            class="flex text-[14px] leading-5 font-semibold font-mulish ml-1"
                            >- {{ shipment.destCountry }} - No phone
                          </span>
                          <span
                            class="flex text-xs leading-5 font-medium text-[#747592] font-mulish ml-1"
                          >
                            - Sync Time:
                            {{ getCurrentFormattedTime() }} (GMT+07:00)</span
                          >
                        </div>
                        <!-- time line shipping -->
                        <div class="py-4 px-2 progress-container">
                          <div
                            v-for="(event, k) in shipment.events"
                            :key="k"
                            class="flex py-3"
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
                              :class="`px-5 flex text-[14px] font-medium font-mulish ${
                                k === 0 ? 'text-[#17171E]' : 'text-[#ABB4CD]'
                              }`"
                            >
                              {{ formatDateTime(event.ship_time) }}</span
                            >

                            <span
                              :class="`px-5 flex text-[14px] font-normal font-mulish ${
                                k === 0 ? 'text-[#17171E]' : 'text-[#ABB4CD]'
                              }`"
                            >
                              {{ event.location }} {{ event.description }}</span
                            >
                          </div>
                        </div>
                        <!-- footer button -->
                        <div class="py-4">
                          <div class="grid grid-cols-6">
                            <div
                              class="grid col-span-6 size-2xl:grid-cols-6 size-xl:col-span-3 size-lg:gap-3 gap-2 size-lg:col-span-4 size-sm:grid-cols-3"
                            >
                              <!-- Copy Link -->
                              <button
                                @click="copyLink"
                                class="bg-[#0066FF] size-2xl:col-span-2 mt-3 rounded-[12px] flex text-white flex-row justify-center items-center px-[12px] py-[6px] gap-[8px]"
                              >
                                Copy Link
                                <UIcon
                                  name="mdi:link-variant"
                                  class="text-[15px] text-white"
                                />
                              </button>
                              <!-- Copy Detail -->
                              <button
                                @click="copyDetail(shipment)"
                                class="size-2xl:col-span-2 text-black bg-[#F2F3F5] mt-3 border border-[#D3D8E5] rounded-[12px] flex flex-row justify-center px-[12px] py-[6px] gap-[8px] box-border"
                              >
                                Copy Detail
                                <img src="/old/copy-detail.svg" />
                              </button>
                              <!-- More Info -->
                              <button
                                @click="convertTime"
                                class="text-black size-sm:col-span-1 size-2xl:col-span-2 bg-white mt-3 border border-[#D3D8E5] rounded-[12px] flex flex-row justify-center px-[12px] py-[6px] gap-[8px] box-border"
                              >
                                More Info
                              </button>
                            </div>
                            <!-- Translate: English -->
                            <div
                              class="xl:col-span-3 size-lg:col-span-2 col-span-6 flex justify-end px-14 my-4"
                            >
                              <p
                                class="flex font-mulish font-normal text-[14px] leading-[20px] text-[#17171E]"
                              >
                                Translate: English
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- status and timeline shipping -->
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
</template>

<script setup>
import axios from "axios";
import { onMounted, provide, watch } from "vue";
import HeaderTracking from "../components/HeaderTracking.vue";

const config = useRuntimeConfig();
const toast = useToast();

const invalidTrackings = ref([]);
provide("invalidTrackings", invalidTrackings);
function sortEventsByCreatedAtDescending(events) {
  return events.sort((a, b) => new Date(b.ship_time) - new Date(a.ship_time));
}
const route = useRoute();
const router = useRouter();
const getCurrentTrackingsFromQuery = () => {
  const trackings = Array.isArray(route.query.trackings)
    ? [...route.query.trackings]
    : [route.query.trackings];

  return Array.from(new Set(trackings));
};

const url = config.app.api.baseURL;

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
const openTab = ref(tabs.value[0].key);
const toggleTabs = (tabNumber) => {
  // console.log(tabNumber);
  openTab.value = tabNumber;
};
const isLoading = ref(false);

watch(
  () => {
    return route.query.trackings;
  },
  async () => {
    const ids = removeFalsyItemArray(getCurrentTrackingsFromQuery());

    invalidTrackings.value = [];
    try {
      isLoading.value = true;
      if (!ids || !ids.length) return;
      const response = await axios.post(url + "/shipment/packages/logs", {
        codes: ids,
      });
      invalidTrackings.value = removeFalsyItemArray(
        ids.reduce((acc, cur) => {
          if (
            !response.data.packages.find(
              (pack) => pack.package_code?.code === cur
            )
          ) {
            acc.push(cur);
          }
          return acc;
        }, [])
      );
      for (let tab of tabsStatus.value) {
        tab.shipments = [];
        for (let pack of response.data.packages) {
          if (tab.key === pack.status_string) {
            let shipment = {
              number: "",
              status: "",
              destCountry: "",
              alert: "",
              events: [],
            };

            shipment.number = pack.package_code.code;
            shipment.status = tab.label;
            shipment.destCountry = pack.country_code;
            shipment.alert = pack.alert;

            for (let log of response.data.logs) {
              if (pack.id === log.package_id) {
                shipment.events.push(log);
              }
            }
            shipment.events = sortEventsByCreatedAtDescending(shipment.events);
            tab.shipments.push(shipment);
          }
        }
      }
    } catch (error) {
      invalidTrackings.value = removeFalsyItemArray(ids);
    } finally {
      isLoading.value = false;
    }
  },
  { immediate: true }
);

const copyLink = async () => {
  try {
    const fullPath =
      window.location.origin + router.currentRoute.value.fullPath;

    await navigator.clipboard.writeText(fullPath);

    toast.add({
      title: "Success",
      description: "Copied",
      color: "blue",
    });
  } catch (err) {
    console.error("Failed to copy: ", err);
    toast.add({
      title: "Error",
      description: "Failed to copy link. Please try again.",
      color: "red",
    });
  }
};

const copyDetail = async (shipment) => {
  try {
    let contentCopied = "";
    contentCopied +=
      "The tracking: " +
      shipment.number +
      "\n" +
      "Status: " +
      shipment.status +
      "\n" +
      "Country: VN -> " +
      shipment.destCountry +
      "\n" +
      "Origin: " +
      "\n";
    shipment.events.forEach((event, k) => {
      const time = formatDateTime(event.ship_time);
      const locationContent = `${event.location} ${event.description}`;
      contentCopied += `${time} ${locationContent}\n`;
    });
    await navigator.clipboard.writeText(contentCopied.trim());

    toast.add({
      title: "Success",
      description: "Copied",
      color: "blue",
    });
    // alert('All events copied to clipboard!')
  } catch (error) {
    // alert('error')
    toast.add({
      title: "Error",
      description: "Failed to copy link. Please try again.",
      color: "red",
    });
  }
};

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
</script>

<style scoped>
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
  border-radius: 4px;
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
