/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 13:10:05
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-17 13:31:56
 * @Description: 
 */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginApi } from '@/api/user';
import { login_request_types } from '@/types/user';

export const loginAction = createAsyncThunk(
    'user/login', 
    async (params: login_request_types, { rejectWithValue }) => {
        try {
            const res:any = await loginApi(params);
            if(!res) return rejectWithValue('error');
            if(res.code === 200) return res.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);