import { createSlice } from "@reduxjs/toolkit";

export const guiasSlice = createSlice({
    name:"guias",
    initialState:{
        guides :[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setGuides :(state,action) => {
            state.guides = action.payload
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
    setGuides,
    setIsLoading
} = guiasSlice.actions


export default guiasSlice.reducer