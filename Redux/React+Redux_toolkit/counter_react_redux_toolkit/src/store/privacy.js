import { createSlice } from "@reduxjs/toolkit";

const counterPrivacy = createSlice(
    {
        name: "privacy_toggle",
        initialState: false,
        reducers:
        {
            switch: (State)=>
            {
                return  !State;
            }
        }
    }
);
export default counterPrivacy;