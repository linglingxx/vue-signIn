<template>
    <div class="signIn-container">
        <el-form ref="form" label-width="80px">
            <h1>登录</h1>
            <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password"></el-input>
            </el-form-item>
 
            <el-form-item>
                <el-button type="primary" @click="signIn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      signIn() {
          let username = this.username;
          let password = this.password;
        if(this.username.trim().length === 0 || this.password.trim().length === 0) 
        return this.$message({
          showClose: true,
          message: '用户名和密码不能为空!',
          type: 'error'
        });
        // 将用户输入的信息发送到服务器
        this.$http.post('http://litc.pro:9999/v1/users/login', {
            username,
            password
        })
        .then( result => {
            console.log(result.data)
            this.$message({ 
                type: 'success',
                message: result.data.succMsg 
            })
            localStorage.setItem('token',result.data.data.token)
            localStorage.setItem('userInfo',JSON.stringify(result.data.data))
            this.$router.push('/home')
        })
        .catch( err => {
            // console.dir(err);
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

<style lang="less" scope>
.signIn-container {
    width: 500px;
    margin: 0 auto;
    margin-top: 150px;
    h1 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 20px
    }
    .el-form-item {
        .el-button {
            display: block;
            margin: 0 auto;
        }
        
    }
}
</style>
