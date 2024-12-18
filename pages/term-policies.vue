<template>
    <div >
        <HeaderWhite class="fixed top-0 w-full" v-model="isOpenListTitle"/>
    <TermAndPoliciesTitle class="mt-[64px]"/>
    <TermAndPoliciesBody class="bg-[#F2F3F5] flex "/>
    <USlideover v-model="isOpenListTitle">
      <UCard
        class="flex flex-col flex-1 bg-[#F2F3F5]"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-5 z-10"
            square
            padded
            @click="isOpenListTitle = false"
          />
          <Placeholder class="h-8" />
        </template>

        <div class="">
            <TermAndPoliciesDropdown class="ml-[-20px]"/>
        </div>

        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </USlideover>
    </div>
</template>

<script setup>
const isOpenListTitle = ref(false);
</script>

<style scoped>

</style>