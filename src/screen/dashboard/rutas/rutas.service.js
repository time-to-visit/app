import axios from "../../../Utilidades/axios/sites-axios"
import { DOMAIN_ROUTES, DOMAIN_USER } from "../../../constant/url"


const seeRutas =async  ()=>{
    try{
        const {data} = await axios.get(DOMAIN_ROUTES.ROUTES_ENDPOINT)
        return data.data
    }catch(e){
        return []
    }
}


const seeSteps =async  (idRoute)=>{
    try{
        const {data} = await axios.get(DOMAIN_ROUTES.ROUTES_STEPS + "/"+idRoute)
        return data.data
    }catch(e){
        return []
    }
}



const progressRoute = async (progress) =>{
    try{
        const {data} = await axios.post(DOMAIN_USER.USER_PROGRESS, progress)
        return data.data
    }catch(e){
        console.log(e.response.data)
        return []
    }
}


export {
    seeRutas,
    seeSteps,
    progressRoute
}