<template>
  <section class="section">
    <div class="card">
      <div class="card-body">
        <div v-if="errors.length" class="alert alert-danger">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>

        <form @submit.prevent="submitForm">
          <div class="row">
            <div class="col-2">
              <label for="">Nama Pasien : </label>
            </div>
            <div class="col-10">
              <fieldset class="form-group">
                <select
                  class="form-select"
                  id="basicSelect"
                  name="kunjungan_id"
                  v-model="formData.kunjungan_id"
                >
                  <option value="">Select pasien</option>
                  <option
                    v-for="kunjungan in kunjungans"
                    :value="kunjungan.id"
                    :key="kunjungan.id"
                  >
                    (Kunjungan-{{ kunjungan.id }}) - {{ kunjungan.pasien.nama }}
                  </option>
                </select>
              </fieldset>
            </div>
            <div class="col-2">
              <label for="">Lab : </label>
            </div>
            <div class="col-10">
              <fieldset class="form-group">
                <select
                  class="form-select"
                  id="basicSelect"
                  name="lab_id"
                  v-model="formData.lab_id"
                >
                  <option value="">Select LAB</option>
                  <option v-for="lab in labs" :value="lab.id" :key="lab.id">
                    {{ lab.name }}
                  </option>
                </select>
              </fieldset>
            </div>
            <div class="col-2">
              <label for="">Dokter : </label>
            </div>
            <div class="col-10">
              <fieldset class="form-group">
                <select
                  class="form-select"
                  id="basicSelect"
                  name="user_id"
                  v-model="formData.user_id"
                >
                  <option value="">Select Dokter</option>
                  <option
                    v-for="doctor in dokters"
                    :value="doctor.id"
                    :key="doctor.id"
                  >
                    {{ doctor.name }} ({{ doctor.no_pegawai }})
                  </option>
                </select>
              </fieldset>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">SIMPAN</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      formData: {
        kunjungan_id: "",
        lab_id: "",
        user_id: "",
      },
      errors: [],
      kunjungans: [],
      labs: [],
      dokters: [],
    }
  },
  beforeMount() {
    // this.getDataKunjungan()
    this.getDataKunjungan()
  },
  methods: {
    async submitForm() {},
    async getDataKunjungan() {
      const response = await axios.get(
        "http://103.101.224.67:8081/api/v1/kunjungan/"
      )
      console.log(response.data.data)
    },
    async getDataLab() {
      try {
        const response = await axios.get("http://localhost:8000/labs")
        this.labs = response.data.data
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
