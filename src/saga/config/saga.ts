/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-26 17:50:44
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 13:12:35
 * @Description: 
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import { CONFIG } from './actions-types';
import { fetchConfigSuccess } from './actions';
import { fetch_config_request_types } from './types';
import { configApi } from '@/api/config';

function* configFetchData({ callback }: fetch_config_request_types): any {
    try {
        const res = yield call(configApi);
        yield put(fetchConfigSuccess(res));

        callback();

    } catch (error) {
        yield put({
            type: CONFIG.FETCH_CONFIG_FAIL,
            payload: error
        })
    }
}

// 然后在每次 FETCH_CONFIG_REQUEST action 被发起时启动上面的任务
export default function* watchConfigSage() {
    yield takeEvery(CONFIG.FETCH_CONFIG_REQUEST, configFetchData);

    // 注意：上面的 takeEvery 函数可以使用下面的写法替换    
    // while(true){
    //     yield take(CONFIG.FETCH_CONFIG_REQUEST);
    //     yield fork(fetchData);
    // }
}