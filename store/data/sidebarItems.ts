export default [
  {
    name: "Menu",
    isTitle: true,
  },
  {
    name: "Dashboard",
    url: "/",
    icon: "grid-fill",
  },
  {
    name: "Pasien",
    key: "data",
    icon: "people",
    submenu: [
      {
        name: "Data Pasien",
        url: "/data/pasien",
      },
    ],
  },
  {
    name: "Rawat Jalan",
    key: "rawat-jalan",
    icon: "heart-pulse",
    submenu: [
      {
        name: "Detail Data Perawatan",
        url: "/rawat-jalan/detail-kunjungan",
      },
      {
        name: "Set Data Pemeriksaan",
        url: "/rawat-jalan/set-data-pemeriksaan",
      },
    ],
  },

  {
    name: "Rekam Medis",
    key: "rekam-medis",
    icon: "clipboard2-pulse-fill",
    submenu: [
      {
        name: "Entry Kunjungan",
        url: "/rekam-medis/entry-kunjungan",
      },
    ],
  },
  {
    name: "Apotek",
    key: "apotek",
    icon: "capsule",
    submenu: [
      {
        name: "Stok Obat",
        url: "/apotek/stok-obat",
      },
    ],
  },
  {
    name: "Lab dan Radiologi",
    key: "lab-radiologi",
    icon: "prescription",
    submenu: [
      {
        name: "Statistic",
        url: "/lab-radiologi/statistic",
      },
      {
        name: "Result Lab",
        url: "/lab-radiologi/result-lab",
      },
      {
        name: "Data Lab",
        url: "/lab-radiologi/lab",
      },
    ],
  },
  {
    name: "Pembayaran",
    key: "pembayaran",
    icon: "wallet",
    submenu: [
      {
        name: "Ringkasan",
        url: "/pembayaran",
      },
      {
        name: "Transaksi",
        url: "/pembayaran/transaksi",
      },
      {
        name: "Riwayat Transaksi",
        url: "/pembayaran/riwayat",
      },
    ],
  },
]
