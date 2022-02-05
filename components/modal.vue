<template>
    <div class="overlay-modal">
        <div class="modal">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal'
}
</script>

<style scoped>
    .overlay-modal {
        background-color: #0000008f;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
    }

    .modal {
        background-color: var(--white);
        width: 25em;
        padding: 3em;
        border-radius: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        animation: showModal 0.5s ease;
    }
    @keyframes showModal {
        from {
            transform: translate(0, -100%);
        }
        to {
            transform: translate(0, 0);
        }
    }
    @media (max-width: 768px) {
        .modal {
        width: 70%;
        }
    }
</style>