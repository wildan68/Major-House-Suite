<template>
    <div class="mainapp-admin" v-if="$conf.dataAdmin != null">
        <div class="wrapper-admin">
            <button class="toggle-sidebar" v-if="$conf.isMobile" @click.prevent="toggleSidebar" ref="toggleSidebar">
                <i :class="sidebar ? 'fi fi-br-caret-left' : 'fi fi-br-caret-right'"></i>
            </button>
            <Sidebar v-if="sidebar"/>
            <div class="content-admin" :style="sidebar ? 'margin-left: 15em; width: 500px' : 'margin-left: 0'">
                <!-- Main Menu -->
                <Dashboard v-if="!$route.query.f"/>
                <AddRumah v-else-if="$route.query.f == 'add_rumah'"/>
                <!-- Menu Akun -->
                <ChangePassword v-else-if="$route.query.f == 'change_password'"/>
                <Configuration v-else-if="$route.query.f == 'configuration'"/>
                <div v-else>
                    <h3>Halaman Tidak Ditemukan!</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Sidebar from '@/layouts/admin/sidebar'
    import Dashboard from '@/layouts/admin/dashboard'
    import AddRumah from '@/layouts/admin/add_rumah'
    import ChangePassword from '@/layouts/admin/change_password'
    import Configuration from '@/layouts/admin/configuration'

    export default {
        name: 'index_admin',
        components: {
            Sidebar,
            Dashboard,
            AddRumah,
            ChangePassword,
            Configuration,
        },
        data() {
            return {
                sidebar: false,
            }
        },
        methods: {
            toggleSidebar() {
                if (this.sidebar) {
                    console.log(this.$refs)
                    this.sidebar = false
                    this.$refs.toggleSidebar.style.left = '0'
                }
                else {
                    this.sidebar = true
                    this.$refs.toggleSidebar.style.left = '8em'
                }
            }
        },
        async mounted() {
            if (localStorage.username == null && localStorage.password == null) {
                this.$router.push('/admin/login')
            } else {
                await axios
                    .post(`${this.$conf.url_api}?func=login`, {
                        username: localStorage.username,
                        password: localStorage.password,
                    })
                    .then(response => {
                        this.$conf.dataAdmin = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        if (this.$conf.dataAdmin.status != 0) {
                            this.$toast.success("Berhasil Masuk!")
                        } else {
                            this.$toast.warning("Gagal Masuk!")
                            this.$router.push('/admin/login')
                        }
                    })
                    if (document.body.offsetWidth >= 768) {
                        this.$conf.isMobile = false
                        this.sidebar = true
                    } else {
                        this.$conf.isMobile = true
                        this.sidebar = false
                    }
            }
        },
        head() {
            return {
                title: 'Admin Dashboard'
            }
        }
    }
</script>

<style scoped>
    .content-admin {
        padding: 5em 2em 0 2em;
        overflow: hidden;
    }
    .toggle-sidebar {
        position: absolute;
        background-color: var(--blue);
        width: 48px;
        height: 48px;
        color: var(--white);
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>