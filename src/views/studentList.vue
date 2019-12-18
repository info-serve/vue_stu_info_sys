<template>
    <div class="student-list content">
        <search />
        <studentList />
        <turnPage />
          <module v-if="is_show_moduel"/>
      
    </div>
</template>
<script>
import search from "../components/searchConten.vue"
import studentList from "../components/studentListTable.vue"
import turnPage from "../components/turnPage.vue"
import module from "../components/moduel.vue"
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    components:{
        search,
        studentList,
        module,
        turnPage

    },
    computed: {
        ...mapState(['is_show_moduel'])
    },

}
</script>
