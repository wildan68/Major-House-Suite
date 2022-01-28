<template>
  <div class="kontak" id="kontak">
    <Title label="Kontak Kami" />
    <div class="kontak-container">
      <div class="kontak-info">
        <ContactWidget label="contact@majorhouse.com" title="Email" icon="bi-envelope-fill" />
        <ContactWidget label="0211 - 0277 - 082" title="Telp" icon="bi-telephone-fill" />
        <ContactWidget label="0812 - 0022 - 0012" title="Whatsapp" icon="bi-whatsapp" />
        <ContactWidget label="Jl. Apa saja, No. 69 Tegal Timur, Kota Tegal" title="Kantor Pemasaran"
          icon="bi-geo-alt-fill" />
      </div>
      <div class="kontak-maps">
        <div class="mapouter"><div class="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=jl.%20kemuning%20tegal&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
      </div>
    </div>
  </div>
</template>

<script>
    import Title from '@/components/title'
    import ContactWidget from '@/components/contact_widget'

    export default {
        name: 'kontak',
        components: {
            Title,
            ContactWidget,
        }
    }
</script>

<style scoped>
    .kontak-container {
        display: flex;
        height: auto;
    }
    
    .kontak-container .kontak-info {
        flex: 1;
        padding: 3em;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
    }
    
    .kontak-container .kontak-maps {
        flex: 1;
        padding: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .kontak-container .kontak-maps .gmap_canvas {
        border-radius: 22px;
        overflow: hidden;
    }
    
    .kontak-container .kontak-maps .gmap_canvas iframe {
        width: 450px;
        height: 430px;
    }
    
    @media (max-width: 768px) {
        .kontak-container {
            flex-direction: column;
        }
        .kontak-container .kontak-info {
            padding: 1em;
        }
        .kontak-container .kontak-maps {
            padding: 1em;
        }
        .kontak-container .kontak-maps .gmap_canvas iframe {
            width: 100%;
            height: 450px;
        }
    }
</style>