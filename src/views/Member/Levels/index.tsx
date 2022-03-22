/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-16 19:50:19
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:10:15
 * @Description: 
 */
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, DatePicker, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

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

const Level = () => {
    const navigate = useNavigate();

    const columns: any = [
        {
            title: '序号',
            dataIndex: 'key',
            width: '8%',
            align: 'center',
        },
        {
            title: '等级名称',
            dataIndex: 'name',
            // render: (text: string) => <a>{text}</a>,
        },
        {
            title: '等级数',
            dataIndex: 'realName',
            // sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '升级金额',
            dataIndex: 'phone',
        },
        {
            title: '等级图片',
            dataIndex: 'description',
        },
        {
            title: '创建时间',
            dataIndex: 'description',
        },
        {
            title: '更新时间',
            dataIndex: 'description',
        },
        {
            title: '操作',
            render: (_: any, record: any) => (
                <Button
                    type="primary"
                    size="small"
                    style={{ fontSize: 12 }}
                    onClick={() => navigate('/member/levels/edit', { state: record })}
                >
                    编辑
                </Button>
            )
        },
    ];

    // 列表头
    const tableForm = () => (
        <div className='table-form-btns'>
            <Button
                className='add'
                icon={<PlusOutlined />}
                onClick={() => navigate('/member/levels/create')}
            >
                新增
            </Button>
        </div>
    );

    return (
        <div className="level">

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

export default Level;