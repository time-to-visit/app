import axios from "../../../../Utilidades/axios/sites-axios"
import { DOMAIN_GUIDES } from "../../../../constant/url"


const seeLevelOne = async (id)=>{
    try{
        const { data } = await axios.get(`${DOMAIN_GUIDES.GUIDES_LEVEL_CONTAINER}/${id}`) 
        return data.data
        con
    }catch(e){
        return []
    }
}



export {
    seeLevelOne
}