import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const initialState = {
    user: null,
    token: null,
};

export const signUp = createAsyncThunk('signUp', async (body) => {
    try {
        const res = await fetch('http://182.176.169.225:19008/api/v1/users/signUp', {
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



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token');
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user');
        },
        logout: (state, action) => {
            state.token = null;
            state.msg = localStorage.clear();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = payload.error || '';
                state.msg = payload.msg || '';
            })
            .addCase(signUp.rejected, (state) => {
                state.loading = false;
            })
            .addCase(signIn.pending, (state) => {
                state.loading = true;
            })
            .addCase(signIn.fulfilled, (state, { payload: { error, token, user, msg } }) => {
                state.loading = false;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = msg;
                    state.token = token;
                    state.user = user;

                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', token);
                    localStorage.setItem('msg', msg);
                }
            })
            .addCase(signIn.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer;
