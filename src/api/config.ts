/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:53:00
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 19:24:02
 * @Description: 
 */

import service from '@/utils/service';

export const configApi = () => service.post('/api/configs');
