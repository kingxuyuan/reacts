/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:33:15
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 16:35:16
 * @Description: 
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;