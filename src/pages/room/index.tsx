import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import CarouselArrows from './CarouselArrows';
import { Divider } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import BaseInformation from '@/component/BaseInformation';
import '../../rooms.css'

const cardStyle: React.CSSProperties = {
  width: '65%',
  height: 400,
  margin: '0 auto',
  marginBottom: 50
};
const titleStyle: React.CSSProperties = {
  width: '65%',
  margin: '0 auto',
  marginBottom: 50
};
const Rooms = () => {
  return (
    <>
      <div style={titleStyle}>
        <p className="font-medium mb-2 tracking-normal">房型選擇</p>
        <p className="font-bold m-0 text-4xl tracking-normal text-primary-100" >各種房型，任你挑選</p>
      </div>
      <Card hoverable style={cardStyle} >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
          <Col className="gutter-row" md={15} >
            <CarouselArrows />
          </Col>
          <Col className="gutter-row" md={9} >
            <div >
              <Typography.Title level={2}>
                尊爵雙人房
              </Typography.Title>
              <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            </div>
            <BaseInformation />
            <Divider />
            <div className="flex  justify-between text-primary-100 ">
              <span className="text-xl">NT$ 10,000</span>
              <Link to="/rooms/detail">
                <ArrowRightOutlined className="text-base mr-4" />
              </Link>

            </div>

          </Col>
        </Row>
      </Card>
      <Card hoverable style={cardStyle} >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
          <Col className="gutter-row" md={15} >
            <CarouselArrows />
          </Col>
          <Col className="gutter-row" md={9} >
            <div >
              <Typography.Title level={2}>
                尊爵雙人房
              </Typography.Title>
              <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            </div>
            <BaseInformation />
            <Divider />
            <div className="flex  justify-between text-primary-100 ">
              <span className="text-xl">NT$ 10,000</span>
              <Link to="/rooms/detail">
                <ArrowRightOutlined className="text-base mr-4" />
              </Link>

            </div>

          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Rooms;
