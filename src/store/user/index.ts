/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 13:38:15
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-17 13:41:57
 * @Description: 
 */
import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './login/loginReducer';
import userInfoReducer from './userInfo/userInfoReducer';

const usertReducer = combineReducers({
    login: loginReducer,
    userInfo: userInfoReducer
});

export default usertReducer;