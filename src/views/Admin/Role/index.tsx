/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 14:28:01
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 17:03:30
 * @Description: 管理员角色 列表
 */
import { useNavigate } from 'react-router-dom';
import { Button, Table, Form, Input, Tag } from 'antd';
import { PlusOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons';

const data: any = [];

for (let i = 1; i < 20; i++) {
    data.push({
        key: i,
        agent_code: 'agt0',
        agent_name: '代理',
        invite_code: '0',
        create_time: '2022-03-13 16:04:20',
        update_time: '2022-03-13 16:04:20',
        remake: '代理001',
        operate: '',
    })
}

const Role = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const columns: any = [
        {
            title: '排序',
            dataIndex: 'key',
            width: '8%',
            align: 'center'
            // sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '标识',
            dataIndex: 'agent_code',
        },
        {
            title: '名称',
            dataIndex: 'agent_name',
        },
        {
            title: '权限',
            dataIndex: 'invite_code',
            width: '35%',
            render: () => (
                <Tag color="green">所有权限</Tag>
            )
        },
        {
            title: '更新时间 ',
            dataIndex: 'update_time',
        },
        {
            title: '操作 ',
            dataIndex: 'operate',
            render: (_: any, record: any) => {
                return (
                    <>
                        <Button type="primary" size="small" style={{ fontSize: 12 }} onClick={() => navigate(`/merchant/agents/edit`, { state: record })} >编辑</Button>
                        <Button type="primary" size="small" style={{ fontSize: 12, marginLeft: 14 }} danger>删除</Button>
                    </>
                )
            }
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

    // 表单搜索
    const tableForm = () => (   
        <Form
            className='head-form'
            layout="inline"
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                name='id'
                label="ID"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='id'
                label="代理名称"
            >
                <Input />
            </Form.Item>
            <div className='table-form-btns'>
                <Button className='btn search' htmlType="submit" icon={<SearchOutlined />}>搜索</Button>
                <Button className='btn add' onClick={() => navigate(`/merchant/role/create`)} icon={<PlusOutlined />} >新增</Button>
                <Button className='btn' onClick={onReset} icon={<RedoOutlined />} >重置</Button>
            </div>
        </Form>
    );

    return (
        <div className="role">
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

export default Role;