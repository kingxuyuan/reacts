/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 18:13:50
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-28 16:04:43
 * @Description: 
 */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { configApi } from '@/api/config';

export const fetchConfigRequest = createAsyncThunk('config/configStatus', async (fn: any) => {
    const res: any = await configApi();
    res?.code === 200 && fn();
    return res;
});