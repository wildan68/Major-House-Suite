<template>
    <div class="footer">
        <div class="btn-top">
            <button class="btn-top-item" @click.prevent="onTop">
                <i class="bi bi-arrow-up"></i>
            </button>
        </div>
        <div class="btn-label">
            Kembali keatas
        </div>
        <div class="info-container">
            <div class="social-media">
                Ikuti Kami
                <div class="btn-social-media-container">
                    <a href="https://facebook.com/wildannaxviking12" target="_blank" class="btn-social-media">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://instagram.com/wldan.rzky_" target="_blank" class="btn-social-media">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="btn-social-media">
                        <i class="bi bi-twitter"></i>
                    </a>
                </div>
            </div>
            <div class="address">
                Kantor Pemasaran
                <br>
                <div class="text-footer">
                    Jl. Apa saja, No. 69<br>
                    Tegal Timur, Kota Tegal<br>
                    <br>
                    Telp. 0211 - 0277 - 082
                </div>
            </div>
            <div class="sitemap">
                Sitemap
                <div class="text-footer">
                    Type Rumah<br>
                    Pencarian<br>
                    Blog<br>
                    Kontak Kami<br>
                </div>
            </div>
        </div>
        <div class="copyright">
            Major House Suite &copy; 2022<br>
            UI By Wildan Rizky
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'footer_layouts',
        methods: {
            onTop() {
                document.getElementById('top').scrollIntoView();
            }
        }
    }
</script>

<style scoped>
    .footer {
        background-color: var(--blue);
        height: 30em;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--white);
        border-radius: 30px 30px 0 0;
        position: relative;
    }
    
    .footer .btn-top {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--white);
        color: var(--blue);
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        top: -50px;
    }
    
    .footer .btn-top .btn-top-item {
        background-color: var(--blue);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: all 0.5s ease;
    }
    
    .footer .btn-top .btn-top-item:hover {
        background: rgb(16, 125, 232);
        background: linear-gradient(319deg, rgba(16, 125, 232, 1) 0%, rgba(103, 179, 255, 1) 100%);
    }
    
    .footer .btn-top::before {
        content: '';
        width: 24px;
        height: 20px;
        background-color: var(--blue);
        position: absolute;
        left: -22px;
        top: 50px;
        border-top-right-radius: 22px;
        box-shadow: 10px -10px 0px 5px var(--white);
    }
    
    .footer .btn-top::after {
        content: '';
        width: 24px;
        height: 20px;
        background-color: var(--blue);
        position: absolute;
        right: -21.5px;
        top: 50px;
        border-top-left-radius: 22px;
        box-shadow: -10px -10px 0px 5px var(--white);
    }
    
    .footer .btn-label {
        margin-top: 6em;
        padding: 1em;
        background-color: var(--white);
        color: var(--blue);
        border-radius: 8px;
        font-weight: 600;
        font-size: 12px;
    }
    .footer .info-container {
        display: flex;
        margin-top: 30px;
        width: 70%;
    }
    .footer .info-container .social-media, .address, .sitemap {
        flex: 1;
        color: var(--blue-light-2)
    }
    .footer .info-container .social-media .btn-social-media-container {
        display: flex;
        column-gap: 2em;
        margin-top: 10px;
    }
    .footer .info-container .social-media .btn-social-media-container .btn-social-media {
        background-color: var(--blue-light);
        color: var(--blue);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        
        transition: all 0.5s ease;
    }
    .footer .info-container .social-media .btn-social-media-container .btn-social-media:hover {
        background: rgb(16, 125, 232);
        background: linear-gradient(319deg, rgba(16, 125, 232, 1) 0%, rgba(103, 179, 255, 1) 100%);
        color: var(--white);
        box-shadow: 0 0 15px var(--white);
    }
    .footer .info-container .text-footer {
        font-weight: 18px;
        font-weight: 600;
        margin-top: 10px;
        color: var(--white);
    }
    .footer .copyright {
        position: absolute;
        bottom: 2em;
        color: var(--blue-light-2);
        font-size: 12px;
        text-align: center;
    }
    @media (max-width: 768px) {
        .footer {
            height: auto;
            padding: 0 0 10em 0;
        }
        .footer .info-container {
            flex-direction: column;
            row-gap: 2em;
        }
    }
</style>