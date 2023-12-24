import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './auth.service';
import { toast } from 'react-toastify';

const initialState = {
  login: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  signUp: {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  }
};

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async ({ payload, successCallBack }, thunkAPI) => {
    try {
      const response = await authService.login(payload);
      if (response.message === "Success") {
        toast.success('Login successfully');
        successCallBack(response);
        localStorage.setItem('user', JSON.stringify(response));
        return response?.data;
      } else {
        return toast.error(response.message);
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);
// signUp user
export const signUp = createAsyncThunk(
  'auth/register',
  async ({ payload, successCallBack }, thunkAPI) => {
    try {
      const response = await authService.signUp(payload);
      if (response.message === "Success") {
        successCallBack(response);
        toast.success('Registered successfully');
        return response;
      } else {
        return toast.error(response.message);
      }

      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue({ payload: error });
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.login.isLoading = true;
        state.login.message = '';
        state.login.isError = false;
        state.login.isSuccess = false;
        state.login.data = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.login.isLoading = false;
        state.login.isSuccess = true;
        state.login.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.login.message = action.payload.message;
        state.login.isLoading = false;
        state.login.isError = true;
        state.login.data = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signUp.isLoading = false;
        state.signUp.isSuccess = true;
        state.signUp.data = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUp.message = '';
        state.signUp.isLoading = false;
        state.signUp.isError = true;
        state.signUp.data = null;
      })
      .addCase(signUp.pending, (state) => {
        state.signUp.isLoading = true;
        state.signUp.message = '';
        state.signUp.isError = false;
        state.signUp.isSuccess = false;
        state.signUp.data = null;
      });
  }
});

export default authSlice.reducer;
