<template>
    <div class="title-component">
        <span class="square"></span>
        <span class="text" v-html="label"></span>
    </div>
</template>

<script>
    export default {
        name: 'title_components',
        props: {
            label: String,
        }
    }
</script>

<style scoped>
    .title-component {
        font-size: 48px;
        font-weight: 800;
        margin-top: 20px;
        position: relative;
        margin-bottom: 20px;
    }
    
    .title-component .square {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: var(--blue-light);
        border-radius: 8px;
        z-index: 0;
        left: -10px;
        bottom: -10px;
        z-index: -1;
    }
    
    .title-component .text {
        z-index: 0;
    }
    
    @media (max-width: 768px) {
        .title-component {
            font-size: 18px;
        }
        .title-component .square {
            width: 24px;
            height: 24px;
            border-radius: 4px;
        }
    }
</style>