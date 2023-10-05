import { createSlice } from "@reduxjs/toolkit";



export const questionSlice = createSlice({
    name:"question",
    initialState:{
        answer:"",
        questions :[],
        objective:{},
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setObjective:(state,action)=>{
            state.objective = action.payload
        },
        setQuestion:(state,action)=>{
            state.questions = action.payload
        },
        setAnswer:(state,action) =>{
            state.answer = action.payload
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
    setObjective,
    setQuestion,
    setAnswer,
    setIsLoading
} = questionSlice.actions


export default questionSlice.reducer