import {createStore} from 'vuex';
export default createStore({
    state(){
        return{
            data : null
        }
    },
    mutations:{
        setPagination(pagination){
            if(pagination.page=='+'){
                if(pagination.pageNow<pagination.page-1)
                    pagination.pageNow = pagination.pageNow+1
            }else if(pagination.page=='-' ){
                if(pagination.pageNow-1>=0)
                pagination.pageNow = pagination.pageNow-1
            }else{
                pagination.pageNow = pagination.page
            }
            return pagination.pageNow*pagination.imit
        }
    }
}
)