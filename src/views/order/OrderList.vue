<template>
  <div class="order-list">
    <el-table :data="orderData" border style="width: 100%" class="table">
      <el-table-column prop="date" label="商品編號" width="180">
      </el-table-column>
      <el-table-column prop="name" label="商品價錢" width="180">
      </el-table-column>
      <el-table-column prop="name" label="商品數量" width="180">
      </el-table-column>
      <el-table-column prop="address" label="商品價錢"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data() {
    return {
      orderData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.order-list {
  //   border: 1px solid red;
  background-color: map-get($theme-colors, light);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 7px map-get($theme-colors, shadow);
}
.table {
  //   border: 1px solid red;
}
</style>
