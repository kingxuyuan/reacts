/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 15:05:25
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 15:23:58
 * @Description: 登录
 */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { Button, Input, Form, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { SYSTEM } from '@/utils/base';
import { setToken } from '@/store/user/login/loginReducer';
import { setUserInfo } from '@/store/user/userInfo/userInfoReducer';
import { loginAction } from '@/store/user/login/loginAction';
import '@/assets/js/sakura';

import './index.scss';

const Login = () => {
    const [httpSataus, setHttpStatus] = useState(false);
    const dispath = useAppDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirctPath = search?.split('=')[1];

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setHttpStatus(true);

        dispath(loginAction(values))
        .then(res => {
            setHttpStatus(false);
            message.success('登录成功！');
            dispath(setToken(Math.random().toString(36).slice(-8)));
            dispath(setUserInfo({ name: values.account }));
            navigate(redirctPath ? redirctPath : '/home', { replace: true });
        }).catch(err=> {
            setHttpStatus(false);
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const validatePassword = (rule: any, value: any) => {
        if (value && !(value?.length <= 20 && value?.length >= 4)) return Promise.reject('密码长度位4-20位！');
        return Promise.resolve()
    };

    useEffect(() => {
        (window as any)?.startSakura();
    }, [])

    return (
        <div className="login">
            <div className="login-container">
                <h2>{ SYSTEM.title }</h2>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        name='account'
                        rules={[
                            { required: true, message: '请输入用户名' },
                            { pattern: new RegExp(/^[a-zA-Z0-9]{4,16}$/, "g"), message: '数字、字母组合4-16位，不含特殊字符' }
                        ]}
                    >
                        <Input type="text" maxLength={16} placeholder='用户名' prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[
                            { required: true, message: '请输入密码' },
                            { validator: validatePassword }
                        ]}
                    >
                        <Input.Password placeholder='密码' prefix={<LockOutlined />} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={httpSataus}>{httpSataus ? '登录中' : '立即登录'}</Button>
                    </Form.Item>
                </Form>
            </div>

            <div className="cloud"></div>
            <div className="cloud2"></div>

            <div className="bottom"></div>
            <div className="flower flower-small"></div>
            <div className="flower flower-big"></div>

            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
        </div>
    );
}

export default Login;