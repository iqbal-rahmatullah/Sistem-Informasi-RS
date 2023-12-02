<template>
  <div>
    <div class="mb-2">
      <NuxtLink to="./result-lab/create" class="btn btn-primary">
        <i class="bi bi-plus"></i>Tambah Data Pasien
      </NuxtLink>
    </div>

    <div class="page-heading">
      <div class="page-title">
        <div class="row">
          <div class="col-12 col-md-6 order-md-2 order-first">
            <nav
              aria-label="breadcrumb"
              class="breadcrumb-header float-start float-lg-end"
            >
              <ol class="breadcrumb"></ol>
            </nav>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="card">
          <div class="card-body">
            <table class="table" id="tablePasien">
              <thead>
                <tr>
                  <th class="text-center">Result ID</th>
                  <th class="text-center">Nama Pasien</th>
                  <th class="text-center">Nama Lab</th>
                  <th class="text-center">Dokter</th>
                  <th class="text-center">Status</th>
                  <th class="text-center">Hasil Lab</th>
                  <th class="text-center">Tanggal</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="resultLabs.length === 0">
                  <td class="text-center" colspan="8">Belum ada data</td>
                </tr>
                <template v-else>
                  <tr v-for="result in resultLabs" :key="result.id">
                    <td class="text-center">{{ result.id }}</td>
                    <td class="text-center">
                      {{ result.pasien.nama }}
                    </td>
                    <td class="text-center">{{ result.lab.name }}</td>
                    <td class="text-center">{{ result.user.name }}</td>
                    <td class="text-center">
                      <span
                        v-if="result.status === 'success'"
                        class="badge bg-success"
                        >Success</span
                      >
                      <span
                        v-else-if="result.status === 'proses' || !result.status"
                        class="badge bg-warning"
                        >Proses</span
                      >
                    </td>
                    <td class="text-center">
                      <a
                        v-if="result.status === 'success'"
                        :href="`http://103.101.224.67:8083/result-lab/${result.hasil_lab}`"
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
                      {{ new Date(result.created_at).toLocaleDateString() }}
                    </td>
                    <td>
                      <div class="d-flex justify-content-center gap-2">
                        <NuxtLink
                          :to="`/lab-radiologi/result-lab/edit/${result.id}`"
                          class="btn btn-info rounded text-white"
                          style="outline: none"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </NuxtLink>
                        <button
                          class="btn btn-danger rounded"
                          style="outline: none"
                          @click="showDeleteModal(result.id)"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                        <NuxtLink
                          :to="`/lab-radiologi/result-lab/details/${result.id}`"
                          class="btn btn-primary rounded text-white"
                          style="outline: none"
                        >
                          <i class="bi bi-eye-fill"></i>
                        </NuxtLink>
                      </div>
                    </td>
                  </tr>
                </template>
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
      resultLabs: [],
    }
  },
  beforeMount() {
    this.getResulLab()
  },
  methods: {
    confirmDelete(resultId) {
      if (confirm("Apakah anda yakin ingin menghapus data ini?")) {
      }
    },
    async getResulLab() {
      try {
        const response = await axios.get(
          "http://103.101.224.67:8083/resultslab"
        )
        // console.log(response.data.data)
        this.resultLabs = response.data.data
      } catch (error) {
        console.error("Error fetching result lab data:", error)
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
              "http://103.101.224.67:8083/resultslab/" + id
            )

            if (response.status == 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Data lab berhasil di hapus.",
                icon: "success",
              })

              this.getResulLab()
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
