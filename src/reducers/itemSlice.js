import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { itemService } from '../service/api.service';


// add item
export const createItem = createAsyncThunk('item/createItem', async(payload) => {
  const response = await itemService.createItem(payload);
  return response.data.data;
});
// get items
export const getItems = createAsyncThunk('item/getItems', async(payload) => {
  const response = await itemService.getItems(payload);
  return response.data.data;
})


const initialState = {
  items: [],
  loading: false,
  total: 0,
}

const memberSlice = createSlice({
  name: 'item',
  initialState,
  extraReducers: {
    [createItem.pending]: (state) => {
      state.loading = true;
    },
    [createItem.fulfilled]: (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
      state.total += 1;
    },
    [createItem.rejected]: (state) => {
      state.loading = false;
    },
    [getItems.pending]: (state) => {
      state.loading = true;
    },
    [getItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [getItems.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export default memberSlice.reducer;