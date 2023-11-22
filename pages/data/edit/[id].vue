<template>
    <div class="page-heading">
        <div class="section">
            <div class="card">
        <div class="card-header">
            <h4 class="card-title"> Edit Pasien</h4>
        </div>
        <div class="card-body">
            <form action="" id="form">
                <div class="form-group">
                    <label for="nama">Nama Pasien</label>
                    <input type="text" name="nama" id="nama" class="form-control" value="{{  }}">
                </div>
                <div class="form-grpup">
                    <label for="jenkel">Jenis Kelamin</label>
                    <select name="jenis_kelamin" id="jenkel" class="form-control">
                        <option value="" selected disabled>-- Pilih Jenis Kelamin --</option>
                        <option value="L" {{  }}>Laki-laki</option>
                        <option value="P" {{  }}>Perempuan</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="tgl_lahir">Tanggal Lahir</label>
                    <input type="date" name="tanggal_lahir" id="tgl_lahir" class="form-control" value="{{  }}">
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="no_hp">No Hp</label>
                            <input type="text" name="no_hp" id="no_hp" class="form-control" value="{{  }}">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="no_bpjs">No BPJS</label>
                            <input type="text" name="no_bpjs" id="no_bpjs" class="form-control" value="{{ }}">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="no_ktp">No KTP</label>
                            <input type="text" name="no_ktp" id="no_ktp" class="form-control" value="{{  }}">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="alamat">Alamat</label>
                    <textarea name="alamat" id="" cols="30" rows="5" class="form-control">{{ }}</textarea>
                </div>

                <button type="submit" class="btn btn-primary">Simpan</button>
            </form>
        </div>
    </div>
        </div>
    </div>
</template>