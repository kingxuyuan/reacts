/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-26 17:48:53
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 13:19:44
 * @Description: 
 */
import { CONFIG } from './actions-types';
import {
    fetch_config_request_types,
    fetch_config_success_types
} from './types';
import { config_types } from '@/types/config';

export const fetchConfigRequest = (callback: () => void): fetch_config_request_types => ({
    type: CONFIG.FETCH_CONFIG_REQUEST,
    callback
});

export const fetchConfigSuccess = (payload: config_types): fetch_config_success_types => ({
    type: CONFIG.FETCH_CONFIG_SUCCESS,
    payload
})

export const fetchConfigFail = (payload: any) => ({
    type: CONFIG.FETCH_CONFIG_SUCCESS,
    payload
})