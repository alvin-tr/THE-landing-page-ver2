<template>
  <div
    class="relative w-full resize-none bg-[#394154] border-0 p-[12px] rounded-[6px] flex flex-wrap gap-x-2 gap-y-2 items-center"
  >
     
  <p class="absolute text-[#FFFFFF80] top-[10px] pt-2 pl-1" v-if="!model.length && !inputValue ">{{ placeholder }}</p>
    <template v-if="model?.length">
      <div
        v-for="(item, index) in model"
        class="tag-input__tag flex flex-row justify-center items-center p-1.5 px-2 gap-[6px] text-[#333333]"
      >
        {{ item }}
        <span @click="removeItem(index)"><img src="/img/close.svg" /></span>
      </div>
    </template>
    <BaseInput
      :config="{
        textTransform: 'uppercase',
        maxLength: 30,
        noSpecialChar: true,
      }"
      inputClass="!bg-transparent border-none outline-none pl-[0]"
      variant="none"
      class="h-fit flex-1 min-w-[100px]"
      v-model="inputValue"
      @keydown="
        (e) => {
          if (e.code === BACKSPACE_CODE && !e.target.value && model?.length) {
            removeItem(model.length - 1)
            e.preventDefault()
            return
          }

          if (e.code !== SPACE_CODE) return
          e.preventDefault()
          if (!e.target.value) return
          inputValue = ''
          if (Array.isArray(model)) return model.push(e.target.value)
          model = [e.target.value]
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
const SPACE_CODE = 'Space'
const BACKSPACE_CODE = 'Backspace'
const ENTER_CODE = 'Enter'

interface IProps {
  placeholder: string
}
interface IEmit {
  submit: string
}
defineEmits()
defineProps<IProps>()
const model = defineModel<any[]>()

const inputValue = defineModel<string>('inputValue')
const removeItem = (index: number) => {
  // Mutate the array
  model.value.splice(index, 1)

  // Reassign to ensure reactivity
  model.value = [...model.value]
}
</script>

<style scoped>
@import '@/assets/css/oldStyle.css';
</style>
