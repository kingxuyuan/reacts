/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 19:27:29
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 19:03:26
 * @Description: 充值编辑
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
                    label="会员ID"
                    name='agentName'
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="用户名"
                    name='agentCode'
                >
                    <Input prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="真实姓名"
                    name='inviteCode'
                >
                    <Input prefix={<EditOutlined />} />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="充值金额"
                    name='mobile'
                >
                    <Input prefix={<PhoneOutlined />} disabled />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="数字钱包"
                    name='loginpassword'
                >
                    <Input.Password prefix={<LockOutlined />} disabled />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="钱包汇率"
                    name='zjpassword'
                >
                    <Input.Password prefix={<EyeInvisibleOutlined />} disabled />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="备注"
                    name='yue'
                >
                    <Input.TextArea placeholder="请输入备注" disabled />
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