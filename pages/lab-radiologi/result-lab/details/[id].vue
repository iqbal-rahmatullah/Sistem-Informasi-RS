<template>
    <div>
      <section class="section">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <dl class="row">
                <dt class="col-sm-3">Nama</dt>
                <dd class="col-sm-9">:<b> {{ resultLab.kunjungan.pasien.nama }}</b></dd>
  
                <dt class="col-sm-3">Jenis Kelamin</dt>
                <dd class="col-sm-9">: {{ resultLab.kunjungan.pasien.jenis_kelamin === 'L' ? 'Laki-laki' : 'Perempuan' }}</dd>
  
                <dt class="col-sm-3">Tanggal Lahir </dt>
                <dd class="col-sm-9">: {{ resultLab.kunjungan.pasien.tanggal_lahir }}</dd>
                <dt class="col-sm-3">No. Telepon</dt>
                <dd class="col-sm-9">: {{ resultLab.kunjungan.pasien.no_hp }}</dd>
  
                <dt class="col-sm-3">Alamat</dt>
                <dd class="col-sm-9">: {{ resultLab.kunjungan.pasien.alamat }}</dd>
  
                <dt class="col-sm-3">No. KTP</dt>
                <dd class="col-sm-9">: {{ resultLab.kunjungan.pasien.no_ktp }}</dd>
  
                <dt class="col-sm-3">No. BPJS</dt>
                <dd class="col-sm-9">: {{ resultLab.kunjungan.pasien.no_bpjs }}</dd>
                <dt class="col-sm-3">Harga Yang Harus Dibayar</dt>
                <dd class="col-sm-9">: {{ resultLab.lab.price }}</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
  
      <div class="page-heading">
        <section class="section">
          <div class="card">
            <div class="card-body">
              <table class="table" id="tablePasien">
                <thead>
                  <tr>
                    <th class="text-center">No</th>
                    <th class="text-center">Tanggal</th>
                    <th class="text-center">Nama Lab</th>
                    <th class="text-center">Hasil Lab</th>
                    <th class="text-center">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">1</td>
                    <td class="text-center">{{ resultLab.created_at.format('d M Y') }}</td>
                    <td class="text-center">{{ resultLab.lab.name }}</td>
                    <td class="text-center">
                      <a v-if="resultLab.status === 'success'" :href="downloadLink" class="btn btn-light">
                        <i class="bi bi-download"></i>
                      </a>
                      <button v-else class="btn btn-light" disabled>
                        <i class="bi bi-x-circle"></i>
                      </button>
                    </td>
                    <td class="text-center">
                      {{ resultLab.description }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        resultLab: {}, 
      };
    },
    computed: {
      downloadLink() {
        
      },
    },
    created() {
    }
  };
  </script>
  
  