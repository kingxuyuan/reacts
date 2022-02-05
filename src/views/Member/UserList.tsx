/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-05 15:59:00
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-05 19:49:02
 * @Description: 
 */
import { useRef, useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Table } from 'antd';

import './index.scss';

interface UserListProps { };

interface DataType {
    key: React.Key;
    name: string;
    age: string;
    address: string;
    description: string;
}

const data: DataType[] = [];

for (let i = 1; i <= 20; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
}

const columns: any = [
    {
        title: 'Name',
        dataIndex: 'name',
        // render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a: any, b: any) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
];

const UserList = (props: UserListProps) => {

    const [form] = Form.useForm();
    const [selectRows, setSelectRows] = useState<DataType[]>([]);

    const handleChange = (value: string) => {
        console.log(value);
    };

    const onChange = () => {

    };

    const onOk = () => {

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

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(selectedRowKeys, selectedRows);
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectRows(selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (
        <div className="userlist">
            <div className="userlist-head">
                <div className="delete" style={{ width: `${selectRows.length > 0 ? 140 : 0}px` }}>
                    <span>已选择{selectRows.length}项</span>
                    <Button type="primary" size='small'>删除</Button>
                </div>

                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item name='username' label='用户名'>
                        <Input type="text" maxLength={16} style={{ width: 150 }} />
                    </Form.Item>

                    <Form.Item name='daili' label='所属代理'>
                        <Select style={{ width: 120 }} allowClear onChange={handleChange}>
                            <Select.Option value="jack">Jack</Select.Option>
                            <Select.Option value="lucy">Lucy</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name='status' label='状态'>
                        <Select style={{ width: 120 }} allowClear onChange={handleChange}>
                            <Select.Option value="jack">Jack</Select.Option>
                            <Select.Option value="lucy">Lucy</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name='time' label='时间'>
                        <DatePicker style={{ width: 176 }} showTime placeholder="选择日期" onChange={onChange} onOk={onOk} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">搜索</Button>
                        <Button htmlType="button" onClick={onReset}>重置</Button>
                    </Form.Item>
                </Form>
            </div>

            <div className="userlist-table">
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 12, showSizeChanger: true }}
                />
            </div>
        </div>
    );
}

export default UserList;