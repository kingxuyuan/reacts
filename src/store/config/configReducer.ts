/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:20:27
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-30 14:07:18
 * @Description: 全局状态
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { fetchConfigRequest } from './configActions';
import { config_types } from '@/types/config';
import sessionCache from '@/utils/sessionCache';

interface ConfigState {
    config: config_types
    token: string
}

const initialState: ConfigState = {
    config: {} as config_types,
    token: sessionCache.sessionGet('token') || '',
}

export const configSlice = createSlice({
    name: 'config',
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchConfigRequest.fulfilled, (state, action: PayloadAction<any>) => {
            state.config = {
                ...state.config,
                ...action?.payload?.data
            } as config_types
        });
    }
})

export const { setToken, clearToken } = configSlice.actions;

export const getToken = (state: RootState) => state.config.token;
export const getConfig = (state: RootState) => state.config.config;

export default configSlice.reducer;