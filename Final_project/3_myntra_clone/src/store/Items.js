import {createSlice} from "@reduxjs/toolkit"

const itemsSlice = createSlice(
    {
        name: "items",
        initialState:[],
        reducers:
        {
            addInitialItems:(State,actions)=>
            {
                return actions.payload ;
            }
        },
    }
)

export const itemsAction = itemsSlice.actions;
export default itemsSlice;