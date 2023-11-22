<template>
    <div class="page-heading">
      <section class="section">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">
              Data Kunjungan Pasien
            </h5>
            <NuxtLink to="./entry-kunjungan/create" class="btn btn-primary">
              <i class="bi bi-plus"></i>Data
            </NuxtLink>
            <span class="float-end" id="waktu-kunjungan"></span>
          </div>
          <div class="card-body">
            <table class="table table-striped" id="table1">
              <thead>
                <tr>
                  <th>No Kunjungan</th>
                  <th>Nama Pasien</th>
                  <th>No. BPJS</th>
                  <th>Tanggal Kunjungan</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in kunjungan" :key="index + 1">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.pasien.nama }}</td>
                  <td>{{ item.pasien.no_bpjs }}</td>
                  <td>{{ item.tanggal_kunjungan }}</td>
                  <td>
                    <NuxtLink :to="'./entry-kunjungan/detail/' + item.id" class="btn btn-primary">
                      <i class="bi bi-eye"></i>
                    </NuxtLink>
                  </td>
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
        kunjungan: [{
          id: 1,
          pasien: {
            nama: 'John Doe',
            no_bpjs: '1234567890',
          },
          tanggal_kunjungan: '2023-11-22',
        },
        {
          id: 2,
          pasien: {
            nama: 'Jane Doe',
            no_bpjs: '0987654321',
          },
          tanggal_kunjungan: '2023-11-23',
        },], 
      };
    },
  };
  </script>
  
  