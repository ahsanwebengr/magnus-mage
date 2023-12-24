import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardService from './dashboard.service';

const initialState = {
    dashboard: {
        data: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ''
    }
};

// Dashboard
export const dashboard = createAsyncThunk(
    'dashboard/getData',
    async ({ successCallBack }, thunkAPI) => {
        try {
            const response = await dashboardService.getDashboardData();
            if (response.message === "Success") {
                successCallBack(response);
                return response?.data;
            }
            return thunkAPI.rejectWithValue(response);
        } catch (error) {
            return thunkAPI.rejectWithValue({ payload: error });
        }
    }
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(dashboard.pending, (state) => {
                state.dashboard.isLoading = true;
                state.dashboard.message = '';
                state.dashboard.isError = false;
                state.dashboard.isSuccess = false;
                state.dashboard.data = null;
            })
            .addCase(dashboard.fulfilled, (state, action) => {
                state.dashboard.isLoading = false;
                state.dashboard.isSuccess = true;
                state.dashboard.data = action.payload;
            })
            .addCase(dashboard.rejected, (state, action) => {
                state.dashboard.message = action.payload.message;
                state.dashboard.isLoading = false;
                state.dashboard.isError = true;
                state.dashboard.data = null;
            });
    }
});

export default dashboardSlice.reducer;
