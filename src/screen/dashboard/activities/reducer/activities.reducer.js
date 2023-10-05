import { createSlice } from "@reduxjs/toolkit";



export const activitiesSlice = createSlice({
    name:"activities",
    initialState:{
        activities :[],
        is:{
            isLoading: false,
            isError:false
        },
    },
    reducers:{
        setActivities :(state,action) => {
            state.activities = action.payload
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
    setActivities,
    setIsLoading
} = activitiesSlice.actions


export default activitiesSlice.reducer