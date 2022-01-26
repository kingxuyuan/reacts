/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 19:38:09
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-26 18:38:51
 * @Description: 
 */
import { all, fork } from 'redux-saga/effects';

import configSaga from './config/saga';

export default function* rootSage() {
    yield all([fork(configSaga)]);
}