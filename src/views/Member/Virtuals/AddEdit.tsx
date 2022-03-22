/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 15:54:11
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 14:56:57
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
import { Form, Button, Input, InputNumber, Select, Switch } from 'antd';
import { LockOutlined, EyeInvisibleOutlined, EditOutlined } from '@ant-design/icons';

const AddEdit = () => {
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
        navigate('/member/virtuals', { replace: true });
    };

    return (
        <div className="addedit">
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
                    label="用户名"
                    name='agentName'
                    required
                    rules={[
                        { required: true, message: '请输入用户名' },
                    ]}
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入用户名' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="登录密码"
                    required
                    name='agentCode'
                >
                    <Input.Password prefix={<LockOutlined />} placeholder='请输入登录密码' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="资金密码"
                    name='agentCode'
                >
                    <Input.Password prefix={<EyeInvisibleOutlined />} placeholder='请输入资金密码' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="状态"
                    name='remark'
                    valuePropName="checked"
                >
                    <Switch checkedChildren="正常" unCheckedChildren="锁定" defaultChecked />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="会员等级"
                    name='agentCode'
                >
                    <Select style={{ width: '100%' }} placeholder="请选择会员等级" allowClear>
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="打码量"
                    required
                    name='inviteCode'
                >
                    <InputNumber
                        prefix="￥"
                        min={0}
                        style={{ width: '100%' }}
                        placeholder='请输入打码量'
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
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

export default AddEdit;