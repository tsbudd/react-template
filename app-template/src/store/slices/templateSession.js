import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: "tsbudd.com"
};

export const templateSession = createSlice({
    name: "template",
    initialState,
    reducers: {
        resetSession: (state) => {
            state.user = initialState.user;
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {
    resetState,
    updateUser
} = templateSession.actions