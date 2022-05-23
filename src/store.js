import {configureStore} from '@reduxjs/toolkit';
import userInfoSlice from './Slices/userInfoSlice';
import gridItemsSlice from './Slices/gridItemsSlice';
export const store = configureStore({
    reducer:{
        userInfoSlice : userInfoSlice,
        gridItemsSlice : gridItemsSlice
    },
    devTools:true,
})