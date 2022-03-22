/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 16:51:03
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 14:57:01
 * @Description: 代理新增、修改
 */
import { Form, Button, Input } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import './addEdit.scss';

const AgentsAddEdit = () => {
    const navigate = useNavigate();
    const { pathname, state }: any = useLocation();
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 10 },
    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单提交
    const formSubmite = (values: any) => {
        console.log('Success:', values);
        navigate('/merchant/agents', { replace: true });
    };

    return (
        <div className="setting">
            <h1>{`代理${pathname.includes('create') ? '新增' : '编辑'}`}</h1>
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
                    label="代理名称"
                    name='agentName'
                    required
                    rules={[
                        { required: true, message: '请输入代理名称' },
                    ]}
                >
                    <Input placeholder='请输入代理名称' />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="代理编码"
                    name='agentCode'
                >
                    <Input placeholder='请输入代理编码' />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="邀请码"
                    name='inviteCode'
                >
                    <Input placeholder='请输入邀请码' />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="备注"
                    name='remark'
                >
                    <Input placeholder='请输入备注' />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 10, offset: 6 }}>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                    <Button className='formbtn' htmlType="button" onClick={formReset}>重置</Button>
                </Form.Item>
            </Form>
        </div >
    );
}

export default AgentsAddEdit;