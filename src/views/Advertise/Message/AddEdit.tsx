/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 15:54:11
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 14:56:52
 * @Description: 消息新增、修改
 */
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Input, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const AddEdit = () => {
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
        navigate('/advertise/message', { replace: true });
    };

    return (
        <div className="addedit addedit-form">
            <h1>{`消息${pathname.includes('create') ? '新增' : '编辑'}`}</h1>
            <Form
                form={form}
                onFinish={formSubmite}
            >
                <Form.Item
                    {...formItemLayout}
                    label="标题"
                    required
                    name='title'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入标题' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="内容"
                    name='content'
                >
                    <Input.TextArea style={{ height: 150 }} placeholder='请输入内容' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="消息类型"
                    name='agentCode'
                    valuePropName="checked"
                >
                    <Select placeholder='请选择消息类型'>
                        <Select.Option value={1}>系统消息</Select.Option>
                        <Select.Option value={2}> 用户消息  </Select.Option>
                    </Select>
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="接收人"
                    name='content'
                >
                    <Input placeholder='请输入接收人' />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button className='formbtn' htmlType="button" onClick={formReset}>重置</Button>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddEdit;