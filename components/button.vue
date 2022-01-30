<template>
    <button :class="'btn ' + color">
        {{ label }} <i :class="'bi '+ icon"></i>
    </button>
</template>

<script>
    export default {
        name: 'button_component',
        props: {
            label: String,
            icon: String,
            color: String,
        }
    }
</script>

<style scoped>
    .btn {
        padding: 0.5em 1.5em 0.5em 1.5em;
        font-weight: 600;
        border-radius: 8px;
        display: flex;
        gap: 20px;
        align-items: center;
        transition: all 0.5s ease;
    }
    
    .btn i {
        font-size: 18px;
    }
    
    .btn-blue {
        background-color: var(--blue);
        color: var(--white);
    }
    
    .btn-blue:hover {
        background-color: var(--blue-dark);
    }
    
    .btn-white {
        background-color: var(--white);
        color: var(--blue);
    }
    
    .btn-white:hover {
        background-color: var(--white-light);
    }
    
    .btn-blue-light {
        background-color: var(--blue-light);
        color: var(--blue);
    }
    
    .btn-blue-light:hover {
        background: rgb(16, 125, 232);
        background: linear-gradient(319deg, rgba(16, 125, 232, 1) 0%, rgba(103, 179, 255, 1) 100%);
        color: var(--white);
    }
    
    @media (max-width: 768px) {
        .btn {
            font-size: 12px;
            padding: 1em 1.5em 1em 1.5em;
        }
        .btn i {
            font-size: 12px;
        }
    }
</style>