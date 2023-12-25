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
  },
  forgotPassword: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
};

// Forget Password
export const forgotPassword = createAsyncThunk(
  'users/forgotPassword',
  async ({ payload, successCallBack }, thunkAPI) => {
    try {
      const response = await authService.forgotPassword(payload);
      if (response.message === 'Recovery code send to your email address') {
        toast.success(response.message);
        successCallBack(response);
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
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.forgotPassword.isLoading = false;
        state.forgotPassword.isSuccess = true;
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.forgotPassword.message = '';
        state.forgotPassword.isLoading = false;
        state.forgotPassword.isError = true;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPassword.isLoading = true;
        state.forgotPassword.message = '';
        state.forgotPassword.isError = false;
        state.forgotPassword.isSuccess = false;
      });
  }
});

export default authSlice.reducer;
