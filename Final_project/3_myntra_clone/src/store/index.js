import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./Items";
import FetchStatusSlice from "./fetchStatus.js";
import bagSlice from "./bag.js";

const myntraStore = configureStore(
    {
        reducer:
        {
            items: itemsSlice.reducer,
            fetchStatus: FetchStatusSlice.reducer,
            bag: bagSlice.reducer
        }
    }
)

export default myntraStore;