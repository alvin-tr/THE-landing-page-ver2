<template>
  <UInput
    :="$attrs"
    @blur="
      () => {
        $emit('blur');
      }
    "
    ref="refInput"
    type="text"
    :model-value="originValue"
    @input="handleInput"
  ></UInput>
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue";
const regex = {
  noSpecialRegex:
    /^[a-zA-Z0-9àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,

  emailRegex:
    /^[a-zA-Z0-9](?!.*\.\.)[a-zA-Z0-9.]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  hasNumberRegex: /\d/,
  hasUppercaseRegex: /[A-Z]/,
  hasLowercaseRegex: /[a-z]/,
  isPhoneNumberRegex: /^([0-9]{9,10})$/,
  numericRegex: /^\d+$/,
  noSpecialAndNoCharVNChar: /^[A-Za-z0-9 ]+$/,
  number: /\d+/g,
  notHasSpecial:
    /[^a-zA-Z0-9àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+/g,
};
const refInput = ref<InputTypeHTMLAttribute | null>(null);
const emit = defineEmits<{
  (event: "input", payload: InputEvent): void;
  (event: "blur", payload: InputEvent): void;
}>();
type TextTransform = "uppercase" | "lowercase" | "normal";
type InputType = "numeric" | InputTypeHTMLAttribute;
interface IConfig {
  maxLength?: number;
  textTransform?: TextTransform;
  type?: InputType;
  noSpecialChar?: boolean;
  convertVNChars?: boolean;
  maxDecimalLength?: number;
  noNumber?: boolean;
  noSpace?: boolean;
}
interface IProps {
  config?: IConfig;
  modelValue: InputValue;
}

type InputValue = number | string;
const props = defineProps<IProps>();
const config = computed<IConfig>(() => {
  return {
    type: "text",
    textTransform: "normal",
    noSpecialChar: false,
    convertVNChars: false,
    maxLength: 100,
    maxDecimalLength: 5,
    noNumber: false,
    format: {
      format: (value: string | number): string => String(value),
      unFormat: (value: string): InputValue => value,
    },
    noSpace: false,
    ...props.config,
  };
});

const originValue = defineModel<InputValue>();
// const inputValue = computed<InputValue>(() => {
//   return originValue.value as InputValue
//   if (config.value.type === 'number' && !originValue.value) return '0'
//   return config.value.format?.format(originValue.value, config.value.maxDecimalLength) as InputValue
// })

function handleTypeNumber(value: string) {
  if (config?.value.type !== "number") return value;
  if (value === "") return 0;
}
function handleNoNumber(value: string): string {
  if (!config?.value?.noNumber) return value;

  // Remove all numbers from the string
  return value.replace(regex.number, "");
}
function handleNumber(value: string) {
  return value;
}
function handleNumeric(value: string) {
  if (config.value.type !== "numeric") return value;
  const numericValue = String(value).replace(/[^0-9.-]/g, "");
  return numericValue;
}
function handleMaxLength(value: string) {
  const maxLength = config.value.maxLength as number;
  if (value.length >= maxLength) {
    return originValue.value;
  }
  return value;
}

function handleTransformText(value: string) {
  const textTransform = config.value.textTransform as TextTransform;
  if (textTransform === "uppercase") return value.toUpperCase();
  if (textTransform === "lowercase") return value.toLowerCase();
  return value;
}

// function handleNoSpecialChar(value: string): string {
//   if (!config?.value?.noSpecialChar) return value

//   // Remove all special characters from the string
//   return value.replace(regex.noSpecialRegex, '')
// }
function handleNoSpecialChar(value: string): string {
  if (!config?.value?.noSpecialChar) return value;
  return value.replace(regex.notHasSpecial, "");
}

function handleNoSpace(value: string): string {
  if (!config?.value?.noSpace) return value;
  return value.replace(/\s/g, "");
}
function handleConvertVNChars(value: string) {
  return value;
  const convertValue = config.value.convertVNChars
    ? String(replaceAccentedCharacters(value))
    : value;
  return convertValue;
}

function handleInput(e: InputEvent) {
  const target = e.target as HTMLInputElement;
  emit("input", e);
  let caretPosition = target.selectionStart || 0;
  const originalPositionRight = target.value.length - caretPosition;
  const listHandler = [
    handleConvertVNChars,
    // handleNoSpecialChar,
    handleMaxLength,
    handleNoSpecialChar,
    handleTransformText,
    handleNoNumber,
    handleNumeric,
    handleNoSpace,
    // handleTypeNumber,
  ];

  target.value = listHandler.reduce((acc, handler) => {
    return handler(acc) as string;
  }, target.value);
  //keep caret position

  originValue.value = target.value;
  nextTick(() => {
    caretPosition = target.value.length - originalPositionRight;
    target.setSelectionRange(caretPosition, caretPosition);
  });
}
</script>

<style lang="scss" scoped></style>
