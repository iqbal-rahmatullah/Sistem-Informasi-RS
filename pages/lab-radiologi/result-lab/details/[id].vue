<template>
  <div>
    <section class="section">
      <div class="card">
        <template v-if="!loading">
          <div class="card-body">
            <div class="row">
              <dl class="row">
                <dt class="col-sm-3">Nama</dt>
                <dd class="col-sm-9">
                  : <b> {{ resultLab.pasien.nama }}</b>
                </dd>

                <dt class="col-sm-3">Jenis Kelamin</dt>
                <dd class="col-sm-9">
                  :
                  {{
                    resultLab.pasien.jenis_kelamin === "L"
                      ? "Laki-laki"
                      : "Perempuan"
                  }}
                </dd>

                <dt class="col-sm-3">Tanggal Lahir</dt>
                <dd class="col-sm-9">: {{ resultLab.pasien.tanggal_lahir }}</dd>
                <dt class="col-sm-3">No. Telepon</dt>
                <dd class="col-sm-9">: {{ resultLab.pasien.no_hp }}</dd>

                <dt class="col-sm-3">Alamat</dt>
                <dd class="col-sm-9">: {{ resultLab.pasien.alamat }}</dd>

                <dt class="col-sm-3">No. KTP</dt>
                <dd class="col-sm-9">: {{ resultLab.pasien.no_ktp }}</dd>

                <dt class="col-sm-3">No. BPJS</dt>
                <dd class="col-sm-9" v-if="resultLab.pasien.no_bpjs != null">
                  : {{ resultLab.pasien.no_bpjs }}
                </dd>
                <dd class="col-sm-9" v-else>: Tidak memiliki BPJS</dd>
                <dt class="col-sm-3">Harga Yang Harus Dibayar</dt>
                <dd class="col-sm-9">: {{ resultLab.lab.price }}</dd>
              </dl>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="card-body">Loading..</div>
        </template>
      </div>
    </section>

    <div class="page-heading">
      <section class="section">
        <div class="card">
          <div class="card-body">
            <table class="table" id="tablePasien">
              <thead>
                <tr>
                  <th class="text-center">No</th>
                  <th class="text-center">Tanggal</th>
                  <th class="text-center">Nama Lab</th>
                  <th class="text-center">Hasil Lab</th>
                  <th class="text-center">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!loading">
                  <td class="text-center">1</td>
                  <td class="text-center">
                    {{ formatCreatedAt(resultLab.created_at) }}
                  </td>
                  <td class="text-center">{{ resultLab.lab.name }}</td>
                  <td class="text-center">
                    <a
                      v-if="resultLab.status === 'success'"
                      :href="`http://103.101.224.67:8083/result-lab/${resultLab.hasil_lab}`"
                      target="_blank"
                      class="btn btn-light"
                    >
                      <i class="bi bi-download"></i>
                    </a>
                    <button v-else class="btn btn-light" disabled>
                      <i class="bi bi-x-circle"></i>
                    </button>
                  </td>
                  <td class="text-center">
                    {{ resultLab.description }}
                  </td>
                </tr>
                <tr v-else>
                  Loading...
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { format } from "date-fns"

export default {
  data() {
    return {
      resultLab: {},
      loading: true,
    }
  },
  beforeMount() {
    this.getDataResultLab()
  },
  methods: {
    async getDataResultLab() {
      try {
        const response = await axios.get(
          "http://103.101.224.67:8083/resultslab/" + useRoute().params.id
        )
        this.resultLab = response.data.data
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    formatCreatedAt(date) {
      return format(new Date(date), "d MMM yyyy")
    },
  },
}
</script>
