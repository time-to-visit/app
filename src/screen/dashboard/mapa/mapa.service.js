import  axios from  "../../../Utilidades/axios/sites-axios"
import {DOMAIN_SITES } from "../../../constant/url"
import { generateQueryParams } from "../../../Utilidades/url"

const findCategory = async()=>{
    const { data } = await axios.get(DOMAIN_SITES.SITES_CATEGORY)
    if(data.status_code == 200){
        return data.data
    }else{
        return []
    }
}


const findSites = async (filter = {})=> {
    const query = generateQueryParams(filter)
    console.log(DOMAIN_SITES.SITES_ENDPOINT + "?" + query)
    const { data } = await axios.get(DOMAIN_SITES.SITES_ENDPOINT + "?" + query)
    if(data.status_code == 200){
        return data.data
    }else{
        return []
    } 
}


const findSiteOne = async (id)=> {
    const { data } = await axios.get(DOMAIN_SITES.SITES_ENDPOINT + "/" + id)
    if(data.status_code == 200){
        return data.data
    }else{
        return null
    } 
}



const findMunicipalties = async ( ) =>{
    const { data } = await axios.get(DOMAIN_SITES.SITES_MUNICIPALITIES + "/1")
    if(data.status_code == 200){
        return data.data
    }else{
        return null
    } 
 }

export {
    findCategory,
    findSites,
    findSiteOne,
    findMunicipalties
}