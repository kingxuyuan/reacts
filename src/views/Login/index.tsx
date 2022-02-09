/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 15:05:25
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-08 18:24:39
 * @Description: 
 */
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Input, Form, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { setToken } from '@/store/config/configReducer';

import './index.scss';

interface indexProps { }

const Login = (props: indexProps) => {
    const [httpSataus, setHttpStatus] = useState(false);
    const dispath = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirctPath = search?.split('=')[1];

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setHttpStatus(true);

        setTimeout(() => {
            setHttpStatus(false);
            message.success('登录成功！');
            dispath(setToken('sadsadsadsadds'));
            navigate(redirctPath ? redirctPath : '/home', { replace: true });
        }, 1500);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const validatePassword = (rule: any, value: any) => {
        if (value && !(value?.length <= 20 && value?.length >= 4)) return Promise.reject('密码长度位4-20位！');
        return Promise.resolve()
    };

    return (
        <div className="login">
            <div className="login-container">
                <h3>用户登录</h3>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        name='username'
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
            
            <div className="bamboo bamboo_one"></div>
            <div className="bamboo bamboo_two"></div>
            <div className="bamboo bamboo_three"></div>

            <div className="bottom"></div>

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