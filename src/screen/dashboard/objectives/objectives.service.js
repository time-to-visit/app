import axios from "../../../Utilidades/axios/sites-axios"
import { DOMAIN_GUIDES } from "../../../constant/url"


const seeObjectives = async (id) =>{
    try{
        const {data } = await axios.get(`${DOMAIN_GUIDES.GUIDES_OBJECTIVE}/${id}`)
        return data.data
    }catch(e){
        return []
    }
}




export {
    seeObjectives
}