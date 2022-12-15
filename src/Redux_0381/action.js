import * as types from "./actionType"
import axios from "axios"
const Getdata =()=>{
return {
    type:types.Get_data
}
}


const Getdatasuccess =(payload)=>{
    return{
        type:types.Get_data_success,
    payload
    }
}

const Getdatafailure =()=>{
   return{
    type:types.Get_data_failure
   }
}

const GetdataMainfn =(data)=>(dispatch)=>{
    if(data){
        dispatch(Getdata())
        return axios.get(`https://kindmeals.onrender.com/KindMonents_upper?Location=${data}`)
        .then((res)=>{
    dispatch(Getdatasuccess(res.data))
    // console.log(res.data)
        }).catch((err)=>{
            dispatch(Getdatafailure())
        })
    }else{
        dispatch(Getdata())
        return axios.get(`https://kindmeals.onrender.com/KindMonents_upper`)
        .then((res)=>{
    dispatch(Getdatasuccess(res.data))
    // console.log(res.data)
        }).catch((err)=>{
            dispatch(Getdatafailure())
        }) 
    }
   
}

export {GetdataMainfn}