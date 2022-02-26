/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:53:00
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-26 18:37:25
 * @Description: 用户模块
 */
import service from '@/utils/service';
import { login_request_types } from '@/types/user';

export const loginApi = (params: login_request_types) => service.post('http://10.8.3.18:3000/api/login', params);
