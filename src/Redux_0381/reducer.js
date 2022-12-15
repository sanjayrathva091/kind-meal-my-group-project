import * as types from "./actionType"
const initial ={
    isLoading:false,
    Data:[],
    isError :false
}

const reducer =(state=initial,action)=>{
    const{type,payload} = action
    switch(type){
        case types.Get_data:return{...state,isLoading:true}
        case types.Get_data_success:return{...state,isLoading:false,Data:payload}
        case types.Get_data_failure:return{...state,isError:true,Data:[]}
        default :return state 
    }
}
export{reducer}