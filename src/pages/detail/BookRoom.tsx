import { Button, Card, Col, Divider, Row, Typography } from 'antd'
import DateCalender from '@/pages/detail/DateCalender'
import Unit from './Unit'
import { useState } from 'react'

function BookRoom() {
  const [current, setCurrent] = useState(0)
  const [days, setDays] = useState(0)
  const formatPrice = (price: number): string => {
    let priceStr = price.toString()
    priceStr = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const prefix = 'NT$'
    let negative = ''
    if (priceStr?.[0] == '-') {
      negative = '-'
      priceStr = priceStr.replace('-', '')
    }
    return `${negative}${prefix} ${priceStr}`
  }
  const handleBook = () => {
    console.log('kao ', current)
  }
  const handleQuantityChange = (quantity: number) => {
    setCurrent(quantity)
  }
  const handleonDaysChange = (days: number) => {
    setDays(days)
  }

  return (
    <Card className="p-10 mt-0 m-16 md:sticky md:top-10">
      <p className="text-xl">預訂房型</p>
      <Divider />
      <Typography.Title level={2}>尊爵雙人房</Typography.Title>
      <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
      <Row gutter={12}>
        <Col span={24}>
          <DateCalender days={days} onDaysChange={handleonDaysChange} />
        </Col>
        <Col span={24} className="mt-6 mb-6">
          <div className="flex justify-between items-center font-bold">
            <span>人數</span>
            <Unit quantity={current} onQuantityChange={handleQuantityChange} />
          </div>
        </Col>
        <Col span={24} className="mb-6 mb-6">
          <div className="flex justify-between text-xl font-bold text-primary-100">
            <span>{formatPrice(1000)}</span>
          </div>
        </Col>
      </Row>
      <Button type="primary" block onClick={handleBook}>
        立即預訂
      </Button>
    </Card>
  )
}
export default BookRoom;
