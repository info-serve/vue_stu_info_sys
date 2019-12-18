<template>
    <div class="studentList">
       <div class="scroll-area">
                <table class="tab">
                    <thead>
                        <tr>   <th>序号</th>
                                <th>学号</th>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>邮箱</th>
                                <th>年龄</th>
                                <th>手机号</th>
                                <th>地址</th>
                                <th>操作</th>
                        </tr>
                    </thead>
                    <tbody class="tdy" id="stu-tbody">
                        <tr v-for="(item,index) in stuList" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{item.sNo}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.sex === 0 ? "男" : "女"}}</td>
                            <td>{{item.email}}</td>
                            <td>{{new Date().getFullYear()-item.birth}}</td>
                             <td>{{item.phone}}</td>
                            <td>{{item.address}}</td>
                            <td>
                                <button class="btn eidt" id="editBtn" @click="handleEdit(item)">编辑</button>
                                <button class="btn del" id="delBtn" @click="del(item.sNo)">删除</button>
                            </td>
                        </tr>
                    </tbody>
                 </table>
           </div>
    </div>
</template>
<script>
import {mapState,mapMutations, mapActions} from "vuex"
export default {
    methods:{
        handleEdit(item){
            // console.log(item)
            // this.$store.commit('setShowModuel',true) 1
            this.setShowModuel(true);//2
            // this.setEditUseres(item)
            this.$store.commit('setEditUseres',item)
        },
        del(sNo){//删除
           console.log(sNo)
           const isDel = window.confirm('您确定删除么？？')
           if(isDel){
           this.getStuNoDel(sNo)

           }
        },
        ...mapMutations(['setShowModuel']),

        // ...mapMutations(['setShowModuel','setEditUseres'])
        ...mapActions(['getStuNoDel'])

    },
    computed: {
        ...mapState(['stuList'])
    },
}
</script>