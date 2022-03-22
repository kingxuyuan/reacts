/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 14:19:21
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:14:58
 * @Description: 提现记录
 */
import { useState } from 'react';
import { Button, Table, Form, Input, Select, DatePicker } from 'antd';
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import '../index.scss';

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

const Withdraw = () => {
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();

    const columns: any = [
        {
            title: 'ID',
            dataIndex: 'key',
            width: '8%',
            align: 'center'
        },
        {
            title: '真实姓名',
            dataIndex: 'name',
        },
        {
            title: '代理编码',
            dataIndex: 'code',
        },
        {
            title: '订单号',
            dataIndex: 'amount',
            // sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '充值金额',
            dataIndex: 'code',
        },
        {
            title: '充值类型',
            dataIndex: 'code',
        },
        {
            title: '钱包汇率',
            dataIndex: 'code',
        },
        {
            title: '数字钱包金额',
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
        {
            title: '更新时间',
            dataIndex: 'code',
        },
        {
            title: '操作',
            render: (_: any, record: any) => (
                <>
                    <Button type="primary" size="small" style={{ fontSize: 12 }} onClick={() => editRecord(record)} >编辑</Button>
                    {/* <Button type="primary" size="small" style={{ fontSize: 12, marginLeft: 14 }} danger>删除</Button> */}
                </>
            )
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

    // 表单搜索
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
                <Input />
            </Form.Item>
            <Form.Item
                name='id'
                label="订单号"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='id'
                label="订单状态"
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
    )

    return (
        <div className="withdraw">
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

export default Withdraw;