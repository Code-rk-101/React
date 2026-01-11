import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counter";
import counterPrivacy from "./privacy";

const counterStore = configureStore(
    {
        reducer:
        {
            counter: counterSlice.reducer,
            privacy_toggle: counterPrivacy.reducer,
        }
    }
);

export const counterPrivacyAction = counterPrivacy.actions;
export const counterAction = counterSlice.actions;
export default counterStore;