<template>
    <div class="sidebar-admin show">
        <img src="@/assets/img/logo.svg"/>
        <span class="title-menu">Menu</span>
        <NavMenu :menuItems="mainMenu" :admin="true"/>
        <span class="title-menu">Akun</span>
        <NavMenu :menuItems="mainAccount" :admin="true"/>
        <nav class="btn-sidebar" @click.prevent="logout"><i class="fi fi-br-sign-out-alt"></i> Keluar</nav>
    </div>
</template>

<script>
import NavMenu from '@/components/nav_menu'

export default {
    name: 'sidebar_admin',
    components: {
        NavMenu
    },
    data() {
        return {
            mainMenu: [{
                label: 'Dashboard',
                to: null,
                icon: 'home',
            }, {
                label: 'Data Rumah',
                to: 'data_rumah',
                icon: 'add',
                items: [{
                    label: 'Semua Rumah',
                    to: 'list_rumah',
                }, {
                    label: 'Tambah Rumah',
                    to: 'add_rumah',
                },]
            }, {
                label: 'Blog',
                to: 'blog',
                icon: 'edit',
                items: [{
                    label: 'Semua Artikel',
                    to: 'list_artikel',
                }, {
                    label: 'Buat Artikel',
                    to: 'add_artikel',
                }, {
                    label: 'Penyesuaian',
                    to: 'blog_setting'
                }]
            }],
            mainAccount: [{
                label: 'Ganti Password',
                to: 'change_password',
                icon: 'key',
            }, {
                label: 'Konfigurasi',
                to: 'configuration',
                icon: 'settings'
            }],
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            this.$conf.dataAdmin = null
            this.$router.push('/admin/login')
        }
        
    }
}
</script>

<style scoped>
    .sidebar-admin {
        background-color: var(--black);
        color: var(--white);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 10em;
        padding: 2em 2em 5em 2em;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        z-index: 5;
    }
    .sidebar-admin.show {
        animation: showSidebar 0.5s ease;
    }
    .sidebar-admin.close {
        animation: closeSidebar 0.5s ease;
    }
    @keyframes showSidebar {
        from {
            transform: translate(-100%);
        }
        to {
            transform: translate(0);
        }
    }
    @keyframes closeSidebar {
        from {
            transform: translate(0);
        }
        to {
            transform: translate(-100%);
        }
    }
    .sidebar-admin .title-menu {
        color: var(--black-light);
        font-size: 12px;
    }
    .sidebar-admin .btn-sidebar {
        margin-left: -1.5em;
        padding: 1em 1.5em 1em 1.5em;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        color: var(--white);
        font-weight: 600;
        cursor: pointer;
        gap: 10px;
    }
    .sidebar-admin .btn-sidebar:hover {
        background-color: var(--black-light);
    }
</style>