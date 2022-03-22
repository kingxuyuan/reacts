/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 14:28:01
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 12:38:53
 * @Description: 代理管理 列表
 */
import { useNavigate } from 'react-router-dom';
import { Button, Table, Form, Input } from 'antd';
import { PlusOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons';

const data: any = [];

for (let i = 0; i < 20; i++) {
    data.push({
        key: i + 1,
        agent_code: 'agt0' + (i + 1),
        agent_name: '代理' + (i + 1),
        invite_code: '0' + (i + 1),
        create_time: '2022-03-13 16:04:20',
        update_time: '2022-03-13 16:04:20',
        remake: '代理001',
        operate: '',
    })
}

const Agents = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const columns: any = [
        {
            title: '排序',
            dataIndex: 'key',
            width: '6%',
            align: 'center',
            // sorter: (a: any, b: any) => a.age - b.age,
            // render: (text: string) => <a>{text}</a>,
        },
        {
            title: '代理编码',
            dataIndex: 'agent_code',
        },
        {
            title: '代理名称',
            dataIndex: 'agent_name',
        },
        {
            title: '邀请码',
            dataIndex: 'invite_code',
        },
        {
            title: '创建时间',
            dataIndex: 'create_time',
        },
        {
            title: '更新时间 ',
            dataIndex: 'update_time',
        },
        {
            title: '备注 ',
            dataIndex: 'remake',
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

    // 列表头
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
                <Button className='btn add' onClick={() => navigate(`/merchant/agents/create`)} icon={<PlusOutlined />} >新增</Button>
                <Button className='btn' onClick={onReset} icon={<RedoOutlined />} >重置</Button>
            </div>
        </Form>
    );

    return (
        <div className="agents">
            <Table
                size='middle'
                title={tableForm}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 20, showSizeChanger: true }}
            />
        </div>
    );
}

export default Agents;