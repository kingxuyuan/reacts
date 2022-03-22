/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 17:43:27
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:42:12
 * @Description: 新建礼金
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Input, InputNumber, Radio } from 'antd';

const { TextArea } = Input;

const ManualRecharge = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [value, setValue] = useState(1);

    const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单提交
    const formSubmite = (values: any) => {
        console.log('Success:', values);
        navigate('/finance/giftmoney');
    };
    return (
        <div className="manual-recharge addedit-form">
            <h1>人工充值扣款</h1>
            <Form
                form={form}
                onFinish={formSubmite}
            >
                <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}
                    label="用户名"
                    name='agentName'
                    required
                    rules={[
                        { required: true, message: '请输入用户名' },
                    ]}
                >
                    <Input placeholder='请输入代理名称' />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 3 }}
                    label="金额"
                    name='inviteCode'
                    required
                    rules={[
                        { required: true, message: '请输入金额' },
                    ]}
                >
                    <InputNumber
                        min={1}
                        placeholder='请输入金额'
                        style={{ width: '100%' }}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')} 
                    />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 10 }}
                    label="类型"
                    name='agentCode'
                >
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>后台人工充值</Radio>
                        <Radio value={2}>后台人工扣款</Radio>
                        <Radio value={3}>赠送彩金</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    label="备注"
                    name='remark'
                >
                    <TextArea rows={4} placeholder='请输入备注' />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4 }}>
                    <Button className='formbtn' onClick={formReset}>重置</Button>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ManualRecharge;