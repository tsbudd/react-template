import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TemplateClient} from "../clients/templateClient";

const initialState = {
    count: 0,
    fact: {
        fetchStatus: "idle",
        data: "hello"
    }
};

export const fetchTemplateData = createAsyncThunk('/template/data', async() =>{
    const response = await TemplateClient.GetUselessFact();
    return response.data;
})

export const templateSlice = createSlice({
    name: "template",
    initialState,
    reducers: {
        resetState: (state) => {
            state.count = initialState.count;
            state.fact = initialState.fact;
        },
        incrementCount: (state) => {
            state.count = state.count + 1;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTemplateData.pending, (state) => {
                state.fact.fetchStatus = "Pending";
            })
            .addCase(fetchTemplateData.fulfilled, (state, action) => {
                state.fact.data = action.payload["text"];
                state.fact.fetchStatus = "Succeeded";
            })
            .addCase(fetchTemplateData.rejected, (state) => {
                state.fact.fetchStatus = "Failed";
            });
    }
});

export const {
    resetState,
    incrementCount
} = templateSlice.actions