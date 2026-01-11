import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice(
    {
        name:"bag",
        initialState:[],
        reducers:
        {
            addToBag: (State,actions)=>
            {
                State.push(actions.payload);
            },
            removeToBag: (State,actions)=>
            {
                return State.filter((item)=> item !== actions.payload);
            }
        }
    }
);

export const bagSliceAction = bagSlice.actions;
export default bagSlice;