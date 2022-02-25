/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:20:27
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-25 13:38:14
 * @Description: 全局状态
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { fetchConfigRequest } from './configActions';
import { config_types } from '@/types/config';

interface ConfigState {
    config: config_types
}

const initialState: ConfigState = {
    config: {} as config_types,
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {

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

export const getConfig = (state: RootState) => state.config.config;

export default configSlice.reducer;