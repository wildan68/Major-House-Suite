<template>
    <div class="type-rumah" id="type-rumah">
        <TagTitle label="Terpopuler"/>
        <div class="title-container">
            <Title class="title-items" label="Type <span style='color: var(--blue)'>Rumah</span>"/>
            <div class="title-items" id="btn-variant">
                <Button color="btn-blue-light" icon="bi-arrow-right-circle-fill" label="Lihat semua variant"/>
            </div>
        </div>
        <TypeRumahSlide :items="items"/>
    </div>
</template>

<script>
import TagTitle from '@/components/tag_title'
import Title from '@/components/title'
import TypeRumahSlide from '@/components/type_rumah_slide'
import Button from '@/components/button'

export default {
    name: 'type_rumah',
    components: {
        TagTitle,
        Title,
        TypeRumahSlide,
        Button,
    },
    data() {
        return {
            items: [{
                name: 'Shinewood House',
                img: 'home2.jpg',
                price: '1.3 M',
                bed: 2,
                bath: 2,
                land: '8 x 20 m'
            }, {
                name: 'Voulenter House',
                img: 'home3.jpg',
                price: '2.5 M',
                bed: 5,
                bath: 3,
                land: '12 x 25 m'
            }, {
                name: 'Trivia House',
                img: 'home4.jpg',
                price: '1.8 M',
                bed: 2,
                bath: 3,
                land: '9 x 23 m'
            }, ]
        }
    }
}
</script>

<style scoped>
    .type-rumah {
        margin-top: 30px;
    }
    .type-rumah .title-container {
        display: flex;
        align-items: center;
    }
    .type-rumah .title-container .title-items {
        position: relative;
        flex: 1;
    }
    .type-rumah .title-container .title-items#btn-variant {
        display: flex;
        justify-content: flex-end;
        height: 4em;
    }
    @media (max-width: 768px) {
        .type-rumah .title-container .title-items#btn-variant {
            height: 3em;
        }
    }
</style>