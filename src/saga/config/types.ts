/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-26 17:50:38
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 13:20:06
 * @Description: 
 */
import { CONFIG } from './actions-types';
import { config_types } from '@/types/config';

export interface ConfigState {
    config: config_types
};

export interface fetch_config_request_types {
    type: typeof CONFIG.FETCH_CONFIG_REQUEST
    callback: () => void
};

export interface fetch_config_success_types {
    type: typeof CONFIG.FETCH_CONFIG_SUCCESS
    payload: config_types
};

interface types {
    type: string
}

export type ConfigAction = fetch_config_request_types | fetch_config_success_types | types;