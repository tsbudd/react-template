import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {templateSlice} from "./slices/templateSlice";
import thunk from "redux-thunk";
import {templateSession} from "./slices/templateSession";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    session: persistReducer(persistConfig, templateSession.reducer),
    data: templateSlice.reducer
})

// Redux Store instantiation
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk),

    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)