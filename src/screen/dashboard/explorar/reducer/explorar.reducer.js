import { createSlice } from "@reduxjs/toolkit";

export const explorarSlice = createSlice({
    name:"explorar",
    initialState:{
        sites :[],
        is:{
            isLoading: false,
            isError:false
        },
        categories :[],
        subcategories :[],
        department:[],
        query:{}
    },
    reducers:{
        setItemQuery : (state,action)=>{
            state.query[action.payload.item] = action.payload.value
        },
        setDepartment:(state,action) =>{
            state.department = action.payload
        },
        setSubCategories : (state,action)=>{
            state.subcategories = action.payload
        },
        setCategories :(state,action) =>{
            state.categories = action.payload
        },
        setSites :(state,action) => {
            state.sites = action.payload
        },
        setIsLoading: (state, action) => {
            switch (action.payload.type) {
               
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
})


export const {
    setSites,
    setIsLoading,
    setSubCategories,
    setCategories,
    setItemQuery,
    setDepartment
} = explorarSlice.actions


export default explorarSlice.reducer