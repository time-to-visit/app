import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice(
    {
        name: "map",
        initialState: {
            categorias: [],
            department :[],
            subcategorias:[],
            sites :[],
            isBotton:true,
            openSites:false,
            site:{},
            keyFilter:0,
            is:{
                isLoading:false,
                isSucess:false,
                isError :false
            }
        },
        reducers: {
            setOpen : (state,action)=>{
                state.isBotton =!state.isBotton
                    state.openSites = !state.isBotton
            },
            setCategorias: (state,action) => {
                state.categorias = action.payload
            },
            setSubcategorias : (state,action) =>{
                state.subcategorias = action.payload
            },
            setDepartment :(state,action) =>{
                state.department = action.payload
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
            },
            setKeyFilter : (state,action) =>{
                state.keyFilter = action.payload
            },
            setItemSites : (state,action) =>{
                state.sites = action.payload
            },
            setItemSite : (state,action) => {
                state.site = action.payload
            }
        }
    }
)



export const {
    setCategorias,
    setSubcategorias,
    setDepartment,
    setItemSites,
    setItemSite,
    setOpen,
    setKeyFilter,
    setIsLoading
} = mapSlice.actions


export default mapSlice.reducer