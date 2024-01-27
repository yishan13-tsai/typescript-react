import { Col, Row, Typography } from "antd";
import { Component } from "react";
import Detail from "../Room/Detail";

export default class Body extends Component {
    cardStyle = {
        width: '60%',
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
                        <Typography.Title level={4}>
                            房型基本資訊
                        </Typography.Title>
                        <Detail />
                    </Col>
                </Row>
                <Row style={this.cardStyle}>
                    <Col >
                        <Typography.Title level={4}>
                            房間格局
                        </Typography.Title>

                    </Col>
                </Row>
            </>
        );
    }
}