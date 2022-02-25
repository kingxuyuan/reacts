/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-25 13:20:53
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-25 13:42:46
 * @Description: 
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import sessionCache from '@/utils/sessionCache';

interface userInfoTypes {
    name: string
}

interface initStateTypes {
    token: string
    userInfo: userInfoTypes
}

const initialState: initStateTypes = {
    token: sessionCache.sessionGet('token') || '',
    userInfo: sessionCache.sessionGet('userInfo') || {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            sessionCache.sessionSet('token', action.payload);
        },
        clearToken: (state) => {
            state.token = '';
            sessionCache.sessionRemove('token');
        },
        setUserInfo: (state, action: PayloadAction<userInfoTypes>) => {
            state.userInfo = action.payload;
            sessionCache.sessionSet('userInfo', action.payload);
        }
    }
})

export const { setUserInfo } = userSlice.actions;
export const { setToken, clearToken } = userSlice.actions;

export const getInitialState = userSlice.getInitialState;

export const getToken = (state: RootState) => state.user.token;
export const getUserInfo = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;