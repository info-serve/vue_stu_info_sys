<template>
    <div>
        <div class="pagesList">
          <!-- {{totalPages}} -->
          <a  href="javascript:void(0);" @click="handlePage(1)" :class="{'disabled':currentPage == 1}">首页</a>
          <a   href="javascript:void(0);" @click="handlePage(currentPage -1)" :class="{'disabled':currentPage == 1}">上一页</a>
          <a   href="javascript:void(0);" v-for="(item,index) in numbers" :key="index" @click="handlePage(item)" :class="{'active': currentPage ==item}">{{item}}</a>
          <a  href="javascript:void(0);" @click="handlePage(currentPage + 1)" :class="{'disabled':currentPage == totalPages}">下一页</a>
          <a href="javascript:void(0);" @click="handlePage(totalPages)" :class="{'disabled':currentPage == totalPages}">尾页</a>
        <span>{{currentPage}}</span> /<span>{{totalPages}}</span>
        </div> 
       
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
  data(){
    return{
      currentPage:1,
      panlePage:6,//展示页码个数
    }
  },
  methods:{
    handlePage(newPage){
          if(newPage<1){
            newPage = 1
          }
          if(newPage> this.totalPages){
            newPage = this.totalPages
          }
          this.currentPage = newPage;
          this.getStuList(this.currentPage)
    },
    ...mapActions(['getStuList'])
  },
  computed: {
    ...mapState({
      totalPages:state => Math.ceil(+state.totalPage / 2)
    }),
    numbers(){//控制展示页码数量
       let min = this.currentPage - Math.floor(this.panlePage / 2);
       if(min < 1 ){
         min = 1
       }
       let max = min + this.panlePage - 1
       if(max > this.totalPages){
         max = this.totalPages;
       }
       let arrPage = [];
       for(let i = min ; i <= max ; i++){
           arrPage.push(i)
       }
       return arrPage;
    }
  },
}
</script>