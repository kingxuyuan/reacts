/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-16 19:50:19
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:10:48
 * @Description: 
 */
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, DatePicker, Table } from 'antd';
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const data: any = [];

for (let i = 1; i <= 20; i++) {
    data.push({
        key: i + 1,
        name: 'kkkkkk',
        realName: '李德发',
        phone: '15658512521',
        description: 'xiaoou',
    });
}

const Virtua = () => {
    const navigate = useNavigate();

    const [form] = Form.useForm();

    const columns: any = [
        {
            title: '序号',
            dataIndex: 'key',
            width: '5%',
            align: 'center',
        },
        {
            title: '用户名',
            dataIndex: 'name',
            // render: (text: string) => <a>{text}</a>,
        },
        {
            title: '所属代理',
            dataIndex: 'realName',
            // sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '余额',
            dataIndex: 'phone',
        },
        {
            title: '打码量',
            dataIndex: 'description',
        },
        {
            title: '余额宝',
            dataIndex: 'description',
        },
        {
            title: '状态',
            dataIndex: 'description',
        },
        {
            title: '用户头像',
            dataIndex: 'description',
        },
        {
            title: 'IP地址',
            dataIndex: 'description',
        },
        {
            title: '在线状态',
            dataIndex: 'description',
        },
        {
            title: '创建时间',
            dataIndex: 'description',
        },
        {
            title: '操作',
            render: (_: any, record: any) => (
                <Button
                    type="primary"
                    size="small"
                    style={{ fontSize: 12 }}
                    onClick={() => navigate('/member/virtuals/edit', { state: record })}
                >
                    编辑
                </Button>
            )
        },
    ];

    const handleChange = (value: string) => {
        console.log(value);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // 列表头
    const tableForm = () => (
        <Form
            className='head-form'
            form={form}
            layout="inline"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item name='username' label='用户名'>
                <Input type="text" maxLength={16} style={{ width: 150 }} />
            </Form.Item>

            <Form.Item name='daili' label='状态'>
                <Select style={{ width: 140 }} allowClear onChange={handleChange}>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name='status' label='在线状态'>
                <Select style={{ width: 140 }} allowClear onChange={handleChange}>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name='time' label='时间'>
                <RangePicker showTime />
            </Form.Item>

            <div className='table-form-btns'>
                <Button className='btn search' htmlType="submit" icon={<SearchOutlined />}>搜索</Button>
                <Button
                    className='btn add'
                    icon={<PlusOutlined />}
                    onClick={() => navigate('/member/virtuals/create')}
                >
                    新增
                </Button>
                <Button className='btn' htmlType="button" icon={<RedoOutlined />} onClick={onReset}>重置</Button>
            </div>
        </Form>
    );

    return (
        <div className="virtua">
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

export default Virtua;