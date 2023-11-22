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
            <div v-if="success" class="alert alert-success m-3">
              {{ success }}
            </div>
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
                  <tr v-for="lab in labs" :key="lab.id">
                    <td class="text-center">{{ lab.code_lab }}</td>
                    <td class="text-center">{{ lab.name }}</td>
                    <td>{{ lab.description }}</td>
                    <td class="text-center">{{ lab.price }}</td>
                    <td>
                      <div class="d-flex justify-content-center gap-2">
                        <nuxt-link :to="`/lab/edit/${lab.id}`" class="btn btn-info rounded text-white" style="outline: none">
                          <i class="bi bi-eye-fill"></i>
                        </nuxt-link>
                        <button @click="showDeleteModal(lab.id)" class="btn btn-danger rounded text-white" style="outline: none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="labs.length === 0">
                    <td colspan="5">
                      <p class="text-center my-5">Belum ada lab yang terdaftar</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
  
      <!-- Delete Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Hapus Data Lab</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Apakah anda yakin ingin menghapus data ini?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button @click="deleteLab" type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        labs: [], 
        success: null,
        labToDelete: null,
      };
    },
    methods: {
      showDeleteModal(id) {
        this.labToDelete = id;
      },
      deleteLab() {
        
        this.labToDelete = null;
       
        $('#exampleModal').modal('hide');
      },
    },
   
  };
  </script>
  