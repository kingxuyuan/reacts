/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 15:54:11
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 14:56:46
 * @Description: 轮播图新增、编辑
 */
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Input, Switch, Upload } from 'antd';
import { EditOutlined, ApiOutlined, PlusOutlined } from '@ant-design/icons';

import { changeBase64 } from '@/utils/tools';

const CurouselAddEdit = () => {
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
        wrapperCol: { span: 8 },
    };

    // 表单重置
    const formReset = () => {
        form.resetFields();
    };

    // 表单提交
    const formSubmite = (values: any) => {
        console.log('Success:', values);
        navigate('/advertise/carousel', { replace: true });
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
            <h1>{`轮播图${pathname.includes('create') ? '新增' : '编辑'}`}</h1>
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
                    label="ID"
                    name='agentName'
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="标题"
                    required
                    name='agentCode'
                >
                    <Input prefix={<EditOutlined />} placeholder='请输入标题' />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="轮播图"
                    name='agentCode'
                >
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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

                <Form.Item
                    {...formItemLayout}
                    label="跳转地址"
                    name='agentCode'
                >
                    <Input prefix={<ApiOutlined />} placeholder='请输入跳转地址' />
                </Form.Item>
                
                <Form.Item
                    {...formItemLayout}
                    label="状态"
                    name='agentCode'
                    valuePropName="checked"
                >
                    <Switch checkedChildren="显示" unCheckedChildren="隐藏" defaultChecked />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 10, offset: 6 }}>
                    <Button className='formbtn' htmlType="button" onClick={formReset}>重置</Button>
                    <Button className='formbtn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CurouselAddEdit;