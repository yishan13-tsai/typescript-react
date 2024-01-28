import { Col, Row } from 'antd';
import { Component } from 'react';
import check from '../icons/ic_check.svg';

interface ChildProps {
    items: string[];
}
export default class ItemsRoom extends Component<ChildProps> {
    detailStyle = {

        padding: 15,
        backgroundColor: '#FFFFFF',
        marginLeft: 3,
        borderRadius: 8,
        alignItems: 'center'
    };

    render() {
        return (
            <Row style={this.detailStyle}   >
                {this.props.items.map((item) =>
                    <Col xs={20} xl={4}>
                        <img src={check} alt="size" className="h-4 w-4" />
                        <span className="text-base">{item}</span>
                    </Col>
                )}
            </Row>
        );
    }
}
