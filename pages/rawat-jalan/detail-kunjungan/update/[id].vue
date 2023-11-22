<template>
    <section id="basic-vertical-layouts">
      <div class="row match-height">
        <div class="col-12">
          <div class="card">
            <div class="container">
              <div class="card-content">
                <div class="card-body">
                  <form @submit.prevent="submitForm" class="form form-vertical">
                    <div class="form-body">
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group mb-3">
                            <h6 class="card-title" style="font-size: 18px; font-family: 'Montserrat', sans-serif;">
                              {{ detailkunjungan.user.roles === 'dokter' ? 'Dokter' : 'Perawat' }}
                            </h6>
                            <select v-model="selectedUserId" class="form-select" name="user_id">
                              <option v-for="dokter in dokters" :key="dokter.id" :value="dokter.id">
                                000{{ dokter.id }} {{ dokter.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <!-- Lanjutin Mager :> -->
  
                        <div class="col-12">
                          <div class="form-group mb-3">
                            <h6 class="card-title" style="font-size: 18px; font-family: 'Montserrat', sans-serif;">
                              Diagnosa
                            </h6>
                            <input v-model="diagnosa" type="text" class="form-control" placeholder="Diagnosa">
                          </div>
                        </div>
                        <div class="form-group mb-3">
                          <h6 class="card-title" style="font-size: 18px; font-family: 'Montserrat', sans-serif;">Resep
                          </h6>
                          <input v-model="resep" type="text" class="form-control" placeholder="Resep">
                        </div>
  
                        <div class="form-group mb-3">
                          <h6 class="card-title" style="font-size: 18px; font-family: 'Montserrat', sans-serif;">Poli
                          </h6>
                          <select v-model="selectedPoliId" class="form-select" name="poli_id">
                            <option v-for="poli in polis" :key="poli.id" :value="poli.id">{{ poli.name_poli }}</option>
                          </select>
                        </div>
  
                        <!-- Lanjutin :> mager -->
  
                        <br><br>
                        <p style="font-size: 14px; margin-top: 7px; font-weight: bold; color: red;">
                          <i>*perbarui data yang dibutuhkan</i>
                        </p>
                        <div class="col-12 d-flex justify-content-end">
                          <nuxt-link to="/rawat-jalan/detail-kunjungan" class="btn btn-light-secondary me-3 mb-1 mt-4">Back
                          </nuxt-link>
                          <button type="submit" class="btn btn-primary me-3 mb-1 mt-4">
                            <i class="fa-regular fa-floppy-disk"></i> Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedUserId: null,
        diagnosa: '',
        resep: '',
        selectedPoliId: null,
        detailkunjungan: 
                {
            id: 1,
            user: {
                id: 1,
                roles: 'dokter',
            },
            diagnosa: 'Some diagnosis',
            resep: 'Some prescription',
            poli_id: 1, 
            
            },
        
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic
        console.log('Form submitted:', {
          selectedUserId: this.selectedUserId,
          diagnosa: this.diagnosa,
          resep: this.resep,
          selectedPoliId: this.selectedPoliId,
          
        });
      },
    },
    
  };
  </script>
  