<template>
    <div>
      <!-- Back button -->
      <div class="mb-2">
        <NuxtLink to="/rawat-jalan/set-data-pemeriksaan" class="btn btn-primary">
          <i class="bi bi-arrow-left"></i> Back
        </NuxtLink>
      </div>
  
      <!-- Main content -->
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <!-- Data Pasien -->
            <div id="data-pasien" style="min-width:50%; max-width: 60%">
              <div>
                <h5 class="text-center bg-secondary p-2 rounded text-white">NO. INVOICE : {{ prescription.invoice_code }}</h5>
  
                <table class="table-borderless table-xs justify-content-start fs-5">
                  <thead>
                    <tr>
                      <th class="fw-bold px-3 py-2">Nama</th>
                      <th class="fw-bold py-2">:</th>
                      <th class="fw-bold px-3 py-2">{{ patient.nama }}</th>
                    </tr>
                    <tr>
                      <th class="fw-bold px-3 py-2">Tgl Lahir</th>
                      <th class="fw-bold py-2">:</th>
                      <th class="fw-bold px-3 py-2">{{ patient.tanggal_lahir }}</th>
                    </tr>
                    <tr>
                      <th class="fw-bold px-3 py-2">Jenis Kelamin</th>
                      <th class="fw-bold py-2">:</th>
                      <th class="fw-bold px-3 py-2">{{ patient.jenis_kelamin === 'L' ? 'Laki-laki' : 'Perempuan' }}</th>
                    </tr>
                    <tr>
                      <th class="fw-bold px-3 py-2">Alamat</th>
                      <th class="fw-bold py-2">:</th>
                      <th class="fw-bold px-3 py-2">{{ patient.alamat }}</th>
                    </tr>
                    <tr>
                      <th class="fw-bold px-3 py-2">No. Telepon</th>
                      <th class="fw-bold py-2">:</th>
                      <th class="fw-bold px-3 py-2">{{ patient.no_hp }}</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
  
            <!-- Diagnosa -->
            <div id="diagnosa" class="ml-2 rounded px-2" style="background-color: #FDFFA8; height: 100%; width:40%; min-height: 180px;">
              <div class="mt-3">
                <h4 class="card-title text-center" style="color:#122A82">RESEP</h4>
              </div>
              <div class="d-flex align-items-center justify-content-center" style="min-height: 120px;">
                <h6 class="card-title text-center p-3" style="color:#122A82">{{ visitDetail.resep }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Other sections -->
      <div class="d-flex justify-content-between">
        <!-- Invoice Obat -->
        <div class="card" style="min-width: 60%">
          <div class="card-header">
            <h4 class="card-title text-center">INVOICE OBAT</h4>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-center" style="width: 100%;">
              <div class="d-flex align-items-center justify-content-between my-4" style="width: 60%">
                <div>
                  <div class="text-start fw-bold " style="color:#ff6262;">Total : Rp. {{ totalPrice }}</div>
                </div>
                <div>
                  <div :v-if="doctor.name != null">
                    <div class="text-end">
                      <span class="rounded bg-primary px-2 py-1 fw-bold" style="color:white">{{ doctor.name }}</span>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="table-responsive rounded border mx-auto" style="max-width: 60%; max-height:320px; min-width:60%;">
                <table class="table table-xs justify-content-start ">
                  <colgroup>
                    <col />
                    <col />
                    <col style="background-color: #dee7fd;" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th width="30px" class="fw-bold px-4 text-center">No</th>
                      <th class="fw-bold px-4 text-center">Nama Obat</th>
                      <th width="50px" class="fw-bold px-4 text-center text-black" style="background-color: #b1c6ff;">Quantity</th>
                    </tr>
                  </thead>
                  <tbody id="tableBody">
                    <tr v-for="(prescriptionDetail, index) in prescriptionDetails" :key="index">
                      <td width="30px" class="px-4 text-center">{{ index + 1 }}</td>
                      <td class="px-4 text-center">{{ prescriptionDetail.drug.name }}</td>
                      <td width="50px" class="px-4 text-center text-black">{{ prescriptionDetail.quantity }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="mt-4">
                <div v-if="!prescription.is_taken">
                    
                    <NuxtLink :to="`/apotek/prescriptionDetail/${visitDetail.id}/${prescription.id}`">
                        <button class="btn btn-primary fw-bold" style="min-width: 120px"><i class="bi bi-eye"></i> L I H A T</button>
                    </NuxtLink>
                    
                    <NuxtLink :to="`/apotek/checkoutPrescription/${prescription.id}/${visitDetail.id}`">
                        <button class="btn btn-warning fw-bold" style="min-width: 120px"><i class="bi bi-cart"></i> C H E C K O U T</button>
                    </NuxtLink>
                </div>
                <div v-else>
                    <button class="btn btn-success fw-bold" style="min-width: 360px">✅ C H E C K O U T E D</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Doctor Section -->
        <div class="card overflow-hidden" style="min-width: 37%; min-height:450px; max-height:640px">
          <h2 class="card-title text-center py-3">{{ doctor?.name ?? '' }}</h2>
          <div style="width: 100%; height:100%; max-height:500px; background-image:url('{{  }}'); background-position: top; background-size: cover;">
            <div style="height:999px; width:100%"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        prescription: {
          invoice_code: 'your_invoice_code', 
          is_taken: false, 
        },
        patient: {
          nama: 'Patient Name', 
          tanggal_lahir: '01-01-2000', 
          jenis_kelamin: 'L', 
          alamat: 'Patient Address', 
          no_hp: '123456789', 
        },
        visitDetail: {
          resep: 'Prescription Content', 
        },
        totalPrice: 1000, 
        doctor: {
          name: 'Doctor Name', 
        },
        prescriptionDetails: [
          { drug: { name: 'Drug 1' }, quantity: 2 },
          { drug: { name: 'Drug 2' }, quantity: 1 },
          
        ],
      };
    },
  };
  </script>
  
  
  