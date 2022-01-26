/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-26 17:50:38
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-26 18:37:55
 * @Description: 
 */
import { CONFIG } from './actions-types';
import { config_types } from '@/types/config';

export interface ConfigState {
    config: config_types
}

export interface fetch_config_request_types {
    type: typeof CONFIG.FETCH_CONFIG_REQUEST
};

export type fetch_config_success_payload_types = config_types;

export interface fetch_config_success_types {
    type: typeof CONFIG.FETCH_CONFIG_SUCCESS
    payload: config_types
}

export type ConfigAction = fetch_config_success_types