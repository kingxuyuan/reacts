/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 14:28:32
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 16:58:23
 * @Description: 基础设置
 */
import { FC, useState } from 'react';
import { Button, Table, Form, Input, Typography } from 'antd';

interface Item {
    key: string;
    code: string;
    remark: string;
    value: string;
    time: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}

const originData: any = [];

for (let i = 0; i < 20; i++) {
    originData.push({
        key: i + 1,
        code: 'http://www.baidu.com',
        remark: '',
        value: '',
        time: '2021-12-14 19:33:13',
    })
}

const SettingCommon = (props: any) => {
    
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record: Item) => record.key === editingKey;

    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({ remark: '', value: '', ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;

            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns: any = [
        {
            title: '排序',
            dataIndex: 'key',
            width: '8%',
            align: 'center'
        },
        {
            title: '配置项',
            dataIndex: 'code',
        },
        {
            title: '备注',
            dataIndex: 'remark',
            editable: true,
            width: '20%',
        },
        {
            title: '配置值',
            dataIndex: 'value',
            editable: true,
            width: '20%',
        },
        {
            title: '更新时间',
            dataIndex: 'time',
            sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '操作',
            width: '15%',
            // render: (_: any, record: any) => (
            //     <Button type="primary" size="small" style={{ fontSize: 12 }}>编辑</Button>
            // )
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <>
                        <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>保存</Typography.Link>
                        <Typography.Link onClick={() => setEditingKey('')} style={{ marginRight: 8 }}>取消</Typography.Link>
                    </>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>编辑</Typography.Link>
                );
            },
        }
    ];

    const mergedColumns = columns.map((col: any) => {
        if (!col.editable) return col;
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const EditableCell: FC<EditableCellProps> = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{ margin: 0 }}
                    >
                        <Input placeholder={`请输入${title}!`} />
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    return (
        <div className="merchants table">
            <Form form={form} component={false}>
                <Table
                    title={() => <h1>Here is title</h1>}
                    size='middle'
                    columns={mergedColumns}
                    dataSource={data}
                    pagination={{
                        showTotal: (total: any) =>  `Total ${total} items`
                    }}
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                />
            </Form>
        </div>
    );
}

export default SettingCommon;