<template>
    <div>
      <nuxt-link to="/apotek/stok-obat" class="btn btn-primary">
        <i class="bi bi-arrow-left"></i> Back
      </nuxt-link>
  
      <div class="d-flex justify-content-evenly my-3">
        <div class="text-center" style="width:50%">
          <h2 class="card-title">{{ drug.name }}</h2>
        </div>
        <div class="text-center" style="width:50%">
          <button @click="openModal" class="btn btn-warning fw-bold">
            <i class="bi bi-pencil-fill"></i> Edit Stock
          </button>
        </div>
      </div>
  
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-evenly">
            <div class="d-flex justify-content-center align-items-center text-center" style="width:50%">
              <div>
                <h1 class="card-title">{{ drug.name_code }}</h1>
                <h6 class="">Medicine ID</h6>
              </div>
            </div>
            <div class="d-flex justify-content-center text-center" style="width:50%">
              <div class="bg-success rounded py-3" style="width:40%;">
                <h1 class="card-title" style="color:white">{{ drug.stock }}</h1>
                <h4 class="card-title" style="color:white">Available Stock</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">How to use</h5>
        </div>
        <div class="card-body">
          <p>{{ drug.how_to_use }}</p>
        </div>
      </div>
  
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Side Effects</h5>
        </div>
        <div class="card-body">
          <p>{{ drug.side_effect }}</p>
        </div>
      </div>
  
      <!-- Modal -->
      <div class="modal modal-borderless fade" id="openModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">+ / - Medicine Item</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- Form -->
              
                <div class="form-group">
                  <label for="stock-column">Stock</label>
                  <div class="row">
                    <div class="col-4">
                      <select v-model="addSubstractStock" class="form-control form-select" placeholder="+ or -" required>
                        <option value="+">+Tambah</option>
                        <option value="-">-Kurang</option>
                      </select>
                    </div>
                    <div class="col-8">
                      <input v-model="stock" type="number" min="0" class="form-control" placeholder="Stock" required>
                    </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary"  @submit.prevent="updateMedicineStock">Save changes</button>
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
        drug: {
          name: 'Sample Name',
          name_code: 'ABC123',
          stock: 10,
          how_to_use: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          side_effect: 'No known side effects.',
        },
        addSubstractStock: '+',
        stock: 0,
      };
    },
    methods: {
     
      updateMedicineStock() {
        
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  