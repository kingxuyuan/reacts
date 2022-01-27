/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 19:38:19
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 12:23:05
 * @Description: 
 */
import { combineReducers } from 'redux';

import configReducer from './config/reducer';

const rootReducer = combineReducers({
    config: configReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;