import * as types from "./actionType"
const initial ={
    isLoading:false,
    Data:[],
    isError :false
}

const Reducer2 =(state=initial,action)=>{
    const{type,payload} = action
    switch(type){
        case types.Get_data1:return{...state,isLoading:true}
        case types.Get_data_success1:return{...state,isLoading:false,Data:payload}
        case types.Get_data_failure1:return{...state,isError:true,Data:[]}
        
        default :return state 
    }
}
export{Reducer2}