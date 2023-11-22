<template>
    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <h5 class="card-title">Biodata Pasien</h5>
          <p class="card-text">
            Riwayat kunjungan dan informasi rekam medis pasien
          </p>
        </div>
      </div>
      <div>
        <div class="container list">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="label">Nama </span>: {{ pasienData.nama }}</li>
            <li class="list-group-item"><span class="label">Alamat </span>: {{ pasienData.alamat }}</li>
            <li class="list-group-item"><span class="label">Tanggal kunjungan </span>: {{ pasienData.tanggal_kunjungan }}</li>
            <li class="list-group-item"><span class="label">Tanggal Lahir </span>: {{pasienData.tanggal_lahir }}</li>
            <li class="list-group-item"><span class="label">No. KTP </span>: {{ pasienData.no_ktp }}</li>
            <li class="list-group-item"><span class="label">No. BPJS </span>: {{ pasienData.no_bpjs }}</li>
            <li class="list-group-item"><span class="label">Jumlah Kunjungan </span>: {{ jumlahKunjungan }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page-heading">
      <section class="section">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">
              Data Riwayat Medis
            </h5>
          </div>
          <div class="card-body">
            <table class="table table-striped" id="table1">
              <thead>
                <tr>
                  <th>Tanggal Kunjungan</th>
                  <th>Tujuan Kunjungan</th>
                  <th>Keluhan</th>
                  <th>Resep Obat</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in kunjungan" :key="index">
                  <td>{{ item.kunjungan.tanggal_kunjungan }}</td>
                  <td>{{ getTujuanKunjungan(item) }}</td>
                  <td>{{ item.kunjungan.keluhan }}</td>
                  <td>{{ item.diagnosa }}</td>
                  <td>{{ item.resep }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pasienData: {}, 
        jumlahKunjungan: 0, 
        kunjungan: [], 
      };
    },
    methods: {
      
      getTujuanKunjungan(item) {
        
      },
    },
  };
  </script>
 
  