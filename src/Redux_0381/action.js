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
    }
 
    else{
        
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


// --------------data2----
const Getdata1 =()=>{
    return {
        type:types.Get_data1
    }
    }
    
    
    const Getdatasuccess1 =(payload)=>{
        return{
            type:types.Get_data_success1,
        payload
        }
    }
    
    const Getdatafailure1 =()=>{
       return{
        type:types.Get_data_failure1
       }
    }

const GetdataMainfn2=({page})=>(dispatch)=>{
    dispatch(Getdata1())
    return axios.get(`https://kindmeals.onrender.com/KindMonents_Lower?_page=${page}&_limit=6`)
    .then((res)=>{
dispatch(Getdatasuccess1(res.data))
// console.log(res.data)
    }).catch((err)=>{
        dispatch(Getdatafailure1())
    }) 
}




    // -----------------------EDIT REQ----

const EditReq = ()=> {
    return{
        type:types.Edit_Req
    }
}

const EditReqSuccess = (payload)=> {
    return{
        type:types.Edit_Req_Success,
        payload
    }
}


const EditReqFailure = ()=> {
    return{
        type:types.Edit_Req_Failure
    }
}

const EditReqMainFn=(url,payload)=>(dispatch)=>{
    dispatch(EditReq())
return axios.patch(url,payload)
.then((res)=>{
    dispatch(EditReqSuccess(res.data))
})
.catch((err)=>{
    dispatch(EditReqFailure())
})
}



export {GetdataMainfn,Getdata1,Getdatafailure1,Getdatasuccess1,
    EditReqMainFn,EditReq,EditReqSuccess,EditReqFailure,GetdataMainfn2

}