/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-16 19:50:19
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 13:45:44
 * @Description: 跑马灯管理
 */
import { useNavigate } from 'react-router-dom';
import { Button, Tag, Table, Form, Select, Input } from 'antd';
import { PlusOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons';

const data: any = [];

for (let i = 1; i <= 20; i++) {
    data.push({
        key: i + 1,
        name: 'kkkkkk',
        realName: '金书藏娇（sexinbook.cc）,这个网站名就应该可以理解到是一个成人小说网站，喜欢阅读的色友们可以收藏起来。网站版面很清晰，手机端很唯美，没有一些弹窗、悬浮影响浏览质量的脚本广告。这里有很多故事是描写禁忌之恋的比如父亲和女儿，以及动漫.',
        phone: '15658512521',
        description: 'xiaoou',
    });
}

const Notice = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const columns: any = [
        {
            title: '序号',
            dataIndex: 'key',
            width: '6%',
            align: 'center'
        },
        {
            title: '标题',
            dataIndex: 'name',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '内容',
            dataIndex: 'realName',
            ellipsis: true,
            width: '40%',
            align: 'center'
            // sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '状态',
            align: 'center',
            dataIndex: 'description',
            render: (_: any, record: any) => (
                <Tag color="red">red</Tag>
            )
        },
        {
            title: '更新时间',
            align: 'center',
            dataIndex: 'description',
        },
        {
            title: '操作',
            align: 'center',
            render: (_: any, record: any) => (
                <>
                    <Button
                        type="primary"
                        size="small"
                        style={{ fontSize: 12 }}
                        onClick={() => navigate('/advertise/notice/edit', { state: record })}
                    >
                        编辑
                    </Button>
                    <Button type="primary" size="small" danger style={{ fontSize: 12, marginLeft: 14 }}>删除</Button>
                </>
            )
        },
    ];

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
                label="标题"
            >
                <Input placeholder="请输入标题" />
            </Form.Item>

            <Form.Item
                name='name'
                label="状态"
            >
                <Select
                    style={{ width: 140, fontSize: 12 }}
                    placeholder="请选择状态"
                >
                    <Select.Option value="1">等待付款</Select.Option>
                    <Select.Option value="2">充值成功</Select.Option>
                </Select>
            </Form.Item>

            <div className='table-form-btns'>
                <Button className='btn search' htmlType="submit" icon={<SearchOutlined />}>搜索</Button>
                <Button
                    className='btn add'
                    htmlType="button"
                    icon={<PlusOutlined />}
                    onClick={() => navigate('/advertise/notice/create')}
                >
                    新增
                </Button>
                <Button className='btn' htmlType="button" onClick={formReset} icon={<RedoOutlined />} >重置</Button>
            </div>
        </Form>
    );

    return (
        <div className="ad-notice">
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

export default Notice;