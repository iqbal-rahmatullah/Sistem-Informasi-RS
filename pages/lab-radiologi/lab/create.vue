<template>
    <section class="section">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div v-if="errors.length > 0" class="alert alert-danger">
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>
            <form @submit.prevent="submitForm">
              <div class="col-2 mb-2">
                <label for="id">Id Lab :</label>
              </div>
              <div class="col-10 mb-2">
                <input v-model="formData.code_lab" type="text" class="form-control" id="id" name="code_lab" placeholder="Masukkan ID Lab" required>
              </div>
              <div class="col-2 mb-2">
                <label for="name">Nama Lab :</label>
              </div>
              <div class="col-10 mb-2">
                <input v-model="formData.name" type="text" class="form-control" id="name" name="name" placeholder="Masukkan Nama Lab" required>
              </div>
              <div class="col-2 mb-2">
                <label for="description">Deskripsi :</label>
              </div>
              <div class="col-10 mb-2">
                <textarea v-model="formData.description" class="form-control" id="description" name="description" rows="3" required></textarea>
              </div>
              <div class="col-2 mb-2">
                <label for="price">Harga :</label>
              </div>
              <div class="col-10 mb-2">
                <input v-model="formData.price" type="text" class="form-control" id="price" name="price" placeholder="Masukkan Biaya" required>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary" name="submit">SIMPAN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          code_lab: '',
          name: '',
          description: '',
          price: '',
        },
        errors: [],
      };
    },
    methods: {
      submitForm() {
        
        this.errors = [];
  
        
  
        
        if (this.errors.length === 0) {
          
        }
      },
    },
  };
  </script>