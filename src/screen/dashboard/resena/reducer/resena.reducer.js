import { createSlice } from "@reduxjs/toolkit";



export const reviewSlice = createSlice({
    name:"review",
    initialState:{
        textComment :"",
        comments :[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setComment:(state,action)=>{
            state.textComment = action.payload
        },
        setComments :(state,action) => {
            state.comments = action.payload
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
    setComment,
    setComments,
    setIsLoading
} = reviewSlice.actions


export default reviewSlice.reducer