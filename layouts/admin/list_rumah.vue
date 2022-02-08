<template>
  <div class="listrumah">
    <h3>Menampilkan Data Semua Rumah</h3>
    <br>
    <div v-if="dataRumah != null">
      Total data <b>{{ dataRumah.data.length }}</b>
        <div class="data-container">
          <table>
            <tr>
              <th id="no">No</th>
              <th id="type">Type Rumah <i class="fi fi-rs-apps-sort" :id="orderByName ? 'active' : 0"
                  @click.prevent="onOrder" title="Urutkan berdasar abjad"></i></th>
              <th id="price">Harga Rumah</th>
              <th id="spec">Kamar Tidur</th>
              <th id="spec">Kamar Mandi</th>
              <th id="spec">Luas Tanah</th>
              <th>Aksi</th>
            </tr>
            <tr v-for="(data, index) in orderBy(dataRumah.data, sortByName).slice(($route.query.p * 5) - 5, ($route.query.p * 5))" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ data.name }}</td>
              <td>Rp {{ data.price }}</td>
              <td>{{ data.bed }} Kamar Tidur</td>
              <td>{{ data.bath }} Kamar Mandi</td>
              <td>Lt {{ data.land }}</td>
              <td id="aksi">
                <button @click.prevent="onEdit(data.id)" class="btn btn-blue"><i class="fi fi-sr-edit"></i></button>
                <button @click.prevent="$toast.info('Coming Soon ya ges ya, aing cape mikir')"
                  class="btn btn-red-delete"><i class="fi fi-sr-trash"></i></button>
              </td>
            </tr>
          </table>
      </div>
      <div class="pagging">
          <button class="pagging-list" v-for="index in parseInt(dataRumah.data.length / 4)" :key="index" :id="$route.query.p == index ? 'active' : 0" @click.prevent="$router.push(`/admin?f=list_rumah&p=${index}`)">
              {{ index }}
          </button>
      </div>
    </div>
    <!-- Modal Data -->
    <modal v-if="modal && modalData != null">
      <div v-for="(data, index) in modalData.data" :key="index">
        <button class="btn btn-close" @click.prevent="onClose">
          <i class="fi fi-ss-cross"></i>
        </button>
        <h3>Edit Data</h3>
        <br>
        <form @submit.prevent="onSave">
          <div class="group">
            <input type="text" name="type-rumah" :value="data.name" @input="data.name = $event.target.value" required
              autocomplete="off">
            <span class="highlight"></span>
            <span class="bar"></span>
            <span class="icon"><i class="fi fi-sr-home-location"></i></span>
            <label>Type Rumah</label>
          </div>
          <div class="group">
            <input type="text" name="url-image" :value="data.url_img" @input="data.url_img = $event.target.value"
              required autocomplete="off">
            <span class="highlight"></span>
            <span class="bar"></span>
            <span class="icon"><i class="fi fi-sr-picture"></i></span>
            <label>URL Gambar</label>
          </div>
          <div class="group">
            <input type="text" name="price" :value="data.price" @input="data.price = $event.target.value" required
              autocomplete="off">
            <span class="highlight"></span>
            <span class="bar"></span>
            <span class="icon"><i class="fi fi-sr-label"></i></span>
            <label>Harga</label>
          </div>
          <div class="spec">
            <div class="group">
              <input type="number" name="bed" :value="data.bed" @input="data.bed = $event.target.value" required
                autocomplete="off" style="width: 80px">
              <span class="highlight" style="width: 80px"></span>
              <span class="bar" style="width: 80px"></span>
              <span class="icon"><img src="~/assets/img/svg/bed.svg" style="filter: saturate(10%)" /></span>
              <label>Kamar Tidur</label>
            </div>
            <div class="group">
              <input type="number" name="bath" :value="data.bath" @input="data.bath = $event.target.value" required
                autocomplete="off" style="width: 80px">
              <span class="highlight" style="width: 80px"></span>
              <span class="bar" style="width: 80px"></span>
              <span class="icon"><img src="~/assets/img/svg/bath.svg" style="filter: saturate(10%)" /></span>
              <label>Kamar Mandi</label>
            </div>
            <div class="group">
              <input type="text" name="bath" :value="data.land" @input="data.land = $event.target.value" required
                autocomplete="off" style="width: 80px">
              <span class="highlight" style="width: 80px"></span>
              <span class="bar" style="width: 80px"></span>
              <span class="icon"><img src="~/assets/img/svg/floor.svg" style="filter: saturate(10%)" /></span>
              <label>Luas Tanah</label>
            </div>
          </div>
          <button class="btn btn-blue"><i class="fi fi-sr-disk"></i> Simpan</button>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
    import Vue2Filters from 'vue2-filters'
    import axios from 'axios'
    import Button from '@/components/button'
    import Modal from '@/components/modal'

    export default {
        name: 'list_rumah',
        data() {
            return {
                dataRumah: null,
                modal: false,
                modalData: null,
                modalCallBack: null,
                orderByName: false,
            }
        },
        mixins: [Vue2Filters.mixin],
        components: {
            Button,
            Modal,
        },
        computed: {
            sortByName: function() {
                if (this.orderByName) {
                    return 'name'
                } else {
                    return ''
                }
            }
        },
        methods: {
            async getDataRumah() {
                await axios
                    .post(`${this.$conf.url_api}?func=list_rumah`)
                    .then(response => {
                        this.dataRumah = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        /*if (this.dataRumah.status == 1) {
                            this.$toast.info("Berhasil Meload Data")
                        }*/
                    })
            },
            async onEdit(id) {
                this.modal = true;
                await axios
                    .post(`${this.$conf.url_api}?func=get_rumah`, {
                        id
                    })
                    .then(response => {
                        this.modalData = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        if (this.dataRumah.status == 0) {
                            this.$toast.error("Gagal mengambil data")
                        }
                    })
            },
            async onClose() {
                this.modalData = null
                this.getDataRumah()
            },
            async onSave() {
                await axios
                    .post(`${this.$conf.url_api}?func=edit_rumah`, {
                        id: this.modalData.data[0].id,
                        name: this.modalData.data[0].name,
                        url_img: this.modalData.data[0].url_img,
                        price: this.modalData.data[0].price,
                        bed: this.modalData.data[0].bed,
                        bath: this.modalData.data[0].bath,
                        land: this.modalData.data[0].land,
                    })
                    .then(response => {
                        this.modalCallBack = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        if (this.modalCallBack.status == 1) {
                            this.$toast.success("Berhasil mengupdate data")
                        }
                        this.onClose()
                    })
            },
            onOrder() {
                if (this.orderByName) {
                    return this.orderByName = false
                } else {
                    return this.orderByName = true
                }
            }
        },
        async mounted() {
            this.getDataRumah()
            if (this.$route.query.p == null) {
                this.$router.push('/admin?f=list_rumah&p=1')
            }
        }
    }
</script>

<style scoped>
    .listrumah {
        position: relative;
        background-color: var(--white);
        padding: 2em;
        border-radius: 22px;
    }
    
    .listrumah table {
        width: 100%;
    }
    
    .listrumah table th {
        background-color: var(--blue);
        color: var(--white);
        padding: 1em 5em 1em 0.5em;
        text-align: left;
        position: relative;
    }
    
    .listrumah table th#no {
        padding: 1em;
    }
    
    .listrumah table th#type {
        padding: 1em 7em 1em 0.5em;
        display: grid;
        align-items: center;
    }
    
    .listrumah table th#type i {
        padding: 0.5em;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.5s ease;
    }
    
    .listrumah table th#type i:hover,
    i#active {
        background-color: var(--blue-dark);
    }
    
    .listrumah table th#price {
        padding: 1em 2em 1em 0.5em;
    }
    
    .listrumah table th#spec {
        padding: 1em 2em 1em 0.5em;
    }
    
    .listrumah table td {
        padding: 0.5em;
        font-size: 12px;
    }
    
    .listrumah table tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    
    .listrumah table tr:hover {
        background-color: #ddd;
    }
    
    .listrumah table th i {
        position: absolute;
        right: 10px;
    }
    
    .listrumah table td#aksi {
        display: flex;
        gap: 10px;
    }
    
    .listrumah .spec {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    .listrumah .btn {
        padding: 1em;
        border-radius: 8px;
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
    .listrumah .btn.btn-blue {
        background-color: var(--blue);
        color: var(--white);
    }
    
    .listrumah .btn.btn-blue:hover {
        background-color: var(--blue-dark);
    }
    
    .listrumah .btn.btn-red-delete {
        background-color: var(--red);
        color: var(--white);
    }
    
    .listrumah .btn.btn-red-delete:hover {
        background-color: var(--red-dark);
    }
    
    .listrumah .btn.btn-close {
        position: absolute;
        right: 30px;
    }
    
    .listrumah .btn.btn-close:hover {
        background-color: var(--white-light);
    }
    
    .listrumah .pagging {
        margin-top: 20px;
        display: flex;
        gap: 10px;
    }
    
    .listrumah .pagging-list {
        padding: 1em 1.5em 1em 1.5em;
        background-color: var(--gray);
        font-weight: 600;
    }
    .listrumah .pagging-list#active {
        background-color: var(--blue);
        color: var(--white);
    }
    @media (max-width: 768px) {
        .listrumah .data-container {
            overflow-x: scroll;
            width: 340px;
        }
        .listrumah table {
            width: 1000px;
        }
    }
</style>