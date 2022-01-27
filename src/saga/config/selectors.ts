/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-26 18:42:44
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 12:27:35
 * @Description: 
 */
import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const getConfig = (state: RootState) => state.config;

export const configSelector = createSelector(getConfig, config => config)