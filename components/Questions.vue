<template>
  <ul class="pl-[20px]">
    <li
      v-for="question in questions"
      :class="{
        [ui.wrapper]: ui.wrapper,
      }"
      class="rounded-[4px]"
    >
      <div
        :class="{
          'cursor-pointer py-[18px] px-5 flex items-center text-base transition-all duration-500': true,
          [ui.textWrapper]: ui.textWrapper,
        }"
        @click="
          () => {
            currentQuestion =
              currentQuestion === question.key
                ? parent?.key || ''
                : question.key;
            question.handleClick && question.handleClick(question);
            scrollToSection(question.key);
          }
        "
      >
        <span
          :class="{
            'mr-3': true,
            [ui.key]: ui.key,
            '!text-[#0066FF]': currentQuestion === question.key,
          }"
          >{{ question.key }}.</span
        >
        <span
          :class="{
            [ui.title]: ui.title,
            '!text-[#0066FF]': currentQuestion === question.key,
          }"
          >{{ question.title }}</span
        >

        <div
          v-if="question.children?.length"
          icon="i-tabler-chevron-down"
          class="ml-auto p-1 bg-[#F2F3F5] rounded-[4px] flex justify-center items-center"
        >
          <UIcon
            :name="
              currentQuestion.startsWith(question.key)
                ? 'tabler:chevron-down'
                : 'tabler:chevron-right'
            "
            class="text-[#1E1F24] size-[18px] transition-all duration-500"
          />
        </div>
      </div>
      <Questions
        v-if="
          question.children?.length && currentQuestion.startsWith(question.key)
        "
        :questions="question.children"
        :ui="question.ui"
        v-model="currentQuestion"
        :parent="question"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
interface IUi {
  key: "";
  title: "";
  wrapper: "";
  textWrapper: "";
}
interface IQuestion {
  title: string;
  key: string;
  children: IQuestion[];
  ui?: IUi;
  handleClick?: Function;
}
interface IProps {
  questions: IQuestion[];
  ui: IUi;
  parent?: IQuestion;
}

const currentQuestion = defineModel<string>();
const props = defineProps<IProps>();
const ui = computed(() => {
  return {
    key: "text-[#0066FF]",
    title: "text-[#333333]",
    wrapper: "",
    textWrapper: "",
    ...props?.ui,
  };
});

const scrollToSection = (key) => {
  const section = document.getElementById(`section-${key}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped></style>
