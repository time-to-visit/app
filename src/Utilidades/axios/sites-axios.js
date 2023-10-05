const Axios = require('axios');
import AsyncStorage from '@react-native-async-storage/async-storage';
const conection = () => {
    const axiosConnect = Axios.create({
        baseURL: "",
        timeout:2000
    });
    axiosConnect.interceptors.request.use(
        async function (config) { 
            let token = await AsyncStorage.getItem("token");
            console.log("toke =>" +token)
            config.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':"Bearer " +((token) ? token : '')
            }

            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
    return axiosConnect;
}

export default conection();