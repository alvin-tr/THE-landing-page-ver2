<template>
    <UAccordion color="primary" variant="soft" size="sm" :items="dropdowns" class="px-[20px] py-[18px]">
        <template #default="{ item }">
            <div>
                <!-- Hiển thị content chính -->
                <p >{{ item.label }}</p>

                <!-- Kiểm tra và render dropdown con -->
                <UAccordion 
                    v-if="item.children" 
                    color="secondary" 
                    variant="soft" 
                    size="sm" 
                    :items="item.children" 
                    class="mt-2 ml-4"
                />
            </div>
        </template>
    </UAccordion>
</template>

<script setup>
const dropdowns = [
    {
        label: '1. Các thuật ngữ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        label: '2. Chính sách hoàn tiền của THE',
        content: '',
        children: [
            {
                label: '2.1. Phạm vi trách nhiệm',
                content: 'Nội dung phạm vi trách nhiệm...'
            },
            {
                label: '2.2. Các trường hợp và chính sách',
                content: 'Nội dung các trường hợp và chính sách...'
            }
        ]
    },
    {
        label: '3. Quy định về khiếu nại',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        label: '4. Các Quy định khác',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
]
</script>

<style lang="scss" scoped></style>