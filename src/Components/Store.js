import {
    configureStore
} from "@reduxjs/toolkit";
import userReducer from "./Counter"; 

const store = configureStore({
    reducer: {
        usersInfo: userReducer, 
    },
});

export default store;
