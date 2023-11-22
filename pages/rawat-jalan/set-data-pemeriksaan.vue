<template>
    <section class="section">
      <div class="card">
        <div class="card-header"></div>
        <div class="card-body">
          <table class="table table-striped" id="table1">
            <thead>
              <tr>
                <th>ID Kunjungan</th>
                <th>Nama Pasien</th>
                <th>Diagnosa</th>
                <th>Set Nota Apotek</th>
                <th>Status Pemeriksaan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detailkunjungan in detailkunjugans" :key="detailkunjungan.id">
                <td>{{ detailkunjungan.id }}</td>
                <td>{{ detailkunjungan.kunjungan.pasien.nama }}</td>
                <td>{{ detailkunjungan.diagnosa }}</td>
                <td>
                  <button
                    v-if="detailkunjungan.resep === null || detailkunjungan.apotek_id !== null"
                    class="btn btn-sm btn-primary"
                    disabled
                  >
                    <i class="fa-solid fa-notes-medical"></i>
                  </button>
                  <NuxtLink
                    v-else
                    :to="{ name: 'pharmacy.prescriptionView', params: { id: detailkunjungan.id }}"
                    class="btn btn-sm btn-primary"
                  >
                    <i class="fa-solid fa-notes-medical"></i>
                  </NuxtLink>
                </td>
                <td>
                  <span
                    v-if="detailkunjungan.apotek_id === null"
                    class="badge bg-danger"
                  >
                    not complete
                  </span>
                  <span
                    v-else
                    class="badge bg-success"
                  >
                    complete data
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        
        detailkunjugans: [{
          id: 1,
          kunjungan: {
            pasien: {
              nama: 'John Doe',
            },
          },
          diagnosa: 'Fever',
          resep: null,
          apotek_id: null,
        },
        {
          id: 2,
          kunjungan: {
            pasien: {
              nama: 'Jane Doe',
            },
          },
          diagnosa: 'Headache',
          resep: 'Some medicine',
          apotek_id: 123,
        },],
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  