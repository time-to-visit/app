import { createSlice } from "@reduxjs/toolkit";



export const levelsSlice = createSlice({
    name:"levelsOne",
    initialState:{
        title:"",
        containerLevel:[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setTitle : (state,action)=>{
            state.title = action.payload
        },
        setContainerLevels :(state,action) => {
            state.containerLevel = action.payload
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
    setContainerLevels,
    setIsLoading,
    setTitle
} = levelsSlice.actions


export default levelsSlice.reducer