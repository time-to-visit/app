import { createSlice } from "@reduxjs/toolkit";



export const levelsSlice = createSlice({
    name:"levels",
    initialState:{
        levels :[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setLevels :(state,action) => {
            state.levels = action.payload
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
    setLevels,
    setIsLoading
} = levelsSlice.actions


export default levelsSlice.reducer