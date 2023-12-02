<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4>Data Pasien Lab Tiap Bulan</h4>
        </div>
        <div class="card-body">
          <client-only>
            <apexchart
              height="300"
              :options="optionsPasienByMonth"
              :series="optionsPasienByMonth.series"
            ></apexchart>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { format, parseISO } from "date-fns"

export default {
  data() {
    return {
      resultLabs: [],
      pasienByMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

      optionsPasienByMonth: {
        annotations: {
          position: "back",
        },
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: "bar",
        },
        fill: {
          opacity: 1,
        },
        plotOptions: {},
        series: [],
        colors: "#435ebe",
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val.toFixed(0)
            },
          },
        },
      },
    }
  },
  async beforeMount() {
    await this.getResulLab()
    this.countPasienByMonth()
    this.updateChartSeries()
    console.log(this.pasienByMonth)
  },

  computed: {
    chartPasienMonth() {
      return [
        {
          name: "Total pasien lab",
          data: this.pasienByMonth,
        },
      ]
    },
  },

  methods: {
    async getResulLab() {
      try {
        const response = await axios.get(
          "http://103.101.224.67:8083/resultslab"
        )
        this.resultLabs = response.data.data
      } catch (error) {
        console.error("Error fetching result lab data:", error)
      }
    },
    countPasienByMonth() {
      this.resultLabs.forEach((data) => {
        this.pasienByMonth[this.getMonthFromDate(data.created_at) - 1] += 1
      })
    },
    getMonthFromDate(dateString) {
      return new Date(dateString).getMonth() + 1
    },

    updateChartSeries() {
      this.optionsPasienByMonth.series.push(this.chartPasienMonth[0])
    },
  },
}
</script>

<style></style>
