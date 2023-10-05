import axios from "../../Utilidades/axios/sites-axios"
import { DOMAIN_USER } from "../../constant/url"



const registerUser = async(user)=>{
    try{
        const { data } = await axios.post(DOMAIN_USER.USER_REGISTER,user)
        console.log(data)
        if(data.status_code == 201){
            return data.data
        }
        return null
    }catch(e){
        console.log(e.response)
        return null
    }
}  



export {
    registerUser
}