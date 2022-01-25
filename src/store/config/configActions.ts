/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 18:13:50
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 19:24:57
 * @Description: 
 */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { configApi } from '@/api/config';


export const configActions = createAsyncThunk('config/configStatus', async (fn: any) => {
    const res: any = await configApi();
    res?.code === 200 && fn();
    return res;
});