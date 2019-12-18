<template>
    <div class="left-menu">
         <dl>
             <dt>学生管理</dt>
            <router-link tag="dd" to="/studentList">学生列表</router-link>
            <router-link tag="dd" to="/addStutent">新增学生</router-link>
            </dl> 
   <div class="right-content">
        <router-view></router-view>       
    </div>
    </div>
</template>
<script>
export default {
  
}
</script>