import axios from "../../../../Utilidades/axios/sites-axios"
import { DOMAIN_GUIDES } from "../../../../constant/url"



const seeLevel =async  (id)=>{
    try {
        const { data } = await axios.get(`${DOMAIN_GUIDES.GUIDES_LEVELS}/${id}`)
        return data.data
    }catch(e){
        return []
    }
}



export {
    seeLevel
}