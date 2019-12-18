<template>
   <div class="student-add">
       <div class="addStu">
               <form  class="add">
                   <div>
                       <label for="name">姓名:</label>
                       <input type="text" id="name" name ="name" class="Input" placeholder="输入姓名" v-model="user.name">
                   </div>
                   <div>
                        <label for="sex">性别:</label>
                        <input class="sexBtn" type="radio" id="sex" name ="sex" checked value="0" v-model="user.sex">&nbsp;男
                        <input class="sexBtn" type="radio" id="sex" name ="sex" value="1" v-model="user.sex">&nbsp;女
                    </div>
                     <div>
                       <label for="sNo">学号:</label>
                       <input type="text" id="sNo1" name ="sNo" class="Input"  placeholder="输入学号" v-model="user.sNo">
                   </div>
                   <div>
                        <label for="email">邮箱:</label>
                        <input type="text" id="email" name ="email" class="Input"  placeholder="输入邮箱" v-model="user.email">
                    </div>
                    <div>
                       <label for="birth">出生年:</label>
                      <input type="text" id="birth" name ="birth" class="Input"  placeholder="输入年龄" v-model="user.birth">
                    </div>
                    <div>
                    <label for="phone">手机号码:</label>
                    <input type="text" id="phone" name ="phone" class="Input" placeholder="输入手机号码" v-model="user.phone">
                 </div>
                 <div>
                    <label for="address">地址:</label>
                    <input type="text" id="address" name ="address" class="Input" placeholder="输入籍贯" v-model="user.address">
                </div>
                <div class="btnDIv">
                    <span id="Addsubmit" class="btn" @click="handleAdd">提交</span>                    
                    <span  id="regt" class="btn" @click="reset">重置</span>
                </div>
               </form>
           </div>
    </div>
</template>
<script>
import api from "../../API.js"
import { mapActions } from 'vuex';
export default {
     data(){
         return{
             user:{
               name:'',
               sex:0,
               sNo:'',
               email:'',
               birth:'',
               phone:'',
               address:''
             }
         }
     },
     methods:{
         handleAdd(){//添加
                api
                   .addStudent(this.user)
                         .then((res) => {
                        if(res.data.status == 'success'){
                            this.$store.dispatch('getStuList')
                              .then(()=>{
                                  this.$router.push('/studentList');
                              })
                        }else{
                            alert(res.data.msg);
                  }
                }).catch((err) => {
                    alert(err)
                })

         },
         reset(){//重置
            this.user ={
               name:'',
               sex:0,
               sNo:'',
               email:'',
               birth:'',
               phone:'',
               address:''
            }

         }
         
        
     },





}
</script>






<style scoped>
.sexBtn{
    margin-left:10px;
    cursor: pointer; 
}
</style>