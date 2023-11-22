<template>
    <section class="section">
      <div class="card">
        <div class="card-body">
          <div v-if="errors.length">
            <div class="alert alert-danger">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
          </div>
          <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="row">
              <div class="col-2">
                <label for="">Nama Pasien : </label>
              </div>
              <div class="col-10">
                <fieldset class="form-group">
                  <select class="form-select" v-model="selectedKunjunganId">
                    <option :value="resultLab.kunjungan_id">
                      (Kunjungan-{{ resultLab.kunjungan_id }}){{ resultLab.kunjungan.pasien.nama }}
                    </option>
                    <option v-for="kunjungan in kunjungans" :key="kunjungan.id" :value="kunjungan.id">
                      (Kunjungan-{{ kunjungan.id }}){{ kunjungan.pasien.nama }}
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
          <select class="form-select" v-model="selectedUserId">
            <option :value="resultLab.user.id">{{ resultLab.user.name }}</option>
            <option v-for="dokter in dokters" :key="dokter.id" :value="dokter.id">
              {{ dokter.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-2">
        <label for="">Status : </label>
      </div>
      <div class="col-10">
        <div class="form-group">
          <select class="form-select" v-model="selectedStatus">
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
          <!-- <input class="form-control" type="file" v-model="file" @change="handleFileChange" /> -->
        </div>
      </div>
      <div class="col-2">
        <label for="">Deskripsi : </label>
      </div>
      <div class="col-10">
        <div class="form-group">
          <textarea style="resize: none" class="form-control" v-model="description" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-primary" @click="submitForm">SIMPAN</button>
        </div>
      </div>
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
  export default {
    data() {
      return {
        resultLab: {}, 
        kunjungans: [], 
        selectedKunjunganId: null,
        errors: [],
      };
    },
    methods: {
      
      fetchData() {
        
      },
      submitForm() {
        
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  