<template>
    <div class="header" id="top">
        <div class="logo">
            <img src="@/assets/img/logo.svg"/>
        </div>
        <div class="nav-menu show" ref="navMenu">
            <NavMenu :menuItems="menuItems"/>
            <Button label="Login" icon="bi-arrow-right-square-fill" :color="$conf.isMobile ? 'btn-white' : 'btn-blue'" class="btn-login" to="admin"/>
            <button class="btn-close" @click.prevent="onClose">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <button class="toggle-menu" @click.prevent="onMenu">
            <i class="bi bi-list"></i>
        </button>
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
                }],
                isMobile: false,
            }
        },
        components: {
            NavMenu,
            Button,
        },
        methods: {
            onMenu() {
                this.$refs.navMenu.style.display = 'flex'
                this.$refs.navMenu.classList.add('show')
                this.$refs.navMenu.classList.remove('close')
            },
            onClose() {
                this.$refs.navMenu.classList.remove('show')
                this.$refs.navMenu.classList.add('close')
                setTimeout(() => this.$refs.navMenu.style.display = 'none', 500)

            }
        },
        async mounted() {
            this.$root.$on('navClose', () => {
                this.onClose()
            })
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
    
    .header .logo img {
        width: 120px;
    }
    
    .header .nav-menu {
        flex: 2;
        display: flex;
        justify-content: flex-end;
        column-gap: 1em;
    }
    
    .header .toggle-menu {
        display: none;
    }
    
    .header .btn-close {
        display: none;
    }
    
    @media (max-width: 768px) {
        .header .nav-menu {
            display: none;
            flex-direction: column-reverse;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #107DE8;
            z-index: 5;
            justify-content: flex-end;
            padding: 20% 0 20% 0;
            row-gap: 2em;
            align-items: center;
        }
        .header .nav-menu.show {
            animation: onShow 0.5s ease;
        }
        .header .nav-menu.close {
            animation: onClose 0.5s ease;
        }
        @keyframes onShow {
            from {
                transform: translate(-100%);
            }
            to {
                transform: translate(0);
            }
        }
        @keyframes onClose {
            from {
                transform: translate(0);
            }
            to {
                transform: translate(100%);
            }
        }
        .header .nav-menu .btn-login {
            display: flex;
        }
        .header .toggle-menu {
            display: flex;
            font-size: 24px;
            align-items: center;
            justify-content: center;
            padding: 10px 15px 10px 15px;
            border-radius: 8px;
        }
        .header .toggle-menu:hover {
            background: rgb(16, 125, 232);
            background: linear-gradient(319deg, rgba(16, 125, 232, 1) 0%, rgba(103, 179, 255, 1) 100%);
            color: var(--white);
        }
        .header .nav-menu .btn-close {
            display: flex;
            width: 48px;
            height: 48px;
            color: var(--white);
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            position: fixed;
            top: 20px;
            right: 20px;
        }
        .header .nav-menu .btn-close:hover {
            background: rgb(16, 125, 232);
            background: linear-gradient(319deg, rgba(16, 125, 232, 1) 0%, rgba(103, 179, 255, 1) 100%);
            box-shadow: 0 0 10px var(--white);
        }
    }
</style>