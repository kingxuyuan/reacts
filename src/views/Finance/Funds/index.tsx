/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 16:52:22
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 17:27:58
 * @Description: 
 */
import { useState } from 'react';
import { Button, Table, Form, Input, Select, DatePicker } from 'antd';
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;

const data: any = [];

for (let i = 0; i < 20; i++) {
    data.push({
        key: i + 1,
        name: 'scar',
        code: 'admin',
        amount: '850294903.00',
    })
}

const Funds = () => {
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();

    const columns: any = [
        {
            title: '用户名',
            dataIndex: 'name',
            width: '8%',
            align: 'center'
        },
        {
            title: '代理编码',
            dataIndex: 'amount',
            // sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '订单号',
            dataIndex: 'code',
        },
        {
            title: '变动金额',
            dataIndex: 'status',
        },
        {
            title: '变动前金额',
            dataIndex: 'status',
        },
        {
            title: '变动后金额',
            dataIndex: 'status',
        },
        {
            title: '交易类型',
            dataIndex: 'code',
        },
        {
            title: '备注',
            dataIndex: 'code',
        },
        {
            title: '创建时间',
            dataIndex: 'code',
        },
    ];

    const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const formItemLayout = {
        labelCol: { span: 10 },
        // wrapperCol: { span: 10 },
    };

    const editRecord = (record: any) => {

    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单搜索
    const formSubmite = (values: any) => {
        console.log(values);

    };

    // 列表头
    const tableForm = () => (
        <Form
            form={form}
            className='head-form'
            layout="inline"
            onFinish={formSubmite}
        >
            <Form.Item
                name='name'
                label="用户名"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='id'
                label="代理编码"
            >
                <Select
                    style={{ width: 140, fontSize: 12 }}
                    placeholder="请选择订单状态"
                >
                    <Option value="1">等待付款</Option>
                    <Option value="2">充值成功</Option>
                    <Option value="3">充值失败</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name='id'
                label="交易类型"
            >
                <Select
                    style={{ width: 140, fontSize: 12 }}
                    placeholder="请选择订单状态"
                >
                    <Option value="1">等待付款</Option>
                    <Option value="2">充值成功</Option>
                    <Option value="3">充值失败</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name='timeDate'
                label="创建时间"
            >
                <RangePicker showTime />
            </Form.Item>

            <div className='table-form-btns'>
                <Button className='btn search' htmlType="submit" icon={<SearchOutlined />}>搜索</Button>
                <Button className='btn' htmlType="button" onClick={formReset} icon={<RedoOutlined />} >重置</Button>
            </div>
        </Form>
    );

    return (
        <div className="funds">
            <Table
                size='middle'
                title={tableForm}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 12, showSizeChanger: true }}
            />
        </div>
    );
}

export default Funds;