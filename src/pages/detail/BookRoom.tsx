import { Button, Card, Col, Divider, Row, Typography } from 'antd'
import DateCalender from '@/pages/detail/DateCalender'
import Unit from './Unit'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { formatPrice } from '@/utils/format';
import { useNavigate } from 'react-router-dom';
import { DateSelected } from '@/types/room.model';
import { dateDayStartEnd } from '@/slice/roomSlice';
import { useState } from 'react';
import NoticeModal from '@/component/NoticeModal';

function BookRoom() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const detail = useSelector((state: RootState) => state.room.detail);
  const days = useSelector((state: RootState) => state.room.days);
  const people = useSelector((state: RootState) => state.room.people);
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('');

  const handleonDaysChange = (daysSelected: DateSelected) => {
    dispatch(dateDayStartEnd(daysSelected));
  }
  const handleOk = () => {

    if (!days || !people) {
      let menssage = ''
      if (!days) {
        menssage = '入住時間和退房時間是必填欄位'
      } else {
        menssage = '人數是必填欄位'
      }
      setMessage(menssage);
      setIsOpenNoticeModal(true);
      setTimeout(() => setIsOpenNoticeModal(false), 1200);
    } else {
      navigate(`/order`);
    }
  };
  return (
    <Card className="p-10 mt-0 m-16 md:sticky md:top-10">
      <p className="text-xl">預訂房型</p>
      <Divider />
      <Typography.Title level={2}> {detail?.name}</Typography.Title>
      <p>{detail?.description}</p>
      <Row gutter={12}>
        <Col span={24}>
          <DateCalender onDaysChange={handleonDaysChange} />
        </Col>
        <Col span={24} className="mt-6 mb-6">
          <div className="flex justify-between items-center font-bold">
            <span>人數</span>
            <Unit />
          </div>
        </Col>
        <Col span={24} className="mb-6 mb-6">
          <div className="flex justify-between text-xl font-bold text-primary-100">
            <span>{formatPrice((detail?.price || 0) * days)}</span>
          </div>
        </Col>
      </Row>
      <Button type="primary" block onClick={handleOk}>
        立即預訂
      </Button>
      <NoticeModal isOpen={isOpenNoticeModal} message={message} image={false} />
    </Card>
  )
}
export default BookRoom;
