<template>
  <section class="section">
    <div class="card">
      <div class="card-body">
        <template v-if="loading == true"> Loading.. </template>

        <template v-else>
          <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="row">
              <div class="col-2">
                <label for="">Nama Pasien : </label>
              </div>
              <div class="col-10">
                <fieldset class="form-group">
                  <select class="form-select" v-model="dataForm.kunjungan_id">
                    <option :value="resultLab.kunjungan_id" selected>
                      (Kunjungan-{{ resultLab.kunjungan_id }})
                      {{ resultLab.pasien.nama }}
                    </option>
                    <option
                      v-for="kunjungan in kunjungans"
                      :key="kunjungan.id"
                      :value="kunjungan.id"
                    >
                      (Kunjungan-{{ kunjungan.id }}) {{ resultLab.pasien.nama }}
                    </option>
                  </select>
                </fieldset>
              </div>
              <div class="row">
                <div class="col-2">
                  <label for="">Dokter : </label>
                </div>
                <div class="col-10">
                  <div class="form-group">
                    <select class="form-select" v-model="dataForm.user_id">
                      <option :value="resultLab.user.id">
                        {{ resultLab.user.name }}
                      </option>
                      <option
                        v-for="dokter in dokters"
                        :key="dokter.id"
                        :value="dokter.id"
                      >
                        {{ dokter.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <label for="">Lab : </label>
                  </div>
                  <div class="col-10">
                    <div class="form-group">
                      <select class="form-select" v-model="dataForm.lab_id">
                        <option :value="resultLab.lab_id">
                          {{ resultLab.lab.name }}
                        </option>
                        <option
                          v-for="lab in labs"
                          :key="lab.id"
                          :value="lab.id"
                        >
                          {{ lab.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <label for="">Status : </label>
                </div>
                <div class="col-10">
                  <div class="form-group">
                    <select class="form-select" v-model="dataForm.status">
                      <option value="proses">Proses</option>
                      <option value="success">Success</option>
                    </select>
                  </div>
                </div>
                <div class="col-2">
                  <label for="">Hasil : </label>
                </div>
                <div class="col-10">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="file"
                      @change="handleFileUpload"
                    />
                  </div>
                </div>
                <div class="col-2">
                  <label for="">Deskripsi : </label>
                </div>
                <div class="col-10">
                  <div class="form-group">
                    <textarea
                      style="resize: none"
                      class="form-control"
                      v-model="dataForm.description"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex justify-content-end">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="submitForm"
                    >
                      SIMPAN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios"
import Swal from "sweetalert2"
export default {
  data() {
    return {
      dataForm: {
        kunjungan_id: null,
        user_id: null,
        hasil_lab: {},
        status: null,
        lab_id: null,
        description: null,
      },
      resultLab: {},
      kunjungans: [],
      errors: [],
      dokters: [],
      labs: [],
      loading: true,
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          `http://103.101.224.67:8083/resultslab/${useRoute().params.id}`
        )
        this.resultLab = response.data.data
        this.dataForm.kunjungan_id = this.resultLab.kunjungan_id
        this.dataForm.user_id = this.resultLab.user_id
        this.dataForm.status = this.resultLab.status
        this.dataForm.lab_id = this.resultLab.lab_id
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async getDokters() {
      try {
        const response = await axios.get("http://103.101.224.67:8083/dokters")
        this.dokters = response.data.data
      } catch (error) {
        console.log(error)
      }
    },
    async getDataKunjungan() {
      const response = await axios.get(
        "http://103.101.224.67:8081/api/v1/kunjungan/"
      )
      this.kunjungans = response.data.data
    },
    async getDataLab() {
      try {
        const response = await axios.get("http://103.101.224.67:8083/labs")
        this.labs = response.data.data
      } catch (error) {
        console.error(error)
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      this.dataForm.hasil_lab = file
    },
    async submitForm() {
      try {
        let data = new FormData()
        data.append("kunjungan_id", this.dataForm.kunjungan_id)
        data.append("user_id", this.dataForm.user_id)
        data.append("hasil_lab", this.dataForm.hasil_lab)
        data.append("status", this.dataForm.status)
        data.append("lab_id", this.dataForm.lab_id)
        data.append("description", this.dataForm.description)

        const response = await axios.post(
          `http://103.101.224.67:8083/resultslab/${useRoute().params.id}`,
          this.dataForm,
          {
            "Content-Type": "multipart/form-data",
            transformRequest: (formData) => data,
          }
        )

        if (response.status == 200) {
          Swal.fire({
            title: "Berhasil!",
            text: "Data berhasil di update!",
            icon: "success",
          })

          this.$router.push("/lab-radiologi/result-lab")
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
  beforeMount() {
    this.fetchData()
    this.getDataKunjungan()
    this.getDokters()
    this.getDataLab()
  },
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
