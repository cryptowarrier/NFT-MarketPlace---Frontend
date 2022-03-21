import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chainId: 3
}

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setChainId (state, action) {
      state.chanId = action.payload;
    }
  },
  extraReducers: {}
});

export const { setChainId } = networkSlice.actions;
export default networkSlice.reducer;