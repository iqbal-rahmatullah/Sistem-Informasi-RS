<template>
    <div class="page-heading">
        <section class="section">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">
                        Data Pasien
                    </h5>
                </div>
                <div class="card-body">
                    <a href="" class="btn btn-primary"><i class="bi bi-plus"></i>
                        Data</a>
                    <table class="table table-striped" id="table1">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Pasien</th>
                            <th>Jenis Kelamin</th>
                            <th>Tanggal Lahir</th>
                            <th>No Hp</th>
                            <th>Aksi</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                                <tr>
                                    <td>{{  }}</td>
                                    <td>{{  }}</td>
                                    <td>{{  }}</td>
                                    <td>{{  }}</td>
                                    <td>{{  }}</td>
                                    <td>
                                        <a href="/data/edit/1" class="btn btn-warning text-white"><i
                                                class="bi bi-pencil-square"></i></a>
                                       <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </div>
</template>