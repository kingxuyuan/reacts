/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:53:00
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-16 16:56:11
 * @Description: 
 */

import service from '@/utils/service';

export const configApi = () => service.post('/api/configs');
