import { createSlice } from '@reduxjs/toolkit';


export const registerSlice = createSlice(
    {
        name: 'register',
        initialState: {
            form: {
                nombres: "",
                apellidos: "",
                nombre_usuario: "",
                correo: "",
                tipo_usuario: "USER",
                clave: "",
            },
            is: {
                isLoading: false,
                isSuccess: false,
                isError: false
            }
        },
        reducers: {
            setDataForm: (state, action) => {
                state.form[action.payload.key]= action.payload.value
            
            },
            setEmpty:(state,action)=>{
                state.form ={
                    nombres: "",
                    apellidos: "",
                    nombre_usuario: "",
                    correo: "",
                    tipo_usuario: "USER",
                    clave: "",
                }
            },
            setIsLoading: (state, action) => {
                state.isLoading = action.payload
            },
            setIsLoading: (state, action) => {
                switch (action.payload.type) {
                    case "sucess":
                        state.is = {
                            ...state.is,
                            isLoading: false,
                            isError: false,
                            isSuccess: true
                        }
                        console.log(state)
                        break;
                    case "loading":
                        state.is = {
                            ...state.is,
                            isLoading: true,
                            isError: false,
                            isSuccess: false
                        }
                        break
                    case "error":
                        state.is = {
                            ...state.is,
                            isLoading: false,
                            isError: true,
                            isSuccess: false
                        }
                        break
                    case "":
                        state.is = {
                            ...state.is,
                            isLoading: false,
                            isError: false,
                            isSuccess: false
                        }
                        break;
                }

            }
        }
    }
)


export const {
    setDataForm,
    setIsLoading
} = registerSlice.actions


export default registerSlice.reducer