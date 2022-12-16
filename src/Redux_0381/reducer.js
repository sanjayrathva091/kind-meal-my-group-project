import * as types from "./actionType"
const initial ={
    isLoading:false,
    Data:[],
    isError :false
}

const Reducer1 =(state=initial,action)=>{
    const{type,payload} = action
    switch(type){
        case types.Get_data:return{...state,isLoading:true}
        case types.Get_data_success:return{...state,isLoading:false,Data:payload}
        case types.Get_data_failure:return{...state,isError:true,Data:[]}
        
        case types.Edit_Req:return{...state,isLoading:true}
        case types.Edit_Req_Success:return{...state,isLoading:false,Data:[...state.Data,payload]}
        case types.Edit_Req_Failure:return{...state,isError:true,Data:[]}
        
        default :return state 
    }
}
export{Reducer1}