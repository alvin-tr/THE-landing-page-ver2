<template>
    <div class="px-[80px] pt-[40px] pb-[64px] w-full bg-[#40dde0] flex flex-row justify-center
        max-size-lg:px-[20px]
    ">
        <TermAndPoliciesDropdown 
        class="w-[376px] mr-[60px] max-size-lg:hidden"
        @scroll-to-section="handleScrollToSection"
        />
        <TermAndPoliciesDescription 
        class="w-[844px] max-w-[844px]
        max-size-md:w-[768px]
        max-size-sm:w-[640px]
        max-size-pro:w-[400px] max-size-pro:px-[10px]
        max-size-xs:w-[350px]
        "
        ref="descriptionSection"
        />
    </div>
</template>

<script setup>
const descriptionSection = ref(null)
const handleScrollToSection = (sectionId) => {
  const target = descriptionSection.value?.$el.querySelector(sectionId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style lang="scss" scoped>

</style>