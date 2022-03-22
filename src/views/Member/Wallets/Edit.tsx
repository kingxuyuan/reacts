/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 15:54:11
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-19 16:36:46
 * @Description: 
 */
/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 20:49:04
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-19 15:42:39
 * @Description: 用户等级新增、编辑
 */
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Input, Select } from 'antd';
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
        <div className="addedit">
            <h1>{`数字钱包${pathname.includes('create') ? '新增' : '编辑'}`}</h1>
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
                    label="钱包地址"
                    required
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入钱包地址' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="支付方式"
                    name='agentCode'
                >
                    <Select placeholder='请选择支付方式'>
                        <Select.Option value={1}>方式1</Select.Option>
                        <Select.Option value={2}>方式2</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="备注"
                    required
                    name='inviteCode'
                >
                    <Input.TextArea
                        style={{ height: 80 }}
                        placeholder='请输入备注'
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