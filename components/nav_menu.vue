<template>
    <div :class="admin ? 'main-sidebar-menu' : 'main-nav-menu'">
        <nav :class="admin ? 'sidebar-menu-items' : 'nav-menu-items'" v-for="(d, i) in menuItems" :key="i"  @click.prevent="!admin ? to(d.to) : 0">
            <div v-if="!admin"> {{ d.label }} </div>
            <nav class="nav-menu-items-main" v-else :id="admin ? active(d.to) : 0" @click.prevent="admin && !d.items ? toF(d.to) : toSub(i-1)">
                <i :class="`fi fi-sr-${d.icon}`"></i> {{ d.label }} <i class="fi fi-sr-caret-down sub-chevron" v-if="d.items" ref="subChevron"></i>
            </nav>
            <div class="sub-menu" v-if="d.items" ref="subMenu">
                <nav class="nav-sub-menu" v-for="(sub, index) in d.items" :key="index" @click.prevent="toF(sub.to)" :id="admin ? active(sub.to) : 0">
                    {{ sub.label }}
                </nav>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'nav_menu',
        props: {
            menuItems: Array,
            admin: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            to(context) {
                document.getElementById(context).scrollIntoView();
                if (this.$conf.isMobile) {
                    this.$root.$emit('navClose')
                }
            },
            toF(context) {
                if (context == null) {
                    this.$router.push('/admin')
                } else {
                    this.$router.push(`/admin?f=${context}`)
                }
            },
            toSub(sub) {
                if (this.$refs.subMenu[sub].style.display == 'none') {
                    this.$refs.subMenu[sub].classList.add('show')
                    this.$refs.subMenu[sub].classList.remove('close')
                    this.$refs.subMenu[sub].style.display = 'flex'
                    this.$refs.subChevron[sub].style.transform = 'rotate(180deg)'
                    
                }
                else {
                    this.$refs.subMenu[sub].classList.remove('show')
                    this.$refs.subMenu[sub].classList.add('close')
                    this.$refs.subChevron[sub].style.transform = 'rotate(0deg)'
                    setTimeout(() => this.$refs.subMenu[sub].style.display = 'none', 500)
                }
            },
            active(context) {
                if (this.$route.query.f == context) {
                    return 'active'
                } else if (!this.$route.query && context == null) {
                    return 'active'
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
    
    .main-sidebar-menu {
        display: flex;
        flex-direction: column;
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
    
    .main-sidebar-menu .sidebar-menu-items {
        display: flex;
        align-items: center;
        gap: 0;
        color: var(--gray);
        position: relative;
        flex-direction: column;
        width: 10em;
    }
    
    .main-sidebar-menu .sidebar-menu-items .nav-menu-items-main {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 1em 1.5em 1em 1.5em;
        width: 100%;
        cursor: pointer;
        position: relative;
    }
    
    .main-sidebar-menu .sidebar-menu-items .nav-menu-items-main:hover {
        background-color: var(--black-light);
    }
    
    .main-sidebar-menu .sidebar-menu-items #active {
        background-color: var(--blue);
        color: var(--white);
    }
    
    .main-nav-menu .nav-menu-items:hover {
        background-color: var(--blue-light);
        color: var(--blue);
    }
    
    .main-sidebar-menu .sidebar-menu-items .nav-menu-items-main .sub-chevron {
        position: absolute;
        right: 10px;
    }
    .main-sidebar-menu .sidebar-menu-items .sub-menu {
        flex-direction: column;
        display: none;
        background-color: var(--black-light-2);
        margin-left: 0;
        padding: 0 1.5em 0 3.5em;
        width: 10em;
        margin-left: -1em;
    }

    .main-sidebar-menu .sidebar-menu-items .sub-menu.show {
        animation: showSubMenu 0.5s ease;
    } 
     .main-sidebar-menu .sidebar-menu-items .sub-menu.close {
        animation: closeSubMenu 0.5s ease;
    }      
    @keyframes showSubMenu {
        from {
            height: 0;
            opacity: 0;
        }
        to {
            height: 10em;
            opacity: 1;
        }
    }
    @keyframes closeSubMenu {
        from {
            height: 10em;
            opacity: 1;
        }
        to {
            height: 0;
            opacity: 0;
        }
    }
    .main-sidebar-menu .sidebar-menu-items .sub-menu .nav-sub-menu {
        width: 80%;
        padding: 1em 1.5em 1em 1.5em;
        cursor: pointer;
    }
    .main-sidebar-menu .sidebar-menu-items .sub-menu .nav-sub-menu:hover {
        background-color: var(--black-light);
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