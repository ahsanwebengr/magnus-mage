import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const signUp = createAsyncThunk('auth/signUp', async (formData) => {
    const response = await fetch('http://182.176.169.225:19008/api/v1/users/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const userData = await response.json();
    return userData;
});

export const signIn = createAsyncThunk('signIn', async (body) => {
    try {
        const res = await fetch('http://182.176.169.225:19008/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const forgotPassword = createAsyncThunk('forgotPassword', async (body) => {
    try {
        const res = await fetch('http://182.176.169.225:19008/api/v1/users/forgotPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const verifyCode = createAsyncThunk('verifyCode', async (body) => {
    try {
        const res = await fetch('http://182.176.169.225:19008/api/v1/users/verifyCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const getBlogs = createAsyncThunk('blogs', async () => {
    try {
        const res = await fetch('http://182.176.169.225:19008/api/v1/blogs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const resetPassword = createAsyncThunk('resetPassword', async (body) => {
    try {
        const res = await fetch('http://182.176.169.225:19008/api/v1/users/resetPassword', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
});



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const {  } = authSlice.actions;

export default authSlice.reducer;
