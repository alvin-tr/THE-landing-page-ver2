<template>
  <header
    class="flex items-center justify-center hover:bg-white transition duration-500 group bg-white"
  >
    <div
      class="w-full max-w-[1440px] h-[64px] flex flex-row items-center justify-between"
    >
      <!-- 1 -->
      <div class="flex flex-row items-center">
        <!-- img -->
        <div
          class="my-[14px] ml-[80px] max-size-xs:ml-[10px] max-size-lg:ml-[30px] cursor-pointer"
          @click="
            () => {
              $router.push('/');
            }
          "
        >
          <img
            class="w-[104px] transition-all duration-500"
            src="/public/img/logoHeaderBlue.svg"
          />
        </div>
        <!-- option -->
        <div
          class="flex flex-row justify-between ml-[109px] max-size-lg:hidden max-size-md:hidden max-size-xs:hidden"
        >
          <!-- Về THE -->
          <span
            class="text-[14px] p-[10px] leading-[20px] font-medium text-[#1E1F24] cursor-pointer relative group/aboutTHE transition duration-500 hover:text-[#0066FF]"
          >
            Về THE
            <!-- hover -->
            <div
              class="absolute top-[10px] w-full h-[50px] opacity-0 pointer-events-none transition-opacity duration-500 group-hover/aboutTHE:opacity-100 group-hover/aboutTHE:pointer-events-auto z-[100]"
            >
              <div
                class="absolute flex-col top-[40px] left-0 p-[4px] rounded-[8px] bg-white transition duration-500"
              >
                <div
                  v-for="itemHover in hoverAboutTHE"
                  :key="itemHover.title"
                  class="px-[20px] py-[14px] flex flex-row w-full min-w-[208px] hover:bg-[#D8ECFF] rounded-[8px] cursor-pointer"
                  @click="() => $router.push(itemHover.to)"
                >
                  <img :src="itemHover.icon" class="mr-[10px]" />
                  <p
                    class="text-[16px] text-[#1E1F24] leading-[24px] font-medium"
                  >
                    {{ itemHover.title }}
                  </p>
                </div>
              </div>
            </div>
          </span>
          <!-- Dịch vụ -->
          <div
            class="text-[14px] leading-[20px] p-[10px] font-medium text-[#1E1F24] ml-[80px] cursor-pointer relative group/service transition duration-200 hover:text-[#0066FF] max-size-lg:ml-[50px]"
          >
            Dịch vụ
            <!-- hover -->
            <div
              class="group-hover/service:flex hidden absolute top-[10px] w-full h-[100px] z-[100]"
            >
              <div
                class="absolute top-[40px] right-[-700px] flex flex-row bg-white rounded-[8px] max-size-lg:right-[-615px]"
              >
                <a
                  :href="itemService.to"
                  v-for="itemService in hoverService"
                  class="flex flex-col w-full min-w-[312px] p-[16px]"
                >
                  <img :src="itemService.img" class="bg-cover bg-center" />
                  <p
                    class="mt-[12px] text-[16px] text-[#1E1F24] leading-[24px] font-medium"
                  >
                    {{ itemService.title }}
                  </p>
                  <p
                    class="mt-[8px] text-[12px] text-[#868689] leading-[20px] font-medium"
                  >
                    {{ itemService.description }}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <!-- Hỗ trợ -->
          <span
            class="text-[14px] leading-[20px] p-[10px] font-medium text-[#1E1F24] ml-[80px] cursor-pointer relative group/support transition duration-200 hover:text-[#0066FF] max-size-lg:ml-[50px]"
          >
            Hỗ trợ
            <!-- hover -->
            <div
              class="group-hover/support:flex hidden absolute top-[10px] w-full h-[50px] z-[100]"
            ></div>
            <div
              class="group-hover/support:flex hidden absolute flex-col top-[40px] left-0 p-[4px] rounded-[8px] bg-white z-[100]"
            >
              <div
                v-for="itemHover in hoverSupport"
                :key="itemHover.title"
                class="px-[20px] py-[14px] flex flex-row w-[260px] min-w-[208px] hover:bg-[#D8ECFF] rounded-[8px]"
                :to="itemHover.to"
              >
                <a
                  :href="itemHover.to"
                  class="flex items-center w-full"
                  :target="itemHover.to ? '_blank' : '_self'"
                  rel="noopener noreferrer"
                >
                  <img :src="itemHover.icon" class="mr-[10px]" />
                  <p
                    class="text-[16px] w-full text-[#1E1F24] leading-[24px] font-medium"
                  >
                    {{ itemHover.title }}
                  </p>
                </a>
              </div>
            </div>
          </span>
        </div>
      </div>
      <!-- right -->
      <div
        class="flex flex-row px-[100px] items-center max-size-lg:px-[30px] max-size-pro:px-[10px] max-size-xs:px-[10px]"
      >
        <!-- EN | VN -->
        <!-- <div class="mr-[24px] max-size-lg:hidden max-size-xs:hidden">
          <span class="text-white">
            <span @click="setLocale('en')" class="cursor-pointer text-[#1E1F24]"
              >EN</span
            >
            <span class="cursor-pointer text-[#1E1F24]"> | </span>
            <span @click="setLocale('vi')" class="cursor-pointer text-[#1E1F24]"
              >VN</span
            ></span
          >
        </div> -->
        <!-- phone -->
        <a
          class="flex flex-row px-[14px] py-[10px] bg-[#0066FF] rounded-[6px] items-center justify-center mr-[24px] max-size-lg:hidden max-size-pro:hidden max-size-xs:hidden"
          href="tel:0974877007"
        >
          <UIcon
            name="mingcute:phone-line"
            class="text-white text-[18px] mr-[8px] group-hover:text-white transition duration-500"
          />
          <p
            class="text-white leading-[20px] font-medium group-hover:text-white transition duration-500"
          >
            0974877007
          </p>
        </a>
        <!-- search tracking in 425px screen -->
        <div>
          <div
            class="hidden bg-[#0066FF] items-center justify-center px-[14px] py-[10px] mr-[32px] rounded-[6px] max-size-lg:flex relative max-size-pro:px-[10px] max-size-pro:mr-[10px]"
            @click="
              () => {
                toggleIsVisible();
              }
            "
          >
            <UIcon
              name="i-tabler-search"
              class="flex items-center justify-center text-[20px] mr-[7px] max-size-pro:mr-0"
            />
            <p class="text-[14px] font-medium max-size-pro:hidden">
              Nhập mã Tracking
            </p>
          </div>
          <div
            class="bg-white rounded-[6px] shadow-xl shadow-[#37373777] absolute top-[55px] right-[230px] w-[314px] p-[10px] z-50 max-size-pro:right-[50px]"
            v-show="isVisibleSearchTracking"
          >
            <TrackingsMultipleInput
              v-model:invalid-trackings="invalidTrackings"
            />
          </div>
        </div>
        <!-- sign in / sign up -->
        <div
          class="flex flex-row items-center justify-center max-size-pro:hidden"
        >
          <UIcon
            name="mingcute:user-4-line"
            class="mr-[4px] text-[20px] text-[#0066FF] transition duration-500"
          />
          <div>
            <a
              href="https://app.thehuman.express/sign-up"
              class="text-[#1E1F24] hover:text-[#0066FF] transition duration-500"
              >Đăng ký</a
            >
            <span class="text-[#1E1F24] transition duration-500"> | </span>
            <a
              href="https://app.thehuman.express/sign-in"
              class="text-[#1E1F24] hover:text-[#0066FF] transition duration-500"
              >Đăng nhập</a
            >
          </div>
        </div>
        <div
          @click="
            () => {
              toggleIsVisibleSignin();
            }
          "
          class="hidden rounded-[6px] max-size-pro:flex max-size-pro:items-center max-size-pro:justify-center bg-[#F2F3F5] px-[12px] py-[10px]"
        >
          <UIcon
            name="i-mingcute-user-4-line"
            class="text-[#0066FF] text-[20px]"
          />
          <USlideover
            v-model="isVisibleSignIn"
            :overlay="false"
            :ui="{
              width: 'w-screen max-w-[300px]',
              overlay: {
                background: 'bg-[#82828299]',
              },
            }"
          >
            <div class="flex-1">
              <div
                class="flex flex-row items-center justify-between p-[5px] bg-[#0510632a]"
              >
                <p class="text-[#051063] ml-[10px]">THEHUMAN express</p>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  square
                  padded
                  @click="isVisibleSignIn = false"
                />
              </div>
              <div>
                <ul class="px-[20px] list-disc">
                  <li class="text-black text-[15px] mt-[10px]">
                    <a href="https://app.thehuman.express/sign-up">Đăng ký</a>
                  </li>
                  <li class="text-black text-[15px] mt-[10px]">
                    <a href="https://app.thehuman.express/sign-in">Đăng nhập</a>
                  </li>
                </ul>
              </div>
            </div>
          </USlideover>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject } from "vue";

const { locale, locales, setLocale } = useI18n();
const router = useRouter();

const isVisibleSearchTracking = ref(false);
const isVisibleSignIn = ref(false);

const toggleIsVisible = () => {
  isVisibleSearchTracking.value = !isVisibleSearchTracking.value;
};

const toggleIsVisibleSignin = () => {
  isVisibleSignIn.value = !isVisibleSignIn.value;
};

const invalidTrackings = inject("invalidTrackings");
const hoverAboutTHE = [
  {
    icon: "/icon/hoverAboutTHE/warning-hoverAboutTHE.svg",
    title: "Giới thiệu về THE",
    to: "/about",
  },
  {
    icon: "/icon/hoverAboutTHE/headphone-hoverAboutTHE.svg",
    title: "Liên hệ",
    to: "",
  },
  {
    icon: "/icon/hoverAboutTHE/user-hoverAboutTHE.svg",
    title: "Tuyển dụng",
    to: "",
  },
];
const hoverService = [
  {
    img: "/icon/hoverServiceHeader/internationalExpress.svg",
    title: "Chuyển phát quốc tế",
    description: "Dịch vụ chuyển phát nhanh quốc tế đáp ứng mọi nhu cầu.",
    to: "/international-express",
  },
  {
    img: "/icon/hoverServiceHeader/tiktokExpress.svg",
    title: "Chuyển phát Tiktok US",
    description:
      "Dịch vụ vận chuyển chuyên biệt dành cho các seller Tiktok US.",
    to: "/tiktok-express",
  },
  {
    img: "/icon/hoverServiceHeader/fbaExpress.svg",
    title: "Chuyển phát hàng FBA",
    description:
      "Dịch vụ vận chuyển hàng đến các kho FBA của Amazon một cách nhanh chóng và hiệu quả.",
    to: "/fba-express",
  },
];
const hoverSupport = [
  {
    icon: "/icon/hoverSupportHeader/document-hoverSupport.svg",
    title: "Điều khoản & chính sách",
    to: "/term-policies",
  },
  {
    icon: "/icon/hoverSupportHeader/pencil-hoverSupport.svg",
    title: "Hướng dẫn sử dụng",
    to: "https://thehuman.larksuite.com/wiki/Q6dFwt5e3iAJ7tkuZznuIX2qsOf?fromScene=spaceOverview",
  },
  {
    icon: "/icon/hoverSupportHeader/swap-hoverSupport.svg",
    title: "Kết nối API",
    to: "https://docs.thehuman.express/",
  },
];
</script>

<style lang="scss" scoped></style>
