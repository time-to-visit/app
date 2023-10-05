import * as React from "react"



export const useForm = (initialState)=>{
    const [ state,setState ] = React.useState(initialState)

    const changeData = (index,value)=>{
        setState((state)=>({
            ...state,
            [index]:value
        }))
    }

    const clear=()=>{
        setState(initialState)
    }

    return {
        changeData,
        clear,
        state
    }
}