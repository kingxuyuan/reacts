/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-17 14:28:01
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 15:34:45
 * @Description: 管理员权限 列表
 */
import { useState } from 'react';
import { Tree } from 'antd';

const treeData = [
    {
        title: '0',
        key: '0',
        children: [
            {
                title: '0-0',
                key: '0-0',
                children: [
                    { title: '0-0-0', key: '0-0-0' },
                    { title: '0-0-1', key: '0-0-1' },
                    { title: '0-0-2', key: '0-0-2' },
                ],
            },
            {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0', key: '0-1-0' },
                    { title: '0-1-1', key: '0-1-1' },
                    { title: '0-1-2', key: '0-1-2' },
                ],
            },
            {
                title: '0-2',
                key: '0-2',
            },
        ],
    },
    {
        title: '1',
        key: '1',
        children: [
            { title: '1-0', key: '1-0' },
            { title: '1-1', key: '1-1' },
            { title: '1-2', key: '1-2' },
        ],
    },
    {
        title: '2',
        key: '2',
    },
];

const Permissions = () => {
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

    const onExpand = (expandedKeysValue:any) => {
        console.log('onExpand', expandedKeysValue);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };

    const onCheck = (checkedKeysValue: any) => {
        console.log('onCheck', checkedKeysValue);
        setCheckedKeys(checkedKeysValue);
    };

    const onSelect = (selectedKeysValue: any, info: any) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeysValue);
    };
    return (
        <Tree
            checkable
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            treeData={treeData}
        />
    );
}

export default Permissions;