/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:20:27
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 13:30:04
 * @Description: 全局状态
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../rootReducer';
import { fetchConfig } from './configActions';
import { config_types } from '@/types/config';

interface ConfigState {
    menuFold: boolean
    setting: config_types
}

const initialState: ConfigState = {
    menuFold: false,
    setting: {} as config_types,
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setMenuFold: (state, action: PayloadAction<boolean>) => {
            state.menuFold = action.payload;
        }
    },
    extraReducers: {
        [fetchConfig.fulfilled.toString()]: (state, action: PayloadAction<config_types>) => {
            state.setting = {
                ...state.setting,
                ...action?.payload
            }
        },
        [fetchConfig.rejected.toString()]: (state, action) => {
            console.log(action, 999999);

        }
    },

    // extraReducers: (builder) => {
    //     builder.addCase(fetchConfig.fulfilled, (state, action: PayloadAction<any>) => {
    //         state.config = {
    //             ...state.config,
    //             ...action?.payload?.data
    //         } as config_types
    //     });
    //     builder.addCase(fetchConfig.pending, (state, action: PayloadAction<any>) => {

    //     });
    //     builder.addCase(fetchConfig.rejected, (state, action: PayloadAction<any>) => {
    //         console.log(2222222222);

    //     });
    // }
})

export const { setMenuFold } = configSlice.actions;

export const getConfig = (state: RootState) => state.config.setting;
export const getMenuFold = (state: RootState) => state.config.menuFold;

export default configSlice.reducer;