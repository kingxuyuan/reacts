/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:20:27
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 19:26:45
 * @Description: 全局状态
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { configActions } from './configActions';
import { config_types } from '@/types/config';

interface ConfigState {
    config: config_types
}

const initialState: ConfigState = {
    config: {} as config_types
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig: (state, action: PayloadAction<any>) => {
            console.log(state, action);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(configActions.fulfilled, (state, action: PayloadAction<any>) => {
            state.config = {
                ...state.config,
                ...action?.payload?.data
            } as config_types
        });
    }
})

export const { setConfig } = configSlice.actions;

export const selectConfig = (state: RootState) => state.config.config;

export default configSlice.reducer;