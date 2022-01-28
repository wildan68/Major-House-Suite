<template>
  <div>
    <div class="newest" v-for="(d, i) in items" :key="i">
      <div class="newest-items">
        <h5>Tempat</h5>
        <h3>{{ d.tempat }}</h3>
      </div>
      <div class="newest-items">
        <h5>Type Rumah</h5>
        <h3>{{ d.type }}</h3>
      </div>
      <div class="newest-items">
        <h5>Perkiraan Harga</h5>
        <h3>{{ d.harga }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'newest',
        props: {
            items: Array,
        }
    }
</script>

<style scoped>
    .newest {
        height: 8em;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 0 22px 22px 22px;
        backdrop-filter: blur(10px);
        box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
        -webkit-box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
        -moz-box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.24);
        padding: 0 4em 0 4em;
        display: flex;
        align-items: flex-start;
    }
    
    .newest .newest-items {
        flex: 1;
        transition: all 0.5s ease;
        padding: 0 0.5em 0 0.5em;
    }
    
    .newest .newest-items h3 {
        word-break: keep-all;
        word-wrap: normal;
    }
    
    .newest .newest-items h5 {
        font-weight: 400;
    }
    
    @media (max-width: 768px) {
        .newest {
            padding: 0;
            margin-bottom: 20px;
            padding: 0 0.5em 0 0.5em;
        }
        .newest .newest-items h3 {
            font-size: 14px;
        }
    }
</style>