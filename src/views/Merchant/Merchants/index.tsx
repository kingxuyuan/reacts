/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 14:28:32
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 18:02:50
 * @Description: 商家列表
 */
import { Table } from 'antd';

const data: any = [];

for (let i = 0; i < 20; i++) {
    data.push({
        key: i + 1,
        name: 'scar',
        code: 'admin',
        amount: '850294903.00',
    })
}

const columns: any = [
    {
        title: '排序',
        dataIndex: 'key',
        width: '15%',
        align: 'center'
    },
    {
        title: '商户名称',
        dataIndex: 'name',
    },
    {
        title: '商户编码',
        dataIndex: 'code',
    },
    {
        title: '商户额度',
        dataIndex: 'amount',
        sorter: (a: any, b: any) => a.age - b.age,
    },
];

// 列表头
const tableForm = () => <h1>商家列表</h1>;

const Merchants = () => {
    return (
        <div className="merchants table">
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

export default Merchants;