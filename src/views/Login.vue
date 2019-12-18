<template>
    <div class="loginPage">
        <div class="login">
        <div class="title">
            <h1>登录界面</h1>
        </div>
        <div class="content">
        <div>
        <label for="zhanghao">账号:</label>
         <input type="text" placeholder="账号"  v-model="loginId">
        </div>
         <div>
        <label for="mima">密码:</label>
         <input type="password" placeholder="密码"  v-model="loginPwd">
        </div>
         <div>
             <button class="btn" @click="handleLogin">安全登录</button>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loginId:'',
            loginPwd:''
        }
    },
    methods:{
        handleLogin(){

        }
    }
}
</script>
<style scoped>
.loginPage{
    position: relative;
    width: 100%;
    height: 100%;    
}
.login{
    position: relative;
    width: 450px;
    height: 350px;
    background-color: #a0a3af;
    margin: -40px auto;
}
.login .title{
    text-align: center;
    padding-top: 15px;
    font-size: 15px;
    color: #f75f39;
}
.login .content{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 200px;
    margin-left: -200px;
    margin-top:-100px;
}
.login label{
    display: inline-block;
    width: 80px;
    text-align: right;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
}
input{
    width: 250px;
    height: 25px;
    padding-left: 5px;
    margin-left: 5px;
}
.login .content >div{
    margin-top: 20px;
}
.btn {
    outline: none;
    border: 0;
     width: 260px;
    height: 35px;
    margin-left: 85px;
    background-color: #15805c;
    color: #fff;
    line-height: 35px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 20px;
}
.btn:hover{
    background-color: #0b32b3;

}
.loading{
position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
     background-color: rgba(0, 0, 0, .1);
    z-index: 9999999;
}
.loading .modle{
    color: #fff;
    text-align: center;
    line-height: 480px;
    font-size: 20px;
    font-weight: 600;
   
  }
</style>