<template>
    <div class="module">
        <div class="modle">
        <div class="mask"></div>
        <div class="modle-content">
            <div class="heade">
                <h3>编辑信息 {{editUsers.name}}</h3>
                <span class="close" @click="close">X</span>
            </div>
            <form action="" id="editStu">
            <div>
          <label for="name">姓名</label>
          <input type="text" name="name" ref="name" class="Input"  :value="editUsers.name" @input="updateUser('name',$event.target.value)">
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input type="radio" name="sex"  ref="sex"  value="0" :checked="editUsers.sex == 0" @change="updateUser('sex',0)">
          <span>男</span>
          <input type="radio" name="sex" value="1"   :checked="editUsers.sex == 1" @change="updateUser('sex',1)">
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" name="sNo" ref="sNo"  class="Input" :value="editUsers.sNo" @input="updateUser('sNo', $event.target.value)">
        </div>
        <div>
          <label for="email">邮箱</label>
          <input type="text" name="email" ref="email" class="Input"  :value="editUsers.email" @input="updateUser('email', $event.target.value)">
        </div>
        <div>
          <label for="birth">出生年</label>
          <input type="text" name="birth" ref="birth"  class="Input" :value="editUsers.birth" @input="updateUser('birth', $event.target.value)">
        </div>
        <div>
          <label for="phone">手机号</label>
          <input type="text" name="phone" ref="phone" class="Input"  :value="editUsers.phone" @input="updateUser('phone', $event.target.value)">
        </div>
        <div>
          <label for="address">住址</label>
          <input type="text" name="address" ref="address"  class="Input" :value="editUsers.address" @input="updateUser('address', $event.target.value)">
        </div>
          <div>
              <label for=""></label>
              <input type="button" id="editBtn" class="btn"  value="提交" @click="handleSubmit">                    
              <input type="button" id="regt" class="btn"  value="重置" @click="handleReset">
          </div>
         </form>
        </div>
      </div>
    </div>
</template>
<script>
import {mapState,mapMutations, mapActions} from "vuex"
export default {
    data(){
        return{
            eidt_users:{}
         }
        },
    methods:{
        updateUser(key,value){
            this.eidt_users[key] = value;//把修改都放到users当中去
        },
        close(){//关闭
            this.$store.commit('setShowModuel',false)
        },
        handleReset(){//重置
           for(let prop in this.$refs){
            //    console.log(prop,this.$refs[prop].value)
             if(this.$refs !== "sex"){
                  this.eidt_users[prop] = this.$refs[prop].value = "";
             }
             this.$refs.sex.checked = true;
             this.eidt_users.sex = 0;//默认男
           }

        },
        handleSubmit(){//提交
          //  console.log('提交')
          let user = Object.assign({},this.editUsers,this.eidt_users)
          this.upDataInfo(user).then((resMSG) => {
               alert(resMSG)
          }).catch((err) => {
            alert(err);
          })
        },
         ...mapActions(['upDataInfo']),
    },
    computed: {
         
        ...mapState(['editUsers'])
    },
}
</script>