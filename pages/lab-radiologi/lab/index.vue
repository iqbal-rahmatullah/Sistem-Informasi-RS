<template>
  <div>
    <div class="page-heading">
      <nuxt-link to="./lab/create" class="btn btn-primary">
        <i class="bi bi-plus"></i>Tambah Data Lab
      </nuxt-link>
    </div>
    <div class="page-content">
      <section class="section">
        <div class="card">
          <div class="card-body">
            <table class="table" id="tableLab">
              <thead>
                <tr>
                  <th class="text-center">ID Lab</th>
                  <th class="text-center">Nama Lab</th>
                  <th class="text-center">Deskripsi</th>
                  <th class="text-center">Biaya</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="labs.length > 0">
                  <tr v-for="lab in labs" :key="lab.id">
                    <td class="text-center">{{ lab.code_lab }}</td>
                    <td class="text-center">{{ lab.name }}</td>
                    <td>{{ lab.description }}</td>
                    <td class="text-center">{{ lab.price }}</td>
                    <td>
                      <div class="d-flex justify-content-center gap-2">
                        <nuxt-link
                          :to="`/lab-radiologi/lab/edit/${lab.id}`"
                          class="btn btn-info rounded text-white"
                          style="outline: none"
                        >
                          <i class="bi bi-pencil-fill"></i>
                        </nuxt-link>
                        <button
                          @click="showDeleteModal(lab.id)"
                          class="btn btn-danger rounded text-white"
                          style="outline: none"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td></tr
                ></template>
                <template v-else
                  ><tr>
                    <td colspan="5">
                      <p class="text-center my-5">
                        Belum ada lab yang terdaftar
                      </p>
                    </td>
                  </tr></template
                >
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
import Swal from "sweetalert2"

export default {
  data() {
    return {
      labs: [],
    }
  },
  beforeMount() {
    this.getLab()
  },
  methods: {
    async getLab() {
      try {
        const response = await axios.get("http://103.101.224.67:8083/labs")
        this.labs = response.data.data
      } catch (error) {
        console.error("Error fetching lab data:", error)
      }
    },
    showDeleteModal(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "Data akan dihapus selamanya!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.delete(
              "http://103.101.224.67:8083/labs/" + id
            )

            if (response.status == 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Data lab berhasil di hapus.",
                icon: "success",
              })

              this.getLab()
            }
          } catch (error) {
            console.error("Failed to delete" + error.message)
          }
        }
      })
    },
  },
}
</script>
