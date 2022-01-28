<template>
    <div class="type-rumah" id="type-rumah">
        <TagTitle label="Terpopuler"/>
        <div class="title-container">
            <Title class="title-items" label="Type <span style='color: var(--blue)'>Rumah</span>"/>
            <div class="title-items" id="btn-variant">
                <Button color="btn-blue-light" icon="bi-arrow-right-circle-fill" label="Lihat semua variant"/>
            </div>
        </div>
        <TypeRumahSlide/>
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