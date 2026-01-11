import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name:"counter",
        initialState: 
        {
            num : 0,
        },
        reducers:
        {
            increment: (State,action) =>
            {
                if(action.payload===false)
                    State.num++;
            },
            decrement: (State,action) =>
            {
                if(action.payload===false)
                    State.num--;
            },
            add: (State,action) =>
            {
                if(action.payload.Privacy_status === false)
                    State.num += Number(action.payload.value);
            },
            subtract: (State,action) =>
            {
                if(action.payload.Privacy_status === false)
                    State.num -= Number(action.payload.value);
            }
        }
    }

);
export default counterSlice;