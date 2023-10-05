import { createSlice } from "@reduxjs/toolkit";



export const guiasOneSlice = createSlice({
    name:"guiasOne",
    initialState:{
        sections:[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setSections :(state,action) => {
            state.sections = action.payload
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
    setSections,
    setIsLoading
} = guiasOneSlice.actions


export default guiasOneSlice.reducer