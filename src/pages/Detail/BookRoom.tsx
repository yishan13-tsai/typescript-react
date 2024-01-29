import { Button, Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import { Component } from "react";
import DateCalender from "./DateCalender";

const dateStyle: React.CSSProperties = {
    border: '2px solid',
    borderRadius: 8,
};

export default class BookRoom extends Component {
    formatPrice = (price: number): string => {
        let priceStr = price.toString()
        priceStr = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const prefix = 'NT$'
        let negative = ''
        if (priceStr?.[0] == '-') {
            negative = '-'
            priceStr = priceStr.replace('-', '')
        }
        return `${negative}${prefix} ${priceStr}`
    }

    render() {
        return (
            <Card className='p-10 mt-0 m-16 md:sticky md:top-10'>
                <p className='text-xl'>預訂房型</p>
                <Divider />
                <Typography.Title level={2}>
                    尊爵雙人房
                </Typography.Title>
                <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <Row gutter={12}  >
                    {/* <Col span={12} style={dateStyle}>
                        <div>
                            sa
                        </div>
                        
                    </Col>
                    <Col span={12} style={dateStyle}>
                        sa
                    </Col> */}
                    <Col span={24}  >
                        <DateCalender />
                    </Col>
                    <Col span={24}>
                        <div className="flex justify-between font-bold">
                            <span>人數</span>

                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="flex justify-between text-xl font-bold text-primary-100">
                            <span>{this.formatPrice(1000)}</span>
                        </div>
                    </Col>
                </Row>


                <Button type="primary" block>立即預訂</Button>
            </Card>
        );
    }
}