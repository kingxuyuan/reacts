/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-26 17:48:53
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-26 18:32:46
 * @Description: 
 */
import { CONFIG } from './actions-types';
import {
    fetch_config_request_types,
    fetch_config_success_payload_types
} from './types';

export const fetchConfigRequest = (): fetch_config_request_types => ({
    type: CONFIG.FETCH_CONFIG_REQUEST
});

export const fetchConfigSuccess = (payload: fetch_config_success_payload_types) => ({
    type: CONFIG.FETCH_CONFIG_SUCCESS,
    payload
})

export const fetchConfigFail = (payload: fetch_config_success_payload_types) => ({
    type: CONFIG.FETCH_CONFIG_SUCCESS,
    payload
})