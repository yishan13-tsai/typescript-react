import { Card, Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import CarouselArrows from './CarouselArrows';
import { Divider } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import BaseInformation from '@/component/BaseInformation';
import axios from '@/utils/axios.ts'
import '../../rooms.css'
import useSWR from 'swr';
import RoomsHead from './Head';
import { Room, RoomResponse } from './types';

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
  const [rooms, setRooms] = useState<Room[]>([]);
  const [canFetch, setCanFetch] = useState<boolean>(false);
  const axiosGet = async (url: string) => {
    return axios.get(url).then((response) => {
      return response
    })
  }
  const { data, error } = useSWR<any>(
    canFetch ? '/rooms' : null,
    axiosGet,
  )

  useEffect(() => {
    if (rooms) {
      setCanFetch(true)
    }
  }, [rooms])

  useEffect(() => {
    if (data) setRooms(data.result)
  }, [data])

  useEffect(() => {
    if (error) console.error(error)
  }, [error])


  console.log('kaods', rooms)
  return (
    <>
      <RoomsHead />
      <div style={titleStyle}>
        <p className="font-medium mb-2 tracking-normal">房型選擇</p>
        <p className="font-bold m-0 text-4xl tracking-normal text-primary-100" >各種房型，任你挑選</p>
      </div>
      {rooms.map((room: Room, index: number) => {
        <Card hoverable style={cardStyle} key={index}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
            <Col className="gutter-row" md={15} >
              <CarouselArrows />
            </Col>
            <Col className="gutter-row" md={9} >
              <div >
                <Typography.Title level={2}>
                  {room.name}
                </Typography.Title>
                <p>{room.description}</p>
              </div>
              <BaseInformation baseInfo={{ size: "24 坪", bed: "1 張大床", capacity: 0 }} />
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
      })}
      {/* <Card hoverable style={cardStyle} >
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
      </Card> */}
    </>
  )
}

export default Rooms;
