/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:20:27
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-28 20:21:05
 * @Description: 全局状态
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { fetchConfigRequest } from './configActions';
import { config_types } from '@/types/config';
import sessionCache from '@/utils/sessionCache';

interface deleteRouteTypes {
    path: string
    fn: () => void
}

interface ConfigState {
    config: config_types
    token: string
    value: number
    routeHistory: string[]
}

const initialState: ConfigState = {
    config: {} as config_types,
    token: sessionCache.sessionGet('token') || '',
    value: 0,
    routeHistory: sessionCache.sessionGet('routeHistory') || ['/home'],
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
        setRouteHistory: (state, action: PayloadAction<string>) => {
            state.routeHistory.push(action.payload);
            sessionCache.sessionSet('routeHistory', state.routeHistory);
        },
        deleteRoute: (state, action: PayloadAction<deleteRouteTypes>) => {
            console.log(action);
            
            const idx = state.routeHistory.indexOf(action.payload.path);
            console.log(idx);
            if(idx > -1) {
                state.routeHistory.splice(idx, 1);
                action.payload.fn();
            }
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

export const { setToken, clearToken, setRouteHistory, deleteRoute } = configSlice.actions;

export const getToken = (state: RootState) => state.config.token;
export const getConfig = (state: RootState) => state.config.config;
export const getRouteHistory = (state: RootState) => state.config.routeHistory;

export default configSlice.reducer;