<template>
    <div class="allReceiver-container">
        <el-table
            :data="receiverData"
            style="width: 100%">
            <el-table-column prop="id" label="编号" width="150">
            </el-table-column>
            <el-table-column label="配送信息">
              <el-table-column prop="receiver_name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="mobile" label="手机号" width="120">
              </el-table-column>
              <el-table-column label="地址">
                  <el-table-column prop="province" label="省份" width="120">
                  </el-table-column>
                  <el-table-column prop="city" label="市" width="120">
                  </el-table-column>
                  <el-table-column prop="area" label="区" width="120">
                  </el-table-column>
                  <el-table-column prop="detailed_address" label="地址" width="300">
                  </el-table-column>
                  <el-table-column prop="postcode" label="邮编" width="120">
                  </el-table-column>  
              </el-table-column>
            </el-table-column>
        </el-table>
    </div>
    
</template>


<script>
  export default {
    data() {
      return {
        receiverData: []
      }
    },
    created(){
      this.getAllReceiver()
    },
    methods: {
      getAllReceiver() {
        let token = localStorage.getItem('token') || ''
        // 发送请求获取所有收货人信息数据
        this.$http.get('http://litc.pro:9999/v1/users/getReceiverAddress', {
          headers: {Authorization: token}
        }).then( result => {
          // console.log(ressult);
          this.receiverData = result.data.data
        })
        .catch( err => {
          this.$message({
            showClose: true,
            message: err.response.data.errMsg,
            type: 'error'
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.allReceiver-container {
    padding: 50px;
    .el-table__header {
        width: 100%;
    }
}
</style>
