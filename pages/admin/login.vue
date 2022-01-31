<template>
  <div class="loginapp">
    <div class="loginbox">
      <div class="titlebox">
        Admin Login
      </div>
      <form @submit.prevent="login">
        <div class="group">
          <input type="text" naem="username" required>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Username</label>
        </div>
        <div class="group">
          <input type="text" naem="password" required>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Password</label>
        </div>
        <button class="loginSubmit">
            Masuk
        </button>
      </form>
    </div>
    <nuxt-link to="/" class="backHome"><i class="bi bi-arrow-left"></i> Kembali</nuxt-link>
  </div>
</template>

<script>
    export default {
        name: 'login_page',
        methods: {
            login() {
                this.$toast.warning("Belum bisa login ya ges ya")
            }
        },
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
        height: 50%;
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
    
    @media (max-width: 768px) {
        .loginbox {
            width: 80%;
            height: 25em;
        }
    }
</style>