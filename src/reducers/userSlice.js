import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userService } from '../service/user.service';
import { userApiService } from '../service/api.service';

// save profile

export const saveProfile = createAsyncThunk('user/saveProfile', async (payload) => {
  if(!!payload._id) {
    const response = await userApiService.updateUserById(payload);
    return response.data.data;
  } else {
    const response = await userApiService.createUser(payload);
    return response.data.data;
  }
});

export const getUserByWallet = createAsyncThunk('user/getUserByWallet', async (payload) => {
  const response = await userApiService.getUserByWallet(payload);
  return response.data.data;
});

const initialState = {
  userInfo: userService.getUser(),
  profile: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.userInfo = action.payload;
      state.profile = action.payload;
      userService.saveUser(action.payload);
    },
    logout(state) {
      state.userInfo = null;
      userService.removeUser();
    }
  },
  extraReducers: {
    [saveProfile.pending]: (state) => {
      state.loading = true;
    },
    [saveProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.profile = action.payload;
      userService.saveUser(action.payload);
    },
    [saveProfile.rejected]: (state) => {
      state.loading = false;
    },
    [getUserByWallet.pending]: (state) => {
      state.loading = true;
    },
    [getUserByWallet.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [getUserByWallet.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export const { login, logout} = userSlice.actions;
export default userSlice.reducer;