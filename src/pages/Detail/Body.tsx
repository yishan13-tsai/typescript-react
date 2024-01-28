import { Col, Row, Typography } from "antd";
import { Component } from "react";
import BaseInformation from "../../component/BaseInformation";
import ItemsRoom from "../../component/ItemsRoom";

export default class Body extends Component {
    cardStyle = {
        width: '75%',
        margin: '0 auto',
    };

    render() {
        return (
            <>
                <Row style={this.cardStyle}>
                    <Col >
                        <Typography.Title level={2}>
                            尊爵雙人房
                        </Typography.Title>
                        <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                    </Col>

                </Row>
                <Row style={this.cardStyle}>
                    <Col >
                        <Typography.Title level={4} >
                            房型基本資訊
                        </Typography.Title>
                        <BaseInformation />
                    </Col>
                </Row>
                <Row style={this.cardStyle}>
                    <Col span={12}>
                        <Typography.Title level={4}>
                            房間格局
                        </Typography.Title>
                        <ItemsRoom items={['市景', '獨立衛浴', '客廳', '書房', '樓層電梯']} />
                    </Col>
                </Row>
                <Row style={this.cardStyle}>
                    <Col span={12}>
                        <Typography.Title level={4}>
                            房內設備
                        </Typography.Title>
                        <ItemsRoom items={['平面電視', '吹風機', '冰箱', '熱水壺', '檯燈', '衣櫃', '除濕機', '浴缸', '書桌', '音響']} />
                    </Col>
                </Row>
                <Row style={this.cardStyle}>
                    <Col span={12}>
                        <Typography.Title level={4}>
                            備品提供
                        </Typography.Title>
                        <ItemsRoom items={['衛生紙', '拖鞋', '沐浴用品', '清潔用品', '刮鬍刀', '吊衣架', '刷牙用品', '罐裝水', '梳子']} />
                    </Col>
                </Row>
            </>
        );
    }
}