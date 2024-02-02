import { Button, Card, Col, Divider, Row, Typography } from 'antd'
import DateCalender from '@/pages/detail/DateCalender'
import Unit from './Unit'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { formatPrice } from '@/utils/format';
import { Link } from 'react-router-dom';

function BookRoom() {
  const detail = useSelector((state: RootState) => state.room.detail);
  const [days, setDays] = useState(0)
  const handleonDaysChange = (days: number) => {
    setDays(days)
  }
  return (
    <Card className="p-10 mt-0 m-16 md:sticky md:top-10">
      <p className="text-xl">預訂房型</p>
      <Divider />
      <Typography.Title level={2}> {detail?.name}</Typography.Title>
      <p>{detail?.description}</p>
      <Row gutter={12}>
        <Col span={24}>
          <DateCalender days={days} onDaysChange={handleonDaysChange} />
        </Col>
        <Col span={24} className="mt-6 mb-6">
          <div className="flex justify-between items-center font-bold">
            <span>人數</span>
            <Unit />
          </div>
        </Col>
        <Col span={24} className="mb-6 mb-6">
          <div className="flex justify-between text-xl font-bold text-primary-100">
            <span>{formatPrice(detail?.price || 0)}</span>
          </div>
        </Col>
      </Row>
      <Button type="primary" block >
        <Link to="/order">立即預訂</Link>
      </Button>
    </Card>
  )
}
export default BookRoom;
