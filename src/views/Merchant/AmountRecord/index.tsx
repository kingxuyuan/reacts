/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 14:26:41
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:04:44
 * @Description: 商户信用额度记录
 */
import { Button, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const data: any = [];

for (let i = 0; i < 20; i++) {
    data.push({
        key: i + 1,
        name: 'scar',
        money: '1.00',
        before_money: '850294903.00',
        after_money: '850294904.00',
        time: '	2022-03-13 16:04:20',
    })
}

const columns: any = [
    {
        title: '排序',
        dataIndex: 'key',
        width: '8%',
        align: 'center',
        sorter: (a: any, b: any) => a.key - b.key,
        // render: (text: string) => <a>{text}</a>,
    },
    {
        title: '商户名称',
        dataIndex: 'name',
    },
    {
        title: '变动金额',
        dataIndex: 'money',
    },
    {
        title: '变动前金额',
        dataIndex: 'before_money',
    },
    {
        title: '变动后金额',
        dataIndex: 'after_money',
    },
    {
        title: '创建时间 ',
        dataIndex: 'time',
    },
];

// 列表头
const tableForm = () => (
    <>
        <Button type="primary" danger style={{ marginRight: 24 }}>商户上下额度</Button>
        <Button type="primary" icon={<DownloadOutlined />} className='export'>导出</Button>
    </>
);

const AmountRecord = () => {
    return (
        <div className="amountrecord">
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

export default AmountRecord;