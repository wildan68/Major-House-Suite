<template>
  <div class="home">
    <div class="home-container">
      <TagTitle label="Rumah terbaik untuk anda" />
      <div class="head-title">
        Temukan rumah<br><span style="color: var(--blue)">impian</span> kamu disini
      </div>
      <div class="sub-title">
        👋 Hallo, jika kamu sedang mencari rumah terbaik untukmu kamu
        datang ketempat yang tepat. Kami menyediakan jenis rumah yang
        mungkin kamu cari saat ini jangan ragu untuk menghubungin kami
        jika ada yang ingin ditanyakan.
      </div>
      <div class="newest-container">
          <div class="btn-container">
              <button class="btn-newest" @click.prevent="news" :id="newest_pointer == 0 ? 'active' : 'deactive'">Terbaru</button>
              <button class="btn-newest" @click.prevent="populer" :id="newest_pointer == 1 ? 'active' : 'deactive'">Terpopuler</button>
          </div>
          <Newest :items="items"/>
      </div>
    </div>
    <div class="home-thumb">
      <img ref="thumb" :src="'img/' + items[0].thumb" />
    </div>
  </div>
</template>

<script>
    import TagTitle from '@/components/tag_title.vue'
    import Newest from '@/components/newest.vue'

    export default {
        name: 'home_layout',
        components: {
            TagTitle,
            Newest,
        },
        data() {
            return {
                items: [{
                    tempat: 'Kota Tegal',
                    type: 'Greenwood House',
                    harga: 'Rp 1.5 M - Rp 1.8 M',
                    thumb: 'home1.jpg'
                }],
                newest_pointer: 0,
            }
        },
        methods: {
            news() {
                this.items[0].tempat = 'Kota Tegal'
                this.items[0].type = 'Greenwood House'
                this.items[0].harga = 'Rp 1.5 M - Rp 1.8 M'
                this.items[0].thumb = 'home1.jpg'
                this.newest_pointer = 0
                this.$refs.thumb.style.display = 'none'
                setTimeout(() => this.$refs.thumb.style.display = 'block', 500)
            },
            populer() {
                this.items[0].tempat = 'Jakarta'
                this.items[0].type = 'Shinewood House'
                this.items[0].harga = 'Rp 1.3 M'
                this.items[0].thumb = 'home3.jpg'
                this.newest_pointer = 1
                this.$refs.thumb.style.display = 'none'
                setTimeout(() => this.$refs.thumb.style.display = 'block', 500)
            }
        }
    }
</script>

<style scoped>
    .home {
        margin-top: 50px;
        display: flex;
    }
    
    .home .home-container {
        flex: 1;
    }
    
    .home .home-thumb {
        flex: 1;
    }
    
    .home-container .head-title {
        font-size: 48px;
        font-weight: 900;
        margin-top: 30px;
    }
    
    .home-container .sub-title {
        font-size: 18px;
        color: var(--black-light);
        margin-top: 30px;
    }
    
    .home-container .newest-container {
        position: relative;
        margin-top: 30px;
        width: 120%;
    }
    
    .home-container .newest-container .btn-container {
        display: flex;
    }
    
    .home-container .newest-container .btn-container .btn-newest {
        background-color: var(--white-light);
        color: var(--blue);
        font-weight: 600;
        padding: 1em 2.5em 1em 2.5em;
        border-radius: 22px 22px 0 0;
    }
    
    .home-container .newest-container .btn-container .btn-newest#active {
        background: rgb(16, 125, 232);
        background: linear-gradient(319deg, rgba(16, 125, 232, 1) 0%, rgba(103, 179, 255, 1) 100%);
        color: var(--white);
    }
    
    .home-container .newest-container .btn-container .btn-newest:hover {
        background-color: var(--gray);
    }
    
    .home-thumb {
        overflow: hidden;
        height: 575px;
        border-radius: 30px 0 0px 30px;
    }
    
    .home-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: thumbChange 0.5s ease;
    }
    @keyframes thumbChange {
        from {
            transform: translate(100%);
        }
        to {
            transform: translate(0);
        }
    }
    @media (max-width: 768px) {
        .home {
            flex-direction: column;
        }
        .home-container .head-title {
            font-size: 28px;
        }
        .home-container .sub-title {
            font-size: 14px;
        }
        .home-container .newest-container {
            width: 100%;
        }
        .home-thumb {
            height: 250px;
            border-radius: 0;
        }
    }
</style>