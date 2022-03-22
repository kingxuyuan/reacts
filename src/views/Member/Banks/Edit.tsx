/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 20:49:04
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:43:23
 * @Description: 用户等级新增、编辑
 */
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Input } from 'antd';
import { EditOutlined, OneToOneOutlined } from '@ant-design/icons';

const BankEdit = () => {
    const navigate = useNavigate();
    const { pathname, state }: any = useLocation();
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 8 },
    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单提交
    const formSubmite = (values: any) => {
        console.log('Success:', values);
        navigate('/member/banks', { replace: true });
    };

    return (
        <div className="addedit addedit-form">
            <h1>{`虚拟号${pathname.includes('create') ? '新增' : '编辑'}`}</h1>
            <Form
                form={form}
                onFinish={formSubmite}
                initialValues={{
                    agentName: state?.agent_code,
                    agentCode: state?.agent_name,
                    inviteCode: state?.invite_code,
                    remark: state?.remake
                }}
            >
                <Form.Item
                    {...formItemLayout}
                    label="会员ID"
                    name='agentName'
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="银行名称"
                    required
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入银行名称' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="银行分支行"
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入银行分支行' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="银行-省"
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入银行-省' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="银行-城市"
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入银行-城市' />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    required
                    label="开户名"
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入开户名' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="银行卡号"
                    required
                    name='inviteCode'
                >
                    <Input
                        prefix={<OneToOneOutlined />}
                        placeholder='请输入银行卡号'
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 10, offset: 6 }}>
                    <Button className='formbtn' htmlType="button" onClick={formReset}>重置</Button>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default BankEdit;