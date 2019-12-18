<template>
  <div id="app" class="wrapper">
      <!-- 头部navigator -->
      <headerNavigator />
      <LeftMenu />
    
  </div>
</template>
<script>
import headerNavigator from "./components/headerNav.vue";
import LeftMenu from "./components/leftMenu.vue"
import api from "../API.js"
import {mapActions} from "vuex" //1
export default {
 
  components:{
     headerNavigator,
     LeftMenu
  },
  created(){
    //   api.findByPage(1,10)
    //   .then((res)=>{
    //       console.log(res)
    //   }).catch((err) => {
    //       console.log(err)
    //   })
//    this.getStuList()  //1
     this.$store.dispatch('getStuList')
  },
  methods:{
    //   ...mapActions(['getStuList']) //1
  },
  computed: {
    
  },
}
</script>
<style>
*{ margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;}

html, body,.wrapper {
    height: 100%;
    background-color: #eee;
   
}
button {
    cursor: pointer;
}
/* .wrapper{
      overflow: hidden; 
} */
.wrapper .header {
    height: 70px;
    line-height: 70px;
    min-width: 1349px;
    background: #354457;
    position: relative;
    z-index: 100;
   
}
.wrapper .header .logo {
    width: 200px;
    padding-left: 20px;
    height: 70px;
    line-height: 70px;
    color: #b3bcc5;
    font-size: 14px;
}
.wrapper .header .logo img {
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
}
.left-menu {
    
    width: 200px;
    background-color: #4d5e70;
   /* min-height: 623px; */
   height: 100%;
    position: absolute;
    top:0px;
    padding-top: 70px;
    /* 设置的宽高 是包括padding border */
    box-sizing: border-box;
}
.left-menu dl {
    font-size: 14px;
    color: #b3bcc5;
}
.left-menu dl dt {
    font-weight: bold;
    padding: 10px;
}
.left-menu dl dd {
    height: 40px;
    line-height: 40px;
    padding-left: 30px;
    cursor: pointer;
}
.left-menu dl dd.active {
    background-color: #ddd;
    color: #354457;
}

.header .logo span{
    margin-left: 10px;
}

.left-menu dl dd.router-link-exact-active{
    background-color: #eee;
    color: #020;
}
.left-menu dl dd:not(.router-link-exact-active):hover{
    background-color: #b3bcc5;
    color: #020;
}
.right-content {
    min-width:1149px;
    padding-left: 200px;
    position: relative;
}

.right-content form {
    width: 400px;
    margin: 50px auto;
    
}
.student-list .search-bar {
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    font-size: 16px;
}

.search-bar{
  
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #354457;
    box-sizing: border-box;
    background-color: rgb(181, 222, 250);
}
.search-bar .searchInput{
    width: 250px;
    height: 20px;
    padding: 5px 10px 5px 9px;
    outline: none;
    border: none
}
.search-bar .search-btn,
.search-bar .findAll-btn{
    width: 80px;
    height: 30px;
    background-color: #2f3a9e;
    color: #fff;
    outline: none;
    border: none;
    margin:3px 10px;
    cursor: pointer;
}

.search-bar .findAll-btn:hover{
    background-color: #e7acac;    
}
.search-bar .search-btn:hover{
    background-color: #f44;
}
.showData{
    position: absolute;
    top: 0;
    right: 30px;
    line-height: 60px;
}
.showData .text-data{
       font-size: 14px;
       font-weight: 300;
       padding: 0 10px;
}
.showData #show-data{
    color: #f00;
    font-weight: bold;
    font-size: 16px;
}
.scroll-area::-webkit-scrollbar{
    width: 2px;
    background-color: #eee;
    
  
}
.scroll-area::-webkit-scrollbar-thumb{
        border-radius: 5px;
        box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
        
}

.right-content .scroll-area{
    width: 100%;
    height: 460px;
    overflow-y: scroll;
}
table {
    width: 100%;
    font-size: 14px;
    color: #354457;
    min-width: 800px;
    /* background-color: #fff; */
}
table thead {
    background-color: #e3e8ee;
}
table th, table td {
    text-align: center;
    padding: 10px;
}
table th {
    color: #646987;
}
table tbody {
    background-color: #fff;
}
table .btn {
    padding: 3px 10px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
}
table tbody td .btn.eidt {
    background-color: #5cb85c;
}
table tbody td .btn.eidt:hover {
    background-color: #398439;
    border-color: #255625;
}
table .btn.del {
    background-color: #d9534f;
}
table .btn.del:hover {
    background-color: #c9302c;
}
.modle{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
     }
     .mask{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .5);
     }
     .modle-content{
         width: 450px;
        background-color: #fff;
         height: 460px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top:-230px;
        margin-left: -225px;

     }
     .heade{
         position: relative;
         width: 100%;
         height: 45px;
         background-color: #eee;
         margin-bottom: 10px;
         box-sizing: border-box;
     }
     h3{
         color: #f32501;
         font-size: 16px;
         padding:10px;
         margin: 0;
     }
     .close{
         position: absolute;
         display: inline-block;
         width: 45px;
         height: 45px;
         right: 10px;
         top: 0;
         line-height: 45px;
         text-align: center;
         /* border: 1px solid; */
         cursor: pointer;
     }
 
.modle .modle-content form{
    position: absolute;
    top: 30px;
    left: 25px;
    width: 400px;
    box-sizing: border-box;

}
 .modle .modle-content form div{
    padding:7px 0;
}
 .modle .modle-content form label{
    display: inline-block;
    width: 65px;
    text-align: right;
    font-size: 14px;
    font-weight: bold;
}
.modle .modle-content form .Input{
    width: 280px;
    height: 25px;
    padding: 0 5px;
   
}
 .modle .modle-content form .btn{
       width: 100px;
       height: 30px;
       outline: none;
        border: none;
        margin-left: 30px;
        cursor: pointer;

}
 .modle .modle-content form #editBtn{
    background-color: #3bb63b;
    color: #fff;
}

.modle .modle-content form #regt{
    background-color: #0bcbec;
    color: #fff;
}
.right-content .content {
    position: absolute;
    top: -120px;
    width: calc(100% - 200px);
    /* width: 100%; */
}
.addStu{
    position: absolute;
    top: -135px;
    left: 35%;
}
.right-content .addStu form{
    width: 500px;

}

.addStu form div{
    padding: 10px 0;
}
.addStu form div label{
    display: inline-block;
    width: 80px;
    text-align: right;
    font-size: 16px;
    font-weight: bold;
}
.addStu form .Input{
    width: 305px;
    height: 35px;
    padding: 0 5px;
    margin-left: 10px;
   
}
.addStu form .btn{
      display: inline-block;
       width: 100px;
       height: 30px;
        margin-left: 100px;
        text-align: center;
        line-height: 30px;
        align-items: center;
        cursor: pointer;


}
.addStu form #Addsubmit{
    background-color: #3bb63b;
    color: #fff;
}
.addStu form #Addsubmit:hover{
    background-color: #4c8d4c;

}
.addStu form #regt{
    background-color: #0bcbec;
    color: #fff;
}
.addStu form #regt:hover{
    background-color: #52d8f0;
    
}
.pagesList {
    position: absolute;
    bottom: 50px;
    left: 0;
            text-align: center;
        }
 .pagesList a.disabled {
            cursor: not-allowed;
            color: #ccc;
        }
        .pagesList a {
            display: inline-block;
            text-decoration: none;
            border: 1px solid #ddd;
            box-sizing: border-box;
            padding: 5px 15px;
            color: #4152ee;
            margin-left: 3px;
            background-color: #fff;
        }
      .pagesList a.disabled{
          cursor: not-allowed ;
          color: #eee;
      }
        .pagesList a.active {
            color: #fff;
            background-color:#555;
            border: 1px solid #555;
        }
</style>
