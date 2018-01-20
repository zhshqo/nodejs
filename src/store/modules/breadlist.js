
const breadlist = {
    state: {
      breadListState:[
        {name:'首页',path:'/'}
      ]
    },
    mutations: {
        //提供更新状态的方法
        breadListMutations(state,list){
          state.breadListState=list;
          sessionStorage.setItem('breadListStorage',list);
        }
    },
    getters:{
        //提供获取状态的方法
        breadListState(state){
            //从sessionStorage中获取路由，如还没保存过则默认为首页
            var breadListStorageVal = sessionStorage.getItem('breadListStorage');
            return (breadListStorageVal!=null?JSON.parse(breadListStorageVal):state.breadListState) || [];
        }
    }
  
  }

export default breadlist