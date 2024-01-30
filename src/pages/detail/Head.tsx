import { Component } from 'react'
import { Card, Col, Flex, Row } from 'antd'
import test1 from '@/assets/test1.jpg'
import test4 from '@/assets/test4.jpg'
import test2 from '@/assets/test2.jpg'
import test3 from '@/assets/test3.jpg'

export default class Head extends Component {
  cardStyle = {
    margin: 50,
  }
  imgStyle = {
    display: 'block',
    width: '50%',
  }
  imgStyle1 = {
    display: 'block',
    width: '105%',
  }
  render() {
    return (
      <Card
        hoverable
        style={this.cardStyle}
        bodyStyle={{ padding: 0, overflow: 'hidden' }}
      >
        <Flex justify="space-between">
          <img alt="avatar" src={test1} style={this.imgStyle} />
          <Flex style={{ width: '50%', paddingLeft: 5, paddingRight: 5 }}>
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              <Col className="gutter-row" md={12}>
                <img alt="avatar" src={test1} style={this.imgStyle1} />
              </Col>
              <Col className="gutter-row" md={12}>
                <img alt="avatar" src={test3} style={this.imgStyle1} />
              </Col>
              <Col className="gutter-row" md={12}>
                <img alt="avatar" src={test4} style={this.imgStyle1} />
              </Col>
              <Col className="gutter-row" md={12}>
                <img alt="avatar" src={test2} style={this.imgStyle1} />
              </Col>
            </Row>
          </Flex>
        </Flex>
      </Card>
    )
  }
}
