import { createSlice } from "@reduxjs/toolkit";



export const objectiveSlice = createSlice({
    name:"objectives",
    initialState:{
        objectives :[],
        answers:[],
        effects:[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setEffects:(state,action)=>{
            state.effects = action.payload
        },
        setAnswers :(state,action)=>{
            const index=state.answers.findIndex((value)=> value.id === action.payload.id )
            if(index == -1){
                state.answers.push(action.payload)
            }else{
                state.answers[index] = action.payload
            }
        },
        cleanAnswer:(state,action)=>{
            state.answers=[]
        },
        setObjectives:(state,action)=>{
            state.objectives = action.payload
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
    setAnswers,
    setEffects,
    setObjectives,
    setIsLoading,
    cleanAnswer
} = objectiveSlice.actions


export default objectiveSlice.reducer