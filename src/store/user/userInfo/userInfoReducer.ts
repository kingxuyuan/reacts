/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-25 13:20:53
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-17 13:43:31
 * @Description: 
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../rootReducer';
import sessionCache from '@/utils/sessionCache';
// import { loginAction } from './userInfoActionsions';

interface userInfoTypes {
    name: string
}

interface initStateTypes {
    userInfo: userInfoTypes
}

const initialState: initStateTypes = {
    userInfo: sessionCache.sessionGet('userInfo') || {}
}

const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<userInfoTypes>) => {
            state.userInfo = action.payload;
            sessionCache.sessionSet('userInfo', action.payload);
        }
    },
    // extraReducers: {
    //     [loginAction.fulfilled.toString()]: (state, action: PayloadAction<any>) => {
    //         console.log(action, 66666666);
            
    //     },
    //     [loginAction.rejected.toString()]: (state, action: PayloadAction<any>) => {

    //         console.log(action, 'rejectedrejectedrejectedrejected');
    //     }
    // }
    // (builder) => {
    //     builder.addCase(loginAction.fulfilled, (state, action: PayloadAction<any>) => {
    //         console.log(action, 33333333333);
    //     });
    // }
})

export const { setUserInfo } = userSlice.actions;

export const getInitialState = userSlice.getInitialState;

export const getUserInfo = (state: RootState) => state.user.userInfo.userInfo;

export default userSlice.reducer;