<template>
    <div class="main-nav-menu">
        <nav class="nav-menu-items" v-for="(d, i) in menuItems" :key="i"  @click.prevent="to(d.to)">
            {{ d.label }}
        </nav>
    </div>
</template>

<script>
export default {
    name: 'nav_menu',
    props: {
        menuItems: Array,
    },
    methods: {
        to(context) {          
            document.getElementById(context).scrollIntoView();
            if (this.$conf.isMobile) {
                this.$root.$emit('navClose')
            }
        }
    }
}
</script>

<style scoped>
    .main-nav-menu {
        display: flex;
        column-gap: 1em;
        font-size: 14px;
        font-weight: 600;
        align-items: center;
    }
    .main-nav-menu .nav-menu-items {
        padding: 1em 1.5em 1em 1.5em;
        border-radius: 8px;
        transition: all 0.5s ease;
        cursor: pointer;
        color: var(--gray);
    }
    .main-nav-menu .nav-menu-items:hover {
        background-color: var(--blue-light);
        color: var(--blue);
    }
    @media (max-width: 768px) {
        .main-nav-menu {
            flex-direction: column;
            row-gap: 2em;
        }
        .main-nav-menu .nav-menu-items {
            color: var(--white);
            width: 200px;
        }
    }
</style>