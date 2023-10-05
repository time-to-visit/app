import axios from "../../Utilidades/axios/sites-axios"
import { DOMAIN_USER } from "../../constant/url"
import AsyncStorage from '@react-native-async-storage/async-storage';


const loginUser = async (user) => {
    console.log(user)
    try{
        const { data } = await axios.post(DOMAIN_USER.USER_AUTH, user)
        console.log(data)
        if (data.length) {
            return {
                is_ok:false
            }
        } else if (data.status_code === 200) {
            AsyncStorage.setItem("token",data.data.token)
            return {
                is_ok:true,
                token:data.data.token,
                progress : data.data.progress,
                userID : data.data.user_id 
            }
        }
        return {
            is_ok:false
        }
    

    }catch(e){
        console.log(e)
        return {
            is_ok:false
        }
    }
}



export {
  loginUser,  
}