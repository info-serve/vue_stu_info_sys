import axios from "axios"
import url from "./URLs.js"
const appKey = {
    appkey:'foxibaobao_1576673865294'
}
const size = 2;
const API ={}
    // 按页查询
 API.findByPage = function(page = 1){//page:页数,size：每页显示数量
    return axios.get(url.baseURL + url.findByPage,{
        params:{
            page,
            size,
            ...appKey
        }
    })
 }
 //删除
 API.delBySno = function(sNo){//sNo该学生的学号
        return axios.get(url.baseURL + url.delBySno,{
            params:{
                sNo,
                ...appKey
            }
        })
    }
// 提交更新数据
API.upDataStu = function(data){
    return axios.get(url.baseURL + url.updateStu,{
        params:{
            ...data,
            ...appKey,
        }
    })
}
//关键词搜索
API.stuSearch = function(search,page = 1){
    return axios.get(url.baseURL + url.stuSearch,{
        params:{
            ...appKey,
            sex:-1,
            page,
            size,
            search
            
        }
    })
}
//添加学生
API.addStudent = function(datas){
    return axios.get(url.baseURL + url.addStudent,{
       params:{ 
        ...appKey,
        ...datas
       }
    })

}
export default API 