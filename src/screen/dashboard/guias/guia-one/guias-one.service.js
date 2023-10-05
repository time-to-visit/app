import axios from "../../../../Utilidades/axios/sites-axios"
import { DOMAIN_GUIDES } from "../../../../constant/url"




const seeGuidesOne =async (id) =>{
    try{
        const { data } = await axios.get(`${DOMAIN_GUIDES.GUIDES_ENPOINT}/${id}`)
        return data.data.section
    }catch(e){
        return []
    }
}



export {
    seeGuidesOne
}