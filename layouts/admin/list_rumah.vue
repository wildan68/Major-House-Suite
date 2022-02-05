<template>
    <div class="listrumah">
        <h3>Menampilkan Data Semua Rumah</h3>
        <br>
        <div class="data-container" v-if="dataRumah != null">
            <table>
                <tr>
                    <th>Nama Rumah</th>
                    <th>Harga Rumah</th>
                </tr>
                <tr v-for="(data, index) in dataRumah.data" :key="index">
                    <td>{{ data.name }}</td>
                    <td>{{ data.price }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'list_rumah',
        data() {
            return {
                dataRumah: null
            }
        },
        async mounted() {
            await axios
                .post(`${this.$conf.url_api}?func=list_rumah`)
                .then(response => {
                    this.dataRumah = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    if (this.dataRumah.status == 1) {
                        this.$toast.info("Berhasil Meload Data")
                    }
                })
        }
    }
</script>

<style scoped>
    .listrumah table {
        width: 100%;
        border: 1px solid var(--black);
    }
</style>