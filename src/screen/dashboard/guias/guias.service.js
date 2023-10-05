import axios from "../../../Utilidades/axios/sites-axios"
import { DOMAIN_GUIDES } from "../../../constant/url"

const seeGuides = async () =>{
    try{
        const { data } = await axios.get(DOMAIN_GUIDES.GUIDES_ENPOINT)
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
    seeGuides,
    findCategory
}