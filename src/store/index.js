import Vue from 'vue'
import Vuex from 'vuex'
import API from "../../API.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stuList:[],
    page:1,
    size:1,
    is_show_moduel:false,//是否显示遮罩层
    editUsers:{},//编辑数据
    totalPage:0,
    searchKey:'',//搜索关键词

  },
  mutations: {
    setStuList(state,list){
      state.stuList = list;
    },
    setShowModuel(state,bool){
      state.is_show_moduel = bool;
    },
    setEditUseres(state,users = {}){
      state.editUsers = users;
    },
    setTotalPage(state,pagesCont){
      state.totalPage = pagesCont
    },
    setSearchKey(state,wordKey = ""){
      state.searchKey = wordKey;
    }
   
  },
  actions: {
           getStuList({commit,state,dispatch},page = 1){//获取学生列表
            if(state.searchKey !== ''){
                dispatch('searchKeys',page)
            }else{
            return API
                 .findByPage(page)
                     .then((data) => {
                // console.log(data.data.data.findByPage)
                commit('setStuList',data.data.data.findByPage);
                commit('setTotalPage',data.data.data.cont)
              }).catch((err)=>{
                console.log(err)
              })
            }
          },
        // getStuList({commit,state},page=1){//获取学生列表
        //    API.findByPage(state.page,state.size).then((data) => {
        //       // console.log(data.data.data.findByPage)
        //       commit('setStuList',data.data.data.findByPage);
        //       commit('setTotalPage',data.data.data.cont)
        //     }).catch((err)=>{
        //       console.log(err)
        //     })
        // },
      getStuNoDel({dispatch},sNo){//删除学生
        return  API.delBySno(sNo).then(()=>{
             dispatch('getStuList')
             alert('删除成功');
        }).catch(error=>{
          alert(error);
        })
      },
      upDataInfo({commit,state},infoData){//编辑更新数据
          return API.upDataStu(infoData).then((res)=>{
            if(res.data.status == "success"){
              Object.assign(state.editUsers,infoData)
                commit('setShowModuel',false);
                commit('setEditUseres')
                return res.data.msg;
            }else{
              return Promise.reject(res.data.msg)
            }
          })
      },
      searchKeys({commit,state,dispatch},page){
        API.stuSearch(state.searchKey,page).then((res)=>{
          commit('setTotalPage',res.data.data.cont);
          commit('setStuList',res.data.data.searchList)
        })
      },
           
        

  },
  modules: {
  }
})
