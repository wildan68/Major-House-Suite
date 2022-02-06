<template>
    <div class="addrumah">
        <h3>Tambah Rumah</h3>
        <br>
        <form @submit.prevent="onAdd">
          <div class="group">
            <input type="text" name="type-rumah" @input="dataRumah.type_rumah = $event.target.value" required autocomplete="off">
            <span class="highlight"></span>
            <span class="bar"></span>
            <span class="icon"><i class="fi fi-sr-home-location"></i></span>
            <label>Type Rumah</label>
          </div>
          <div class="group">
            <input type="text" name="url-img" @input="dataRumah.url_img = $event.target.value" required autocomplete="off">
            <span class="highlight"></span>
            <span class="bar"></span>
            <span class="icon"><i class="fi fi-sr-picture"></i></span>
            <label>URL Gambar</label>
          </div>
          <div class="group">
            <input type="text" name="price" @input="dataRumah.price = $event.target.value" required autocomplete="off">
            <span class="highlight"></span>
            <span class="bar"></span>
            <span class="icon"><i class="fi fi-sr-label"></i></span>
            <label>Harga</label>
          </div>
          <div class="spec">
            <div class="group">
              <input type="number" name="bed" @input="dataRumah.bed= $event.target.value" required autocomplete="off" style="width: 80px">
              <span class="highlight" style="width: 80px"></span>
              <span class="bar" style="width: 80px"></span>
              <span class="icon"><img src="~/assets/img/svg/bed.svg" style="filter: saturate(10%)"/></span>
              <label>Kamar Tidur</label>
            </div>
            <div class="group">
              <input type="number" name="bath" @input="dataRumah.bath = $event.target.value" required autocomplete="off" style="width: 80px">
              <span class="highlight" style="width: 80px"></span>
              <span class="bar" style="width: 80px"></span>
              <span class="icon"><img src="~/assets/img/svg/bath.svg" style="filter: saturate(10%)"/></span>
              <label>Kamar Mandi</label>
            </div>
            <div class="group">
              <input type="text" name="bath" @input="dataRumah.land = $event.target.value" required autocomplete="off" style="width: 80px">
              <span class="highlight" style="width: 80px"></span>
              <span class="bar" style="width: 80px"></span>
              <span class="icon"><img src="~/assets/img/svg/floor.svg" style="filter: saturate(10%)"/></span>
              <label>Luas Tanah</label>
            </div>
          </div>
          <button class="btn btn-blue"><i class="fi fi-sr-plus"></i> Tambahkan</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'add_rumah',
        data() {
            return {
                dataRumah: {
                    type_rumah: null,
                    url_img: null,
                    price: null,
                    bed: null,
                    bath: null,
                    land: null,
                },
                callbackAdd: null,
            }
        },
        methods: {
            async onAdd() {
                await axios
                    .post(`${this.$conf.url_api}?func=add_rumah`, {
                        name: this.dataRumah.type_rumah,
                        url_img: this.dataRumah.url_img,
                        price: this.dataRumah.price,
                        bed: this.dataRumah.bed,
                        bath: this.dataRumah.bath,
                        land: this.dataRumah.land,
                    })
                    .then(response => {
                        this.callbackAdd = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        if (this.callbackAdd.status == 1) {
                            this.$toast.success("Berhasil menambahkan data")
                            this.$router.push('/admin?f=list_rumah')
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    .addrumah form .spec {
        display: flex;
        gap: 10px;
    }
    
    .addrumah .btn {
        padding: 1em;
        border-radius: 8px;
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
    .addrumah .btn.btn-blue {
        background-color: var(--blue);
        color: var(--white);
    }
    
    .addrumah .btn.btn-blue:hover {
        background-color: var(--blue-dark);
    }
    
    .addrumah .btn.btn-red-delete {
        background-color: var(--red);
        color: var(--white);
    }
    
    .addrumah .btn.btn-red-delete:hover {
        background-color: var(--red-dark);
    }
    
    .addrumah .btn.btn-close {
        position: absolute;
        right: 30px;
    }
    
    .addrumah .btn.btn-close:hover {
        background-color: var(--white-light);
    }
</style>