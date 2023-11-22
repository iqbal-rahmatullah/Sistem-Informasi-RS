<template>
    <section>
        <div class="card">
            <div class="container">
                <div class="card-header">
                    
                </div>
            </div>
        
        <div class="card-body">
    <table class="table table-striped" id="table1">
      <thead>
        <tr>
          <th>ID Kunjungan</th>
          <th>Nama Pasien</th>
          <th>Jadwal</th>
          <th>Room</th>
          <th>Penanganan</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="detailkunjungan in detailkunjugans" :key="detailkunjungan.id">
          <td>{{ detailkunjungan.id }}</td>
          <td>{{ detailkunjungan.kunjungan.pasien.nama }}</td>
          <td>{{ detailkunjungan.kunjungan.tanggal_kunjungan }}</td>

          <td v-if="detailkunjungan.room">{{ detailkunjungan.room.name_room }}</td>
          <td v-else>-</td>

          <td v-if="detailkunjungan.user">
            {{ detailkunjungan.user.roles }} - {{ detailkunjungan.user.name }}
          </td>
          <td v-else>-</td>

          <td>
            <button @click="showModal(detailkunjungan.id)" class="btn btn-sm btn-primary block">
              <i class="fa-solid fa-eye"></i>
            </button>

            <!-- Modal -->
            <div class="modal fade" :id="'exampleModalCenter' + detailkunjungan.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                  <div class="modal-header" style="padding: 20px;">
                    <h2 class="modal-title" id="exampleModalCenterTitle">Detail Result Kunjungan</h2>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                      <i data-feather="x"></i>
                    </button>
                  </div>
                  <div class="modal-body" style="max-height: 450px; overflow-y: auto;">
                    <h6 style="font-size: 16px;">Data Jadwal Pasien</h6>
                    <div class="row">
                      <!-- tambain dewe :> -->
                    </div>
                    <h6 style="font-size: 16px; margin-top: 7px;">Result Pemeriksaan</h6>
                    <div class="row">
                      <!-- tambain dewe :> -->
                    </div>
                  </div>
                  <div class="modal-footer" style="padding: 10px;">
                    <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
                      <i class="bx bx-x d-block d-sm-none"></i>
                      <span class="d-none d-sm-block">Close</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink
              v-if="!(detailkunjungan.poli || detailkunjungan.dokter) || (detailkunjungan.diagnosa || detailkunjungan.resep)"
              :to="'/rawat-jalan/detail-kunjungan/update/'+ detailkunjungan.id"
              class="btn btn-sm btn-secondary block"
            >
              <i class="fa-solid fa-pencil"></i>
            </NuxtLink>
            <NuxtLink
              v-else
              :to="'/rawat-jalan/detail-kunjungan/edit/' + detailkunjungan.id "
              class="btn btn-sm btn-warning"
            >
              <i class="fa-solid fa-pencil"></i>
            </NuxtLink>

            <NuxtLink
              v-if="!(detailkunjungan.poli || detailkunjungan.dokter || detailkunjungan.diagnosa || detailkunjungan.resep) || !detailkunjungan.room_id"
              :to="'/rawat-jalan/detail-kunjungan/show/' + detailkunjungan.id "
              class="btn btn-sm btn-info block"
            >
              <i class="fa-solid fa-briefcase-medical"></i>
            </NuxtLink>
            <button
              v-else
              type="button"
              class="btn btn-sm btn-secondary block"
              :disabled="true"
            >
              <i class="fa-solid fa-briefcase-medical"></i>
            </button>

            <NuxtLink
              v-if="detailkunjungan.poli && !detailkunjungan.dokter && (!detailkunjungan.diagnosa || !detailkunjungan.resep)"
              :to="{ name: 'rawatjalan.adddiagnosa', params: { id: detailkunjungan.id }}"
              class="btn btn-success btn-sm"
            >
              <i class="fa-solid fa-paste"></i>
            </NuxtLink>
            <button
              v-else
              type="button"
              class="btn btn-sm btn-secondary"
              disabled
            >
              <i class="fa-solid fa-paste"></i>
            </button>

            <form @submit.prevent="deleteDetailKunjungan(detailkunjungan)" method="post">
              <button type="submit" class="btn btn-sm btn-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
            </form>
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
  methods: {
    async deleteDetailKunjungan(detailkunjungan) {
     
    },
  },
};
</script>