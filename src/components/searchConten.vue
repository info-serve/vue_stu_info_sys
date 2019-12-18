<template>
    <div class="search">
        <div class="search-bar">
                   <label for="search_word">关键词搜索:</label>
                   <input type="text"  id="search_word" v-model="searchWord" class="searchInput" placeholder="请输入学号/邮箱/地址查询">
                   <button id="searchBtn" class="search-btn" @click="handleSearch">搜索</button>
                   <!-- <button id="Btn" class="findAll-btn" title="查询全部学员信息">全部</button> -->
                </div>
                <div class="showData">
                    <span class="text-data">本系统共:</span>
                    <span id="show-data">{{totalPage}}</span>
                    <span class="text-data">条学员数据</span>
                </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex' 
export default {
     data(){
        return{
            searchWord:''
        }
     },
    methods:{
        handleSearch(){
             this.setSearchKey(this.searchWord);
             if(this.searchWord == ''){
                 this.getStuList()
             }else{
                 this.searchKeys()
             }

        },
    ...mapActions(['searchKeys','getStuList']),
    ...mapMutations(['setSearchKey'])

    },
    computed: {
        ...mapState(['totalPage'])
    },
}
</script>