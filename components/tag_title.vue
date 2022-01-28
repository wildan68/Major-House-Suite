<template>
    <div class="tag-title">
        {{ label }}
    </div>
</template>

<script>
export default {
    name: 'tag_title',
    props: {
        label: String,
    }
}
</script>

<style scoped>
    .tag-title {
        background-color: var(--green-light);
        display: inline-block;
        color: var(--gren);
        padding: 10px 24px 10px 24px;
        font-weight: 600;
        color: var(--green);
        border-radius: 8px;
    }
    @media (max-width: 768px) {
        .tag-title {
            padding: 5px 14px 5px 14px;
            font-size: 12px;
        }
    }
</style>