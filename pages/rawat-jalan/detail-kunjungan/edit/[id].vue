<template>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="container">
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="form-group mb-3">
                  <h6 class="card-title" style="font-size: 18px; font-family: 'Montserrat', sans-serif;">Diagnosa<span style="color: red;"> *</span></h6>
                  <textarea v-model="diagnosa" class="form-control" rows="3"></textarea>
                </div>
                <p v-if="errors.diagnosa" class="text-danger">{{ errors.diagnosa[0] }}</p>
                <div class="form-group mb-3">
                  <h6 class="card-title" style="font-size: 18px; font-family: 'Montserrat', sans-serif;">Resep<span style="color: red;"> *</span></h6>
                  <textarea v-model="resep" class="form-control" rows="3"></textarea>
                </div>
                <p v-if="errors.resep" class="text-danger">{{ errors.resep[0] }}</p>
                <br>
                <p style="font-size: 14px; margin-top: 7px; font-weight: bold; color: red; font-family: 'Montserrat', sans-serif;">
                  <i>*tambahkan diagnosa dan resep sesuai kebutuhan pasien</i>
                </p>
                <div class="col-12 d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary me-1 mb-1 mt-5">
                    <i class="fa-regular fa-floppy-disk"></i> Simpan
                  </button>
                </div>
              </form>
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
        diagnosa: '',
        resep: '',
        errors: {},
      };
    },
    methods: {
      async submitForm() {
        try {
          
          this.diagnosa = '';
          this.resep = '';
        } catch (error) {
          
          this.errors = error.response.data.errors || {};
        }
      },
    },
  };
  </script>
  