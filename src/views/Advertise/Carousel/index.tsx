/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-16 19:50:19
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 15:06:42
 * @Description: 轮播图 管理
 */
import { useNavigate } from 'react-router-dom';
import { Button, Tag, Table } from 'antd';
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

const Carousel = (props: any) => {
    const navigate = useNavigate();

    const columns: any = [
        {
            title: '序号',
            dataIndex: 'key',
            width: '8%',
            align: 'center'
        },
        {
            title: '标题',
            dataIndex: 'name',
        },
        {
            title: '轮播图',
            dataIndex: 'realName',
            // sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '跳转地址',
            dataIndex: 'phone',
        },
        {
            title: '状态',
            dataIndex: 'description',
            render: (_: any, record: any) => (
                <Tag color="red">red</Tag>
            )
        },
        {
            title: '修改时间',
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
                        onClick={() => navigate('/advertise/carousel/edit', { state: record })}
                    >
                        编辑
                    </Button>
                    <Button type="primary" size="small" danger style={{ fontSize: 12, marginLeft: 14 }}>删除</Button>
                </>
            )
        },
    ];

    // 列表头
    const tableForm = () => (
        <div className='table-title'>
            <h1>{props?.routeMeta?.title}</h1>
            <div className='table-form-btns'>
                <Button
                    className='add'
                    icon={<PlusOutlined />}
                    onClick={() => navigate('/advertise/carousel/create')}
                >
                    新增
                </Button>
            </div>
        </div>
    );

    return (
        <div className="carousel">
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

export default Carousel;