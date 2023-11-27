<template>
  <section class="section">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div v-if="errors.length" class="alert alert-danger">
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </div>
          <form @submit.prevent="submitForm">
            <div class="col-2 mb-2">
              <label for="id">Id Lab : </label>
            </div>
            <div class="col-10 mb-2">
              <input
                type="text"
                class="form-control"
                id="id"
                name="code_lab"
                placeholder="Masukkan ID Lab"
                v-model="labData.code_lab"
                required
              />
            </div>
            <div class="col-2 mb-2">
              <label for="name">Nama Lab : </label>
            </div>
            <div class="col-10 mb-2">
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Masukkan Nama Lab"
                v-model="labData.name"
                required
              />
            </div>
            <div class="col-2 mb-2">
              <label for="description">Deskripsi : </label>
            </div>
            <div class="col-10 mb-2">
              <textarea
                class="form-control"
                id="description"
                name="description"
                rows="3"
                v-model="labData.description"
                required
              ></textarea>
            </div>
            <div class="col-2 mb-2">
              <label for="price">Harga : </label>
            </div>
            <div class="col-10 mb-2">
              <input
                type="text"
                class="form-control"
                name="price"
                id="basicInput"
                placeholder="Masukkan Biaya"
                v-model="labData.price"
                required
              />
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary" name="submit">
                SIMPAN
              </button>
            </div>
          </form>
        </div>
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
      labData: {
        code_lab: "",
        name: "",
        description: "",
        price: "",
      },
      errors: [],
    }
  },

  beforeMount() {
    this.getLab()
  },
  methods: {
    async getLab() {
      try {
        const response = await axios.get(
          "http://103.101.224.67:8083/labs/" + useRoute().params.id
        )
        this.labData = response.data.data
      } catch (error) {
        console.error("Error fetching lab data:", error)
      }
    },
    async submitForm() {
      try {
        const response = await axios.post(
          "http://103.101.224.67:8083/labs",
          this.labData
        )
        console.log(response)
        if (response.status == 200) {
          Swal.fire({
            title: "Berhasil!",
            text: "Data lab berhasil di tambahkan!",
            icon: "success",
          })

          this.$router.push("/lab-radiologi/lab")
        }
      } catch (error) {
        console.error("Failed to submit form" + error.message)
      }
    },
  },
}
</script>
