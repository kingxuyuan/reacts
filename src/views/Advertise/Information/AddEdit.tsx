/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 15:54:11
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 14:56:50
 * @Description: 咨询新增、修改
 */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Input, Switch } from 'antd';
import { EditOutlined, ApiOutlined } from '@ant-design/icons';

import WEditor from 'wangeditor-for-react';

const AddEdit = () => {
    const navigate = useNavigate();
    const { pathname, state }: any = useLocation();
    const [editValue, seteditValue] = useState('');

    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 12 },
    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单提交
    const formSubmite = (values: any) => {
        console.log('Success:', values);
        navigate('/advertise/information', { replace: true });
    };

    useEffect(() => {
        console.log(editValue);
        
    }, [editValue])

    return (
        <div className="addedit addedit-form">
            <h1>{`咨询${pathname.includes('create') ? '新增' : '编辑'}`}</h1>
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
                    {/* defaultValue={''} */}
                    <WEditor placeholder='请输入内容' onChange={seteditValue} />
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

export default AddEdit;