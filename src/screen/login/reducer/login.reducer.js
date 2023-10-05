import { createSlice } from '@reduxjs/toolkit';


export const loginSlice = createSlice(
    {
        name: 'login',
        initialState: {
            auth:false,
            form: {
                correo: "",
                clave: ""
            },
            is:{
                isLoading: false,
                isSuccess:false,
                isError:false
            },  
            userID:0,
            progress:[]
        },
        reducers: {
            setAuth: (state,action) =>{
                state.auth = true
            },
            setClose: (state,action)=>{
                state.auth= false
            },
            setProgress: (state, action) =>{
                state.progress = action.payload.progress
                state.userID = action.payload.userID
            },
            setDataForm: (state, action) => {
                state.form = {
                    ...state.form,
                    [action.payload.key] : action.payload.value
                }
            },
            setIsLoading: (state, action) => {
                switch (action.payload.type) {
                    case "sucess":
                        state.is={
                            ...state.is,
                            isLoading:false,
                            isError:false,
                            isSuccess:true
                        }
                        console.log(state)
                        break;
                    case "loading":
                        state.is={
                            ...state.is,
                            isLoading:true,
                            isError:false,
                            isSuccess:false
                        }
                        break
                    case "error":
                        state.is={
                            ...state.is,
                            isLoading:false,
                            isError:true,
                            isSuccess:false
                        }
                        break
                    case "":
                        state.is={
                            ...state.is,
                            isLoading:false,
                            isError:false,
                            isSuccess:false
                        }
                        break;
                }
                
            }
        }
    }
)

export const {
    setDataForm,
    setIsLoading,
    setProgress,
    setAuth,
    setClose
} = loginSlice.actions



export default loginSlice.reducer