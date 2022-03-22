/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 16:51:03
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 14:57:04
 * @Description: 白名单新增、修改
 */
import { Form, Button, Input } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { LaptopOutlined, EditOutlined } from '@ant-design/icons';

const WhiteListAddEdit = () => {
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
        navigate('/setting/whitelist', { replace: true });
    };

    return (
        <div className="WhiteList">
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
                    label="IP白名单"
                    name='agentName'
                    required
                    rules={[
                        { required: true, message: '请输入IP白名单' },
                    ]}
                >
                    <Input prefix={<LaptopOutlined />} placeholder='请输入IP白名单' />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="登录名"
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入登录名' />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="备注"
                    name='remark'
                >
                    <Input.TextArea style={{height: 150}} placeholder='请输入备注' />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 10, offset: 6 }}>
                    <Button className='formbtn' onClick={formReset}>重置</Button>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div >
    );
}

export default WhiteListAddEdit;