import { createSlice } from "@reduxjs/toolkit";



export const stepsSlice = createSlice({
    name:"steps",
    initialState:{
        steps :[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setSteps:(state,action)=>{
            state.steps = action.payload
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
    setSteps,
    setIsLoading
} = stepsSlice.actions


export default stepsSlice.reducer