<!-- DetailsModal.vue -->

<template>
    <div class="modal fade modal-lg" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Title'" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">  
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="modalId + 'Title'">Receipt Pasien / {{ invoice.dkunjungan.kunjungan.pasien.nama }}</h5>
            <button type="button" class="close" @click="closeModal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <!-- Modal Body Content -->
            <!-- Replace this with the actual modal content based on your original HTML -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light-secondary" @click="closeModal">
              <i class="bx bx-x d-block d-sm-none"></i>
              <span class="d-none d-sm-block fw-bold">CLOSE</span>
            </button>
            <a class="btn btn-dark ms-1" :href="printUrl" download>
              <i class="bx bx-check d-block d-sm-none"></i>
              <span class="d-none d-sm-block fw-bold">CETAK</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      invoice: Object, // Pass the invoice data as a prop
      modalId: String // Pass a unique modal ID as a prop
    },
    computed: {
      printUrl() {
        // Return the print URL based on your route or logic
        return `/pembayaran/riwayat-cetak/${this.invoice.id}`;
      }
    },
    methods: {
      closeModal() {
        // Close the modal
        // You might want to emit an event to the parent component to handle modal closing
        // Example: this.$emit('close-modal');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your modal-specific styles here */
  </style>
  