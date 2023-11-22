<template>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title"></h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm" id="form">
          <div class="form-grpup">
            <label for="pasien">Daftar Pasien</label>
            <select v-model="selectedPasien" id="pasien" class="form-control">
              <option value="" selected disabled>-- Nama Pasien --</option>
              <option v-for="item in pasien" :key="item.id" :value="item.id">{{ item.nama }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="tanggal_kunjungan">Tanggal Kunjungan</label>
            <input v-model="tanggalKunjungan" type="date" id="tanggal_kunjungan" class="form-control">
          </div>
          <div class="form-group">
            <label for="keluhan">Keluhan</label>
            <textarea v-model="keluhan" id="keluhan" cols="30" rows="5" class="form-control"></textarea>
          </div>
  
          <button type="submit" class="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedPasien: null,
        tanggalKunjungan: null,
        keluhan: '',
        pasien: [], 
      };
    },
    methods: {
      submitForm() {
        
      },
    },
  };
  </script>
