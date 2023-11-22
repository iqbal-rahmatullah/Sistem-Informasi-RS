<script setup lang="ts">
    const dataTable = {

        
    plotOptions : {
    colors: [ "#F8C300","#E27483"],
    series: [{
    name: 'Pemasukan',
    data: [
        
        ]
        
    }, {
        name: 'Pengeluaran',
        data: [
            
            ]
        }],
        chart: {
            height: 350,
            type: 'area'
        },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            
            ]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
    },
    }
}
    
</script>

<template>
<div class="page-heading">

    <div class="row ">
        <div class="col">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="d-flex align-items-center place-content-between">
                                <div class="">
                                    <div class="bg-info rounded h-100 p-5 mx-3 d-flex justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="77" height="48" viewBox="0 0 77 48" fill="none">
                                        <path d="M0 3.5C0 1.567 1.567 0 3.5 0C5.433 0 7 1.567 7 3.5V44.5C7 46.433 5.433 48 3.5 48C1.567 48 0 46.433 0 44.5V3.5Z" fill="#ffffff"/>
                                        <rect x="31.278" y="18.5546" width="5.81905" height="33.9571" rx="2.90953" transform="rotate(41 31.278 18.5546)" fill="#ffffff"/>
                                        <rect x="71.8649" y="13.5785" width="5.81905" height="37.0396" rx="2.90953" transform="rotate(45 71.8649 13.5785)" fill="#ffffff"/>
                                        <rect x="76.3702" y="13.9135" width="4.73083" height="13.7485" rx="2.36542" transform="rotate(98 76.3702 13.9135)" fill="#ffffff"/>
                                        <rect x="71.803" y="13.7502" width="4.15421" height="13.143" rx="2.0771" transform="rotate(-3 71.803 13.7502)" fill="#ffffff"/>
                                        <rect x="27.9846" y="22.1301" width="5.81905" height="30.8265" rx="2.90953" transform="rotate(-45 27.9846 22.1301)" fill="#ffffff"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex-fill">
                                    <div>
                                        <h3>$totalIncome</h3>
                                        <p class="text-bold fw-bold">TOTAL PEMASUKAN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="col">
        <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="d-flex align-items-center place-content-between">
                                <div class="">
                                    <div class="bg-danger rounded h-100 p-5 mx-3 d-flex justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="48" viewBox="0 0 77 48" fill="none">
                                        <path d="M0 3.5C0 1.567 1.567 0 3.5 0C5.433 0 7 1.567 7 3.5V44.5C7 46.433 5.433 48 3.5 48C1.567 48 0 46.433 0 44.5V3.5Z" fill="#ffffff  "/>
                                        <rect width="5.81905" height="33.9571" rx="2.90953" transform="matrix(0.75471 -0.656059 -0.656059 -0.75471 31.278 41.4454)" fill="#ffffff   "/>
                                        <rect width="5.81905" height="37.0396" rx="2.90953" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 71.8649 46.4215)" fill="#ffffff    "/>
                                        <rect width="4.73083" height="13.7485" rx="2.36542" transform="matrix(-0.139173 -0.990268 -0.990268 0.139173 76.3702 46.0865)" fill="#ffffff    "/>
                                        <rect width="4.15421" height="13.143" rx="2.0771" transform="matrix(0.99863 0.052336 0.052336 -0.99863 71.803 46.2498)" fill="#ffffff   "/>
                                        <rect width="5.81905" height="30.8265" rx="2.90953" transform="matrix(0.707107 0.707107 0.707107 -0.707107 27.9846 37.8699)" fill="#ffffff  "/>
                                    </svg>
                                    </div>
                                </div>
                                <div class="flex-fill">
                                    <div>
                                        <h3>$totalOutcome</h3>
                                        <p class="text-bold fw-bold">TOTAL PENGELUARAN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <section class="section">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Grafik Keuangan</h4>
            </div>
                <div class="card-body d-flex justify-content-center" id="keuanganChart">
                    <apexchart
                                  height="300"
                                  :options="dataTable"
                                  :series="dataTable.plotOptions.series"
                                ></apexchart>
                </div>
            
        </div>
    </section>
    <section>
    <div class="card">
            <div class="d-flex card-header">
                <h5 class="card-title m-2">
                    Akuntansi
                </h5>
                <a href="/pembayaran/akuntansi" class="bg-danger text-white rounded p-2">
                    Download
                </a>
            </div>
            <div class="card-body">
            <table class="table table-striped" id="akuntansi">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal Arsip</th>
                            <th>Pengeluaran</th>
                            <th>Pemasukan</th>
                            <th>Keterangan</th>
                            
                        </tr>

                        </thead>
                        <tbody>
                            
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>- </td>
                                    <td>+ </td>
                                    <td>-</td>
                                </tr>
                           
                        </tbody>
                    </table>
                </div>
        </div>
    </section>
</div>
    
</template>