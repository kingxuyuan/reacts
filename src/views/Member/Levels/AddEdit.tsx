/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 20:49:04
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-19 18:08:22
 * @Description: 用户等级新增、编辑
 */
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Button, Input, InputNumber, Upload } from 'antd';

import { changeBase64 } from '@/utils/tools';

const AddEdit = () => {
    const navigate = useNavigate();
    const { pathname, state }: any = useLocation();
    const [form] = Form.useForm();
    let imageUrl = '';
    const [fileList, setFileList] = useState([]);
    const [preview, setPreview] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
    });

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 6 },
    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单提交
    const formSubmite = (values: any) => {
        console.log('Success:', values);
        navigate('/merchant/agents', { replace: true });
    };

    const handleChange = ({ fileList }: any) => setFileList(fileList);

    const handlePreview = async (file: any) => {
        if (!file.url && !file.preview) {
            file.preview = await changeBase64(file.originFileObj);
        }

        setPreview({
            ...preview,
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    return (
        <div className="addedit addedit-form">
            <h1>{`用户等级${pathname.includes('create') ? '新增' : '编辑'}`}</h1>
            <Form
                form={form}
                onFinish={formSubmite}
                initialValues={{
                    agentName: state?.agent_code,
                    agentCode: state?.agent_name,
                    inviteCode: state?.invite_code,
                    remark: state?.remake
                }}
            >
                <Form.Item
                    {...formItemLayout}
                    label="等级名称"
                    name='agentName'
                    required
                    rules={[
                        { required: true, message: '请输入等级名称' },
                    ]}
                >
                    <Input placeholder='请输入等级名称' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="等级数"
                    required
                    name='agentCode'
                >
                    <InputNumber
                        min={1}
                        style={{ width: '100%' }}
                        placeholder='请输入等级数'
                    />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="升级金额"
                    required
                    name='inviteCode'
                >
                    <InputNumber
                        prefix="￥"
                        min={0}
                        style={{ width: '100%' }}
                        placeholder='请输入升级金额'
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="等级图片"
                    name='remark'
                >
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        onChange={handleChange}
                    >
                        {
                            fileList.length >= 1 ? null :
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>图片上传</div>
                                </div>
                        }
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 10, offset: 6 }}>
                    <Button className='formbtn' htmlType="button" onClick={formReset}>重置</Button>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddEdit;