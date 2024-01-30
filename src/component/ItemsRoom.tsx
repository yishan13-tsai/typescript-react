import { Col, Row } from 'antd'
import { Component } from 'react'
import check from '@/assets/icons/ic_check.svg'

interface ChildProps {
  items: string[]
}
const detailStyle = {
  padding: 15,
  backgroundColor: '#FFFFFF',
  marginLeft: 3,
  borderRadius: 8,
  alignItems: 'center',
}
export default class ItemsRoom extends Component<ChildProps> {
  render() {
    return (
      <Row style={detailStyle}>
        {this.props.items.map((item, index) => (
          <Col xs={20} xl={4} key={index}>
            <img src={check} alt="size" className="h-4 w-4" />
            <span className="text-base">{item}</span>
          </Col>
        ))}
      </Row>
    )
  }
}
