import React from 'react';
import axios from "../../../../Utilidades/axios/sites-axios"
export const guiasHook = ()=>{
    const [departamentos , setDepartamentos ] =React.useState([])

    const mostrarDepartamentos  =async ()=>{
         try{
            const {data} = await axios.get("cities")
            setDepartamentos(data)
            console.log(data)
         }catch(e){
             console.log(e)
            setDepartamentos([])
         }
    }

    return {
        departamentos,
        mostrarDepartamentos
    }
}