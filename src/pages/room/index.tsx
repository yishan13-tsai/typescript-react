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
import { RoomType } from '../../types/room.model';
import { formatPrice } from '@/utils/format';

const axiosGet = async (url: string) => {
  return axios.get(url).then((response) => {
    return response
  })
}

const Rooms = () => {
  const [largura, setLargura] = useState(window.innerWidth);
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [canFetch, setCanFetch] = useState<boolean>(false);
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

  useEffect(() => {
    const handleResize = () => {
      setLargura(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cardStyle: React.CSSProperties = {
    width: largura >= 1024 ? '65%' : '85%',
    margin: '0 auto',
    marginBottom: 50
  };
  return (
    <>
      <RoomsHead />
      <div style={cardStyle}>
        <p className="font-medium mb-2 tracking-normal">房型選擇</p>
        <p className="font-bold m-0 text-4xl tracking-normal text-primary-100" >各種房型，任你挑選</p>
      </div>
      {rooms.map((room: RoomType, index: number) => {
        return <Card hoverable style={cardStyle} key={index}>
          <Row gutter={{ md: 24, lg: 24 }} >
            <Col className="gutter-row" lg={15}>
              <CarouselArrows imageUrlList={room.imageUrlList} />
            </Col>
            <Col className="gutter-row p-5" lg={9}>
              <div >
                <Typography.Title level={2}>
                  {room.name}
                </Typography.Title>
                <p>{room.description}</p>
              </div>
              <BaseInformation baseInfo={{ size: room.areaInfo, bed: room.bedInfo, capacity: room.maxPeople }} />
              <Divider />
              <div className="flex justify-between text-primary-100 items-center">
                <span className="text-xl">{formatPrice(room.price)}</span>
                <Link to={`/rooms/detail/${room._id}`}>
                  <ArrowRightOutlined className="text-base mr-4" />
                </Link>
              </div>
            </Col>
          </Row>
        </Card>
      })}
    </>
  )
}

export default Rooms;
