/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-26 17:49:41
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 13:31:53
 * @Description: 
 */
import { ConfigState, ConfigAction } from './types';
import { CONFIG } from './actions-types';
import { config_types } from '@/types/config';

const initState: ConfigState = {
    config: {} as config_types
}

const configReducer = (state = initState, action: ConfigAction) => {
        
    switch (action?.type) {
        case CONFIG.FETCH_CONFIG_SUCCESS:
            return {
                ...state,
                config: ''
            }
        default:
            return {
                ...state
            }
    }
}

export default configReducer;