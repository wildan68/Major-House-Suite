<template>
    <div class="header" id="top">
        <div class="logo">
            <img src="@/assets/img/logo.svg"/>
        </div>
        <div class="nav-menu">
            <NavMenu :menuItems="menuItems"/>
            <Button label="Login" icon="bi-arrow-right-square-fill" color="btn-blue"/>
        </div>
    </div>
</template>

<script>
import NavMenu from '@/components/nav_menu.vue'
import Button from '@/components/button.vue'

export default {
    name: 'header_layouts',
    data() {
        return {
            menuItems: [{
                label: 'Home'
            }, {
                label: 'Type Rumah',
                to: 'type-rumah'
            }, {
                label: 'Blog'
            }, {
                label: 'Kontak Kami'
            }]
        }
    },
    components: {
        NavMenu,
        Button,
    }
}
</script>

<style scoped>
    .header {
        height: 7em;
        display: flex;
        align-items: center;
        padding: 0 30px 0 30px;
    }
    .header .logo {
        flex: 1;
    }
    .header .nav-menu {
        flex: 2;
        display: flex;
        justify-content: flex-end;
        column-gap: 1em;
    }
    @media (max-width: 768px) {
        .header .nav-menu {
            display: none;
        }
    }
</style>