/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 18:13:50
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-26 19:53:22
 * @Description: 
 */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginApi } from '@/api/user';
import { login_request_types } from '@/types/user';

export const loginAction = createAsyncThunk('user/userStatus', async (params: login_request_types, { rejectWithValue }) => {
    try {
        return await loginApi(params);
    } catch (err) {
        return rejectWithValue(err);
    }
});