<template>
  <UInput :="$attrs" :model-value="inputValue" @input="handleInput"> </UInput>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { number } from 'yup'
import numberHandler from '../../../utils/numberHandler'
interface IProps {
  max: number
  min: number
  maxDecimalLength: number
}
const props = defineProps<IProps>()
const maxValue = computed(() => {
  return props.max || Number.MAX_SAFE_INTEGER
})
const minValue = computed(() => {
  return props.min || 0
})
const maxDecimalLength = computed(() => {
  return props.maxDecimalLength || 0
})
const originValue = defineModel<number>()
const inputValue = computed(() => {
  return String(Number(originValue.value) || 0)
})
const emit = defineEmits<{
  (event: 'input', payload: InputEvent): void
  (event: 'blur', payload: InputEvent): void
}>()

function handleNumeric(value: string) {
  if (isNaN(Number(value))) return inputValue.value
  return value.trim()
}

function handleWhenEmpty(value: string): string {
  if (!value) return '0'
  return value
}
function handleMaxValue(value: string): string {
  if (Number(value) > maxValue.value) return inputValue.value
  return value
}

function handleMinValue(value: string): string {
  if (Number(value) < minValue.value) return inputValue.value
  return value
}
function handleMaxDecimal(value: string): string {
  console.log(numberHandler.getDecimals(value))
  if (numberHandler.getDecimals(value) > maxDecimalLength.value)
    return inputValue.value

  return value
}
function handleInput(e: InputEvent) {
  const target = e.target as HTMLInputElement
  emit('input', e)
  let caretPosition = target.selectionStart || 0
  const originalPositionRight = target.value.length - caretPosition
  // if (Number(target.value) === originValue.value) return 
  const listHandler = [
    // handleNoSpecialChar,
    handleNumeric,
    // handleTypeNumber,
    handleWhenEmpty,
    handleMaxValue,
    handleMinValue,
    handleMaxDecimal,
  ]

  target.value = listHandler.reduce((acc, handler) => {
    return handler(acc) as string
  }, target.value)
  //keep caret position
  originValue.value = Number(target.value)
  nextTick(() => {
    caretPosition = target.value.length - originalPositionRight
    target.setSelectionRange(caretPosition, caretPosition)
  })
}
</script>

<style lang="scss" scoped></style>
