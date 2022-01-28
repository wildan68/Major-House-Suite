<template>
    <div class="contact-widget" @mouseover="hover" @mouseout="blur">
        <div class="contact-icon" ref="icon">
            <i :class="'bi ' + icon" ref="icon_item"></i>
        </div>
        <div class="contact-value">
            <span class="contact-title">
                {{ title }}
            </span>
            <span class="contact-text">
                {{ label }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact_widget',
    props: {
        label: String,
        icon: String,
        title: String,
    },
    methods: {
        hover() {
            this.$refs.icon.style.background = 'var(--blue)'
            this.$refs.icon.style.background = 'linear-gradient(319deg, rgba(16, 125, 232, 1) 0%, rgba(103, 179, 255, 1) 100%)'
            this.$refs.icon.style.color = 'var(--white)'
            this.$refs.icon_item.style.transform = 'scale(1.1)'
        },
        blur() {
            this.$refs.icon.style.background = 'var(--blue-light)'
            this.$refs.icon.style.color = 'var(--blue)'
            this.$refs.icon_item.style.transform = 'scale(1)'
        }
    }
}
</script>
<style scoped>
    .contact-widget {
        display: flex;
        column-gap: 20px;
        align-items: center;
        cursor: pointer;
        padding: 1em;
        border-radius: 8px;
    }
    .contact-widget:hover {
        background-color: var(--white-light);
        
    }
    .contact-widget .contact-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: var(--blue-light);
        color: var(--blue);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: all 0.5s ease;
    }
    .contact-widget .contact-value {
        display: flex;
        flex-direction: column;
    }
    .contact-widget .contact-value .contact-title {
        font-size: 12px;
        color: var(--black-light);
    }
    .contact-widget .contact-value .contact-text {
        font-size: 18px;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        .contact-widget .contact-icon {
            width: 28px;
            height: 28px;
            font-size: 12px;
        }
        .contact-widget .contact-value .contact-title {
            font-size: 12px;
        }
        .contact-widget .contact-value .contact-text {
            font-size: 14px;
        }
    }
</style>
