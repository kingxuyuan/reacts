/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-16 20:16:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 13:31:22
 * @Description: 报表管理
 */
import { FC } from 'react';
import { Button, Input, Form, Select, message } from 'antd';
import './index.scss';

interface ReportProps {};

const { Option } = Select;

const Report: FC<ReportProps> = (props) => {
    const onReset = () => {

    };
    
    return (
        <div className="report">
            <div className="report-header">
                <Form className='report-form'>
                    <Form.Item
                        className='report-form-item'
                        name='account'
                        label="用户名"
                        rules={[
                            { pattern: new RegExp(/^[a-zA-Z0-9]{4,16}$/, "g"), message: '数字、字母组合4-16位，不含特殊字符' }
                        ]}
                    >
                        <Input type="text" maxLength={16} placeholder='请输入用户名' />
                    </Form.Item>
                    <Form.Item
                        className='report-form-item'
                        name='account'
                        label="代理编码"
                        rules={[
                            { pattern: new RegExp(/^[a-zA-Z0-9]{4,16}$/, "g"), message: '数字、字母组合4-16位，不含特殊字符' }
                        ]}
                    >
                        <Input type="text" maxLength={16} placeholder='请输入代理编码' />
                    </Form.Item>
                    <Form.Item
                        className='report-form-item'
                        name='account'
                        label="查询时间"
                    >
                        <Select 
                            style={{ width: 160 }}
                            placeholder="Search to Select"
                        >
                            <Option value="jack">Jack</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item className='report-form-item'>
                        <Button className='btn' type="primary" htmlType="submit">搜索</Button>
                        <Button className='btn' onClick={onReset}>重置</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="report-body">
                <table>
                    <thead>
                        <tr>
                            <th>充值总计（排除托号）</th>
                            <th>人工充值加款（排除托号）</th>
                            <th>银联充值</th>
                            <th>人工充值扣款</th>
                            <th>赠送彩金（排除托号）</th>
                            <th>提现总计</th>
                            <th>充值总计 - 提现总计</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1297400.00</td>
                            <td>400.00</td>
                            <td>657000.00</td>
                            <td>-34.00</td>
                            <td>50.00</td>
                            <td>16400.00</td>
                            <td>1281000</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>数字钱包充值统计(仅显示)</th>
                            <th>数字钱包提现统计(仅显示)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1297400.00</td>
                            <td>400.00</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>认购人数(排除托号)</th>
                            <th>充值总次数(排除托号)</th>
                            <th>提现总次数</th>
                            <th>充值总人数(排除托号)</th>
                            <th>提现总人数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1297400.00</td>
                            <td>400.00</td>
                            <td>657000.00</td>
                            <td>-34.00</td>
                            <td>50.00</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>认购总金额(排除托号)</th>
                            <th>派奖总计(排除托号)</th>
                            <th>认购总输赢(排除托号)</th>
                            <th>余额宝总收益(排除托号)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1297400.00</td>
                            <td>400.00</td>
                            <td>657000.00</td>
                            <td>-34.00</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Report;