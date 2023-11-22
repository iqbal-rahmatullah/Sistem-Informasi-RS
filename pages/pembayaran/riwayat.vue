<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-content">
          <div class="card-body">
            <div class="row">
              <div class="m-1 p-3 d-flex justify-content-end">
                <div class="p-1 rounded">
                  <!-- <input type="text" class="form-control" placeholder="Search.."> -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="">
                <div class="table-responsive rounded border">
                  <table class="table table-xs justify-content-start">
                    <thead class="">
                      <tr class="">
                        <th class="fw-bold px-4">Tanggal</th>
                        <th class="fw-bold px-4">Nama</th>
                        <th class="fw-bold px-4">Total</th>
                        <th class="fw-bold px-4 text-center">Status</th>
                        <th class="fw-bold px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in invoice" :key="row.id" class="">
                        <td class="px-4">{{ row.created_at }}</td>
                        <td class="px-4">{{ row.dkunjungan.kunjungan.pasien.nama }}</td>
                        <td class="px-4">{{ row.dkunjungan.pembayaran }}</td>
                        <td class="px-4 text-center">
                          <a class="m-1 rounded bg-success btn p-1 px-4 text-center fw-bolder text-white">
                            SUCCESS
                          </a>
                        </td>
                        <td class="px-4 text-center">
                          <a
                            class="m-1 rounded bg-primary p-1 btn px-4 text-center fw-bolder text-white"
                            data-bs-toggle="modal" :data-bs-target="'#paymentSuccessDetail' + row.id"
                          >
                            DETAILS
                          </a>
                          <div
                            class="modal fade modal-lg"
                            :id="'paymentSuccessDetail' + row.id"
                            tabindex="-1"
                            :aria-labelledby="'paymentSuccessDetail' + row.id + 'Title'"
                            aria-hidden="true"
                            style="display: none;"
                          >

                            <div class="modal-dialog modal-dialog-scrollable" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" :id="'paymentSuccessDetail' + row.id + 'Title'">
                                    Receipt Pasien / {{ row.dkunjungan.kunjungan.pasien.nama }}
                                  </h5>
                                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div class="d-flex justify-content-start m-4">
                                    <div>INVOICE/RSPEMNS/{{ Math.floor(Date.parse(row.created_at) / 1000) }}/1290{{ row.id }}</div>
                                  </div>
                                  
                                  <div class="table-responsive rounded border m-4">
                                    <table class="table table-xs justify-content-start">
                                      
                                      <thead>
                                        <tr>
                                          <th class="fw-bold px-4">Order</th>
                                          <th class="fw-bold px-4 text-start">Keterangan</th>
                                          <th class="fw-bold px-4">Desc</th>
                                          <th class="fw-bold px-4 text-center">@harga</th>
                                          <th class="fw-bold px-4 text-center">Qty</th>
                                          <th class="fw-bold px-4 text-center">@Total</th>
                                        </tr>
                                      </thead>
                                      
                                      <tbody class="fw-normal">
                                        
                                        <tr v-if="row.dkunjungan.apotek_id">
                                          <th colspan="6" class="p-2 fw-bolder">
                                            <div style="padding: 0 0 0 80px; border-bottom: 0px;" class="text-start">Drugs</div>
                                          </th>
                                        </tr>
                                        <tr v-for="(item, index) in row.apotek" :key="index" class="fw-normal">
                                          <th class="fw-normal">{{ index + 1 }}</th>
                                          <th class="fw-normal px-4 text-start">{{ item.drug.name }}</th>
                                          <th class="fw-normal">-</th>
                                          <th class="fw-normal px-4 text-start">@money(item.drug.price)</th>
                                          <th class="fw-normal">{{ item.quantity }}</th>
                                          <th class="fw-normal px-4 text-start">@money(item.drug.price * item.quantity)</th>
                                        </tr>

                                        
                                        <tr>
                                          <th colspan="6" class="p-2 fw-bolder">
                                            <div style="padding: 0 0 0 80px;" class="text-start">Services</div>
                                          </th>
                                        </tr>
                                        <tr class="fw-normal">
                                          <th class="fw-normal">1</th>
                                          <th class="fw-normal px-4 text-start">Biaya Registrasi Rumah Sakit</th>
                                          <th class="fw-normal">Rawat Jalan</th>
                                          <th class="fw-normal px-4 text-start">Rp. 30.000,00</th>
                                          <th class="fw-normal">1</th>
                                          <th class="fw-normal px-4 text-start">Rp. 30.000,00</th>
                                        </tr>

                                        
                                        <tr v-if="row.dkunjungan.lab != null">
                                          <th colspan="6" class="p-2 fw-bolder">
                                            <div style="padding: 0 0 0 80px;" class="text-start">Labs</div>
                                          </th>
                                        </tr>
                                        <tr v-for="(lab, labIndex) in row.dkunjungan.lab" :key="labIndex" class="fw-normal">
                                          <th class="fw-normal">{{ labIndex + 1 }}</th>
                                          <th class="fw-normal px-4 text-start">{{ lab.name }}</th>
                                          <th class="fw-normal">{{ lab.description || '-' }}</th>
                                          <th class="fw-normal px-4 text-start">@money(lab.price)</th>
                                          <th class="fw-normal">1</th>
                                          <th class="fw-normal px-4 text-start">@money(lab.price)</th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>

                                  
                                  <div class="border mt-4 rounded m-4">
                                    <div class="d-flex m-1 justify-content-between p-2">
                                      <div class="text-start">
                                        <div style="font-size: 12px;">- PT.PEMNS NPWP : 213131000</div>
                                        <div style="font-size: 12px;">- JIKA TERDAPAT KESALAHAN DAPAT MENGHUBUNGI KAMI</div>
                                      </div>
                                      <div class="text-start d-flex fw-bold" style="margin: 0 35px 0 0;">
                                        <div class="mx-4">Total Biaya</div>
                                        <div class="mx-2">{{ row.dkunjungan.pembayaran }}</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
                                    <i class="bx bx-x d-block d-sm-none"></i>
                                    <span class="d-none d-sm-block fw-bold">CLOSE</span>
                                  </button>
                                  <a class="btn btn-dark ms-1" :href="`/pembayaran-riwayat-cetak/${row.id}`" download>
                                    <i class="bx bx-check d-block d-sm-none"></i>
                                    <span class="d-none d-sm-block fw-bold">CETAK</span>
                                  </a>
                                </div>
                              </div>
                            </div>

                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="mt-5 d-flex justify-content-between">
                <ul>
                  <p>
                    Showing
                    <select name="" id="" disabled>
                      <option value="15" class="disabled" selected>10</option>
                    </select>
                    results of {{ invoice.total }}
                  </p>
                </ul>
                <ul class="pagination pagination-primary  justify-content-end">
                  
                </ul>
              </div>
            </div>
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
      invoice: [{
          id: 1,
          created_at: '2023-01-01',
          dkunjungan: {
            kunjungan: {
              pasien: {
                nama: 'John Doe'
              }
            },
            pembayaran: 500.00
          }
        },
        {
          id: 2,
          created_at: '2023-01-01',
          dkunjungan: {
            kunjungan: {
              pasien: {
                nama: 'John B'
              }
            },
            pembayaran: 500.00
          }
        },], // Set your invoice data here
    };
  },
  
};
</script>
