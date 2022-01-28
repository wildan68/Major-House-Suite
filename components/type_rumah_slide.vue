<template>
  <div v-swiper:mySwiper="swiper" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="i in 5" :key="i">
        <div class="swiper-item">
            <div class="thumb" @mouseover="hoverThumb(i-1)" @mouseout="blurThumb(i-1)">
                <div class="overlay-thumb" ref="overlay_thumb">
                    <Button label="Lihat detail" icon="bi-eye-fill" color="btn-blue-light"/>
                </div>
                <div class="price-box">Rp 1.5 M</div>
                <img src="@/assets/img/home2.jpg" ref="thumb"/>
            </div>
            <div class="title-items">
                TEST {{ i }}
            </div>
            <div class="info-items">
                <div class="info-item-list">
                    <span class="ico">
                        <img src="@/assets/img/svg/bed.svg"/>
                    </span>
                    2 Kamar Tidur
                </div>
                <div class="info-item-list">
                    <span class="ico">
                        <img src="@/assets/img/svg/bath.svg"/>
                    </span>
                    2 Kamar Mandi
                </div>
                <div class="info-item-list">
                    <span class="ico">
                        <img src="@/assets/img/svg/floor.svg"/>
                    </span>
                    Lt 8 x 20 m
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Button from '@/components/button'
    export default {
        name: 'type_rumah_slide_components',
        data() {
            return {
                swiper: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        }
                    }
                },
            }
        },
        components: {
            Button,
        },
        methods: {
            hoverThumb(i) {
                this.$refs.thumb[i].style.width = '120%'
                this.$refs.thumb[i].style.height = '120%'
                this.$refs.overlay_thumb[i].style.opacity = '1'
            },
            blurThumb(i) {
                this.$refs.thumb[i].style.width = '100%'
                this.$refs.thumb[i].style.height = '100%'
                this.$refs.overlay_thumb[i].style.opacity = '0'
            },
        },
    }
</script>

<style scoped>
    .swiper {
        overflow: hidden;
        height: 40em;
    }
    
    .swiper .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .swiper .swiper-slide .swiper-item {
        background-color: var(--white);
        width: 90%;
        height: 85%;
        border-radius: 30px;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
        -webkit-box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
        -moz-box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
    }
    
    .swiper .swiper-slide .swiper-item .thumb {
        height: 80%;
        overflow: hidden;
        border-radius: 30px;
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    
    .swiper .swiper-slide .swiper-item .thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
    }
    .swiper .swiper-slide .swiper-item .thumb .overlay-thumb {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease;
        opacity: 0;
    }
    .swiper .swiper-slide .swiper-item .thumb .price-box {
        width: 7em;
        height: 4em;
        background-color: var(--white);
        border-radius: 22px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        bottom: 10px;
        left: 10px;
    }
    
    .swiper .swiper-slide .swiper-item .title-items {
        font-size: 18px;
        font-weight: 800;
        margin-top: 20px;
    }
    
    .swiper .swiper-slide .swiper-item .info-items {
        display: flex;
        width: 100%;
        margin-top: 20px;
    }
    
    .swiper .swiper-slide .swiper-item .info-items .info-item-list {
        flex: 1;
        display: flex;
        column-gap: 10px;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: var(--orange);
    }
    
    .swiper .swiper-slide .swiper-item .info-items .info-item-list .ico {
        width: 24px;
        height: 24px;
        background-color: var(--orange-light);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }
    @media (max-width: 900px) {
        .swiper .swiper-slide .swiper-item .info-items {
            flex-direction: column;
            row-gap: 10px;
        }
    }
    @media (max-width: 768px) {
        .swiper {
            height: 25em;
        }
        .swiper .swiper-slide .swiper-item {
            border-radius: 14px;
        }
        .swiper .swiper-slide .swiper-item .thumb {
            border-radius: 14px;
        }
        .swiper .swiper-slide .swiper-item .thumb .price-box {
            width: 4em;
            height: 2em;
            font-size: 12px;
            border-radius: 8px;
            padding: 0 1em 0 1em;
        }
        .swiper .swiper-slide .swiper-item .title-items {
            font-size: 14px;
        }
        .swiper .swiper-slide .swiper-item .info-items {
            flex-direction: column;
            row-gap: 10px;
        }
    }
</style>