/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 19:27:29
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:53:20
 * @Description: 
 */
import { Form, Button, Input, Switch, Select  } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { EditOutlined, PhoneOutlined, LockOutlined, UserOutlined, EyeInvisibleOutlined, PayCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const Edit = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { state }: any = useLocation();
    console.log(state);

    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 14 },
    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单提交
    const formSubmite = (values: any) => {
        console.log('Success:', values);
        navigate('/member/list', { replace: true });
    };

    return (
        <div className="member-edit addedit-form">
            <h1>会员编辑</h1>
            <Form
                form={form}
                onFinish={formSubmite}
            >
                <Form.Item
                    {...formItemLayout}
                    label="代理名称"
                    name='agentName'
                >
                    <Input placeholder='请输入代理名称' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="用户名"
                    name='agentCode'
                >
                    <Input prefix={<UserOutlined />} placeholder='请输入用户名' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="真实姓名"
                    name='inviteCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入真实姓名' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="手机号码"
                    name='mobile'
                >
                    <Input prefix={<PhoneOutlined />} disabled />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="登录密码"
                    name='loginpassword'
                    required
                    rules={[
                        { required: true, message: '请输入登录密码' },
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder='请输入登录密码' />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="资金密码"
                    name='zjpassword'
                    required
                    rules={[
                        { required: true, message: '请输入资金密码' },
                    ]}
                >
                    <Input.Password prefix={<EyeInvisibleOutlined />} placeholder='请输入资金密码' />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="余额"
                    name='yue'
                >
                    <Input prefix={<PayCircleOutlined />} disabled />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="打码量"
                    name='account'
                >
                    <Input prefix={<EditOutlined />} />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="状态"
                    name='status'
                    valuePropName="checked"
                >
                    <Switch checkedChildren="正常" unCheckedChildren="锁定" defaultChecked />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="所属代理"
                    name='agent'
                >
                    <Select style={{ width: '100%' }} >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 10, offset: 5 }}>
                    <Button className='formbtn' htmlType="button" onClick={formReset}>重置</Button>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Edit;