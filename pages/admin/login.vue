<template>
  <div class="loginapp">
    <div class="loginbox">
      <div class="titlebox">
        MHS CMS
      </div>
      <form @submit.prevent="login(username, password)">
        <div class="group">
          <input type="text" name="username" required @input="username = $event.target.value" autocomplete="off">
          <span class="highlight"></span>
          <span class="bar"></span>
          <span class="icon"><i class="fi fi-sr-user"></i></span>
          <label>Username</label>
        </div>
        <div class="group">
          <input type="password" name="password" required @input="password = $event.target.value" autocomplete="off">
          <span class="highlight"></span>
          <span class="bar"></span>
          <span class="icon"><i class="fi fi-sr-lock"></i></span>
          <label>Password</label>
        </div>
        <button class="loginSubmit">
            Masuk
        </button>
      </form>
      <div class="info-login">
          Untuk demo login<br>
          <br>
          Username : <b>admin</b><br>
          Password : <b>admin</b>
      </div>
    </div>
    <nuxt-link to="/" class="backHome"><i class="bi bi-arrow-left"></i> Kembali</nuxt-link>
  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'login_page',
        data() {
            return {
                username: null,
                password: null,
            }
        },
        methods: {
            async login(u, p) {
                await axios
                    .post(`${this.$conf.url_api}?func=login`, {
                        username: u,
                        password: p,
                    })
                    .then(response => {
                        this.$conf.dataAdmin = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        if (this.$conf.dataAdmin.status != 0) {
                            localStorage.setItem('username', u)
                            localStorage.setItem('password', p)
                            this.$router.push('/admin')
                        }
                        else {
                            this.$toast.warning("Gagal Masuk!")
                        }
                    })
            }
        },
        async mounted() {
            if (localStorage.getItem('username') != null && localStorage.getItem('password') != null) {
                this.login(localStorage.getItem('username'), localStorage.getItem('password'))
            }
        },
        head() {
            return {
                title: 'Admin Login'
            }
        }
    }
</script>

<style scoped>
    .loginapp {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
    
    .loginapp .backHome {
        display: flex;
        gap: 10px;
    }
    
    .loginapp .backHome:hover {
        color: var(--blue);
    }
    
    .loginbox {
        width: 30%;
        height: auto;
        background-color: var(--white);
        border-radius: 22px;
        padding: 3em 2em 2em 2em;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
        -webkit-box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
        -moz-box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
        border-top: 5px solid var(--blue);
    }
    
    .loginbox .titlebox {
        position: absolute;
        top: -30px;
        background-color: var(--blue);
        width: auto;
        height: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em 1em 2em;
        border-radius: 30px;
        font-size: 14px;
        color: var(--white);
        font-weight: 600;
        border: 5px solid var(--white);
    }
    
    .loginbox .titlebox::before {
        content: '';
        width: 60%;
        height: 3em;
        left: -10px;
        bottom: -12px;
        background-color: transparent;
        position: absolute;
        z-index: 0;
        border-bottom: 5px solid var(--blue);
        border-left: 5px solid var(--blue);
        border-bottom-left-radius: 30px;
    }
    
    .loginbox .titlebox::after {
        content: '';
        width: 60%;
        height: 3em;
        right: -10px;
        bottom: -12px;
        background-color: transparent;
        position: absolute;
        z-index: 0;
        border-bottom: 5px solid var(--blue);
        border-right: 5px solid var(--blue);
        border-bottom-right-radius: 30px;
    }
    
    .loginbox form {
        margin-top: 5em;
        display: flex;
        flex-direction: column;
    }
    
    .loginbox form .loginSubmit {
        background-color: var(--blue);
        padding: 1em 1.5em 1em 1.5em;
        border-radius: 8px;
        color: var(--white);
        font-weight: 600;
    }
    
    .loginbox form .loginSubmit:hover {
        background: rgb(16, 125, 232);
        background: linear-gradient(319deg, rgba(16, 125, 232, 1) 0%, rgba(103, 179, 255, 1) 100%);
    }
    .loginbox .info-login {
        background-color: var(--blue-light);
        padding: 1em 2em 1em 2em;
        margin-top: 20px;
        color: var(--blue);
        border-radius: 8px;
    }
    @media (max-width: 768px) {
        .loginbox {
            width: 80%;
            height: 30em;
        }
    }
</style>