/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 13:10:30
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-18 15:31:18
 * @Description: 
 */
import { createSlice } from '@reduxjs/toolkit';
import sessionCache from '@/utils/sessionCache';
import { RootState } from '../../rootReducer';
import { loginAction } from './loginAction';

const initialState = {
    token: sessionCache.sessionGet('token') || '',
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            sessionCache.sessionSet('token', action.payload);
        },
        clearToken: (state) => {
            state.token = '';
            sessionCache.sessionSet('token', '');
        }
    },
    extraReducers: {
        [loginAction.rejected.toString()]: (state, action) => {
            console.log(state, action);
        },
        [loginAction.fulfilled.toString()]: (state, action) => {
            console.log(state, action);
        },
    }
});

export const { setToken, clearToken } = loginSlice.actions;

export const getToken = (state: RootState) => state.user.login.token;

export default loginSlice.reducer;