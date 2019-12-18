<template>
    <div class="header">
       <div class="logo">
                <img src="../assets/images/logo.jpg" alt="logo" title="logo">
                <span>学员管理系统</span>
            </div>
        <!-- <div class='right'>
              <span class="btnLogin" @click="handleLogin">登录</span>
              <span class="btnLogin" @click="handleResget" :title="content">注册</span>

        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            content:'未有账号?去注册'
        }
    },
     methods:{
        //  handleLogin(){
        //     //  console.log('登录')
        //     this.$router.push('./login')
        //  },
        //  handleResget(){//注册

        //      console.log('注册')
        //     this.$router.push('./register')

           
        //  }
     }
}
</script>
<style >
 .right{
     position: absolute;
     right: 30px;
     top:0;
     /* width: 100px;
     height: 50px;
     border: 1px solid; */
     cursor: pointer;
 }
 .btnLogin{
     display: inline-block;
     width: 50px;
     height: 50px;
     text-align: center;
     line-height: 50px;
     color: #fff;
     margin-left: 5px;
     /* border: 1px solid #fff; */
     box-sizing: border-box;
     font-size: 14px;

 }
 .btnLogin:hover{
     color: #f00;
 }
</style>