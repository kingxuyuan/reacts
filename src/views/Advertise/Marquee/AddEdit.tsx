/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 15:54:11
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 13:42:35
 * @Description: 轮播图新增、编辑
 */
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Input, Switch } from 'antd';
import { EditOutlined, ApiOutlined } from '@ant-design/icons';

const MarqueeAddEdit = () => {
    const navigate = useNavigate();
    const { pathname, state }: any = useLocation();
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 },
    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单提交
    const formSubmite = (values: any) => {
        console.log('Success:', values);
        navigate('/advertise/marquee', { replace: true });
    };

    return (
        <div className="addedit addedit-form">
            <h1>{`轮播图${pathname.includes('create') ? '新增' : '编辑'}`}</h1>
            <Form
                form={form}
                onFinish={formSubmite}
            >
                <Form.Item
                    {...formItemLayout}
                    label="标题"
                    required
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入标题' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="内容"
                    name='agentCode'
                >
                    <Input.TextArea style={{ height: 200 }} placeholder='请输入内容' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="状态"
                    name='agentCode'
                    valuePropName="checked"
                >
                    <Switch checkedChildren="显示" unCheckedChildren="隐藏" defaultChecked />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button className='formbtn' htmlType="button" onClick={formReset}>重置</Button>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default MarqueeAddEdit;