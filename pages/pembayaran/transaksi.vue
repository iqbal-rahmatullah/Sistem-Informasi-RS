<template>
    <div>
      <div v-if="message.alert" class="alert alert-success alert-dismissible show fade">
        <i class="bi bi-check-circle"></i> Pembayaran Telah DiKonfirmasi!
        <button type="button" class="btn-close" @click="closeAlert" aria-label="Close"></button>
      </div>
  
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="row">
                  <div class="m-1 p-3 pb-0 d-flex justify-content-start">
                    <div class="p-1 rounded" style="font-size: 12px; color: #ff2300;">
                      *Tekan Pending Button Untuk Melakukan Konfirmasi Pembayaran
                      <!-- <input type="" class="form-control" placeholder="Search.."> -->
                    </div>
                  </div>
                </div>
  
                <div class="row">
                  <div>
                    <div class="table-responsive rounded border">
                      <table class="table table-xs justify-content-start ">
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
                            <td class="px-4">{{row.dkunjungan.pembayaran}}</td>
                            <td class="px-4 text-center">
                                <a
                                    class="m-1 btn-danger btn p-1 px-4 text-center"
                                    data-bs-toggle="modal"
                                    :data-bs-target="'#paymentPending' + row.id"
                                >
                                    <span class="d-none d-sm-block fw-bolder">Pending</span>
                                </a>
                                <div :id="'paymentPending' + row.id" class="modal fade" tabindex="-1" :aria-labelledby="'paymentPending' + row.id + 'Title'" style="display: none;" aria-hidden="true">
                                    <form class="form form-horizontal" :action="`/pembayaran-transaksi-update/${row.dkunjungan.kunjungan.id}`" method="POST">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" :id="'paymentPending' + row.id + 'Title'">
                                            Konfirmasi Pembayaran / {{ row.dkunjungan.kunjungan.pasien.nama }}
                                            </h5>
                                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-start m-3">
                                            <div>
                                            INVOICE/RSPEMNS/{{ new Date(row.created_at).getTime() }}/1290{{ row.id }}
                                            </div>
                                        </div>
                                        <div class="modal-body">
                                            <div class="rounded border">
                                            <div class="card-body">
                                                <div class="form-body">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                    <label for="first-name-horizontal">Nama Pasien</label>
                                                    </div>
                                                    <div class="col-md-8 form-group">
                                                    <input type="text" id="first-name-horizontal" class="form-control" :name="'fname'" :value="row.dkunjungan.kunjungan.pasien.nama" disabled>
                                                    </div>
                                                    <div class="col-md-4">
                                                    <label for="total-horizontal">Total</label>
                                                    </div>
                                                    <div class="col-md-8 form-group">
                                                    <input type="total" id="total-horizontal" class="form-control" :name="'total-id'" :value="row.dkunjungan.pembayaran" disabled>
                                                    </div>
                                                    <div class="col-md-4">
                                                    <label for="admin-info-horizontal">Admin</label>
                                                    </div>
                                                    <div class="col-md-8 form-group">
                                                    <input type="text" id="admin-info-horizontal" class="form-control" :name="'admin'" :value="'auth nanti'" disabled>
                                                    </div>
                                                    <div class="col-12 col-md-8 offset-md-4 form-group">
                                                    <div class="form-check">
                                                        <div class="checkbox">
                                                        <input type="checkbox" id="checkbox1" class="form-check-input" required>
                                                        <label for="checkbox1">Agree with Term And Conditions</label>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
                                            <i class="bx bx-x d-block d-sm-none"></i>
                                            <span class="d-none d-sm-block">Close</span>
                                            </button>
                                            @csrf
                                            @method('POST')
                                            <button type="submit" class="btn btn-primary ms-1" :name="'status_pembayaran'" value="1">
                                            <i class="bx bx-check d-block d-sm-none"></i>
                                            <span class="d-none d-sm-block">Accept</span>
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
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
                        results of {{ invoice.length }}
                      </p>
                    </ul>
  
                    <ul v-if="invoice.length">
                      <li v-if="invoiceMeta.currentPage > 1">
                        <a @click.prevent="getInvoices(invoiceMeta.currentPage - 1)" href="#">Previous</a>
                      </li>
  
                      <li v-for="page in invoiceMeta.pages" :key="page" :class="{ active: page === invoiceMeta.currentPage }">
                        <a @click.prevent="getInvoices(page)" href="#">{{ page }}</a>
                      </li>
  
                      <li v-if="invoiceMeta.currentPage < invoiceMeta.lastPage">
                        <a @click.prevent="getInvoices(invoiceMeta.currentPage + 1)" href="#">Next</a>
                      </li>
                    </ul>
                  </div>
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
        // Add more data properties if needed
        invoice: [
        {
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
        ],
        invoiceMeta: {},
        message: {}
      };
    },
    methods: {
      // Add methods for handling data retrieval if needed
      closeAlert() {
        this.message = {}
      },

      getInvoices(){

      }
    },
    mounted() {
      // Fetch data or perform any initialization logic here
      this.getInvoices();
    },
  };
  </script>
  
  <style>
  /* Add your styles if needed */
  </style>
  