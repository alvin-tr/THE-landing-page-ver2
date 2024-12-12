<template>
  <div class = "w-full h-full">
    <table class="table w-full h-full">
    <tbody>
        <tr class="tr">
            <td class="td"><div class="loader"></div></td>
            <td class="td"><div class="loader"></div></td>
            <td class="td"><div class="loader"></div></td>
        </tr>
        <tr class="tr">
            <td class="td"><div class="loader"></div></td>
            <td class="td"><div class="loader"></div></td>
            <td class="td"><div class="loader"></div></td>
        </tr>
        <tr class="tr">
            <td class="td"><div class="loader"></div></td>
            <td class="td"><div class="loader"></div></td>
            <td class="td"><div class="loader"></div></td>
        </tr>
        <tr class="tr">
            <td class="td"><div class="loader"></div></td>
            <td class="td"><div class="loader"></div></td>
            <td class="td"><div class="loader"></div></td>
        </tr>
    </tbody>
   </table>
  </div>
</template>
<script setup>

</script>

<style scoped>
.thead {
    background: #f5f5f5;
    border-radius: 10px;
    padding: 5px;
}
th {
    padding: 10px;

}
.table {
    background: #fff;
    font-family: 'Montserrat';
    /* border: 1px solid #ddd; */
    border-radius: 10px;
}
.loader {
    background-color: #ededed;
    height: 27px;
    border-radius: 7px;
    width: 100%;
}

.td {
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e9e8e8;
}
td .loader {
    background-color: #ededed;
    background: linear-gradient(100deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, .5) 50%,
    rgba(255, 255, 255, 0) 60%) #ededed;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
}
@keyframes loading {
    to {
        background-position-x: -30%;
    }
}
</style>