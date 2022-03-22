/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 18:13:50
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-16 19:03:11
 * @Description: 
 */
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { configApi } from '@/api/config';

export const CONFIG = createAction('config/configStatus');

export const fetchConfig = createAsyncThunk(
    CONFIG.type, 
    async (args, { rejectWithValue }) => {
        try {
            const res: any = await configApi();
            if (!res) return rejectWithValue('error');

            if(res?.code === 200) return (res?.data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);