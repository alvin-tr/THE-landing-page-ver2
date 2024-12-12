<template>
  <div class = "overflow-x-auto">
   <table class="min-w-[629px]">
      <tbody>
        <tr v-for="(row, rowIndex) in tableData.rows" 
        :class = "[ rowIndex === 0 ? 'text-center bg-[#D4FF8E] font-bold' : '' ]"
        :key="rowIndex">
          <td
            v-for="(cell, cellIndex) in row"
            :class = "[cellIndex === 0 ? 'align-middle': '']"
            :key="cellIndex"
            :rowspan="cell.rowspan || 1"
            :colspan="cell.colspan || 1"
          >
            {{ cell.text }}
          </td>
        </tr>
      </tbody>
    </table> 
  </div>
    
  </template>
  
  <script setup>
  defineProps({
    tableData: {
      type: Object,
      required: true
    }
  })
  </script>

  <style scoped>
  table {

  border-collapse: collapse;
}

tbody {
  background: white;
}
th {
  background-color: #ccff99;
  padding: 10px;
  text-align: left;
}

td {
  border: 1px solid #dddddd;
  padding: 15px;
}

tbody tr:nth-child(even) td:first-child {
  border-top: 0;
}

tbody tr:nth-child(even) td:nth-child(2) {
  border-top: 0;
}


  </style>