import axios from "../../../Utilidades/axios/sites-axios"
import {  DOMAIN_SITES } from "../../../constant/url"
import { generateQueryParams } from "../../../Utilidades/url"



const seeSites = async (filter ={}) =>{
    try{
    const query = generateQueryParams(filter)
   const url = DOMAIN_SITES.SITES_ENDPOINT + "?" + query
        const { data } = await axios.get(url)
        return data.data
    }catch(e){
        return []
    }
}


const findCategory = async()=>{
    const { data } = await axios.get(DOMAIN_SITES.SITES_CATEGORY)
    if(data.status_code == 200){
        return data.data
    }else{
        return []
    }
}


export {
    seeSites,
    findCategory
}