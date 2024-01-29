import { Component } from 'react';
import Col from 'antd/es/col';
import Row from 'antd/es/row';
import size from '../icons/ic-size.svg';
import bed from '../icons/ic-bed.svg';
import person from '../icons/ic-person.svg';


export default class BaseInformation extends Component {
    detailStyle = {
        border: '1px solid #F1EAE4',
        borderRadius: 8,
        paddingTop: 10,
        paddingRight: 30,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF',
    };
    render() {
        return (
            <Row className="flex space-x-5">
                <Col className="gutter-row">
                    <div style={this.detailStyle}>
                        <img src={size} alt="size" className="h-6 w-6" />
                        <p className="text-xs">24 坪</p>
                    </div>
                </Col>
                <Col className="gutter-row">
                    <div style={this.detailStyle}>
                        <img src={bed} alt="bed" className="h-6 w-6" />
                        <p className="text-xs">一張大床</p>
                    </div>
                </Col>
                <Col className="gutter-row">
                    <div style={this.detailStyle}>
                        <img src={person} alt="person" className="h-6 w-6" />
                        <p className="text-xs">2-4人</p>
                    </div>
                </Col>
            </Row>
        );
    }
}
