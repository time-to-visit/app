import { createSlice } from "@reduxjs/toolkit";



export const routesSlice = createSlice({
    name:"routes",
    initialState:{
        routes :[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setRoutes:(state,action)=>{
            state.routes = action.payload
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
    setRoutes,
    setIsLoading
} = routesSlice.actions


export default routesSlice.reducer