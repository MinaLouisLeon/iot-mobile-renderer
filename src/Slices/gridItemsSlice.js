import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    gridItemsData : {}
};

export const gridItemsSlice = createSlice({
    name : "gridItemsSlice",
    initialState,
    reducers : {
        setGridItemsData:(state,action) => {
            state.gridItemsData = action.payload;
        }
    }
});

export const {setGridItemsData} = gridItemsSlice.actions;

export default gridItemsSlice.reducer;