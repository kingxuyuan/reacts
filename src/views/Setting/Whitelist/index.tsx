/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-16 19:50:19
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:07:14
 * @Description: 白名单
 */
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, Form, Input } from 'antd';
import { PlusOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons';

const data: any = [];

for (let i = 1; i <= 20; i++) {
    data.push({
        key: i,
        name: 'kkkkkk',
        realName: '李德发',
        phone: '15658512521',
        description: 'xiaoou',
    });
}

const WhiteList = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const columns: any = [
        {
            title: '序号',
            dataIndex: 'key',
            width: '8%',
            align: 'center'
        },
        {
            title: 'IP白名单',
            dataIndex: 'name',
            // render: (text: string) => <a>{text}</a>,
        },
        {
            title: '登录名',
            dataIndex: 'realName',
            // sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '操作人',
            dataIndex: 'phone',
        },
        {
            title: '更新时间',
            dataIndex: 'description',
        },
        {
            title: '备注',
            dataIndex: 'description',
        },
        {
            title: '操作',
            render: (_: any, record: any) => (
                <>
                    <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: 12 }}
                        onClick={() => navigate('/setting/whitelist/edit', { state: record })}
                    >
                        编辑
                    </Button>
                    <Button type="primary" size="small" style={{ fontSize: 12, marginLeft: 14 }} danger>删除</Button>
                </>
            )
        },
    ];

    // 表单重置
    const onReset = () => {
        form.resetFields();
    };

    // 表单搜索
    const onFinish = () => {
        form.resetFields();
    };

    const tableForm = () => (
        <Form
            className='head-form'
            layout="inline"
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                name='id'
                label="登录名"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='id'
                label="IP白名单"
            >
                <Input />
            </Form.Item>
            <div className='table-form-btns'>
                <Button className='btn search' htmlType="submit" icon={<SearchOutlined />}>搜索</Button>
                <Button className='btn add' onClick={() => navigate(`/setting/whitelist/create`)} icon={<PlusOutlined />} >新增</Button>
                <Button className='btn' onClick={onReset} icon={<RedoOutlined />} >重置</Button>
            </div>
        </Form>
    )

    return (
        <div className="level">
            <Table
                size='middle'
                title={tableForm}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 12 }}
            />
        </div>
    );
}

export default WhiteList;