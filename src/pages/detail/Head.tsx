import { Card, Col, Flex, Row } from 'antd';
import test1 from '@/assets/test1.jpg';
import test4 from '@/assets/test4.jpg';
import test2 from '@/assets/test2.jpg';
import test3 from '@/assets/test3.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const cardStyle = {
  margin: 50,
};

const imgStyle = {
  display: 'block',
  width: '50%',
  maxHeight: '50%'
};

const imgStyle1 = {
  display: 'block',
  width: '105%',
};
const Head = () => {
  const detail = useSelector((state: RootState) => state.room.detail);
  return (
    <Card
      hoverable
      style={cardStyle}
      bodyStyle={{ padding: 0, overflow: 'hidden' }}
    >
      <Flex justify="space-between">
        <img alt="avatar" src={detail?.imageUrlList[0]} style={imgStyle} />
        <Flex style={{ width: '50%', paddingLeft: 5, paddingRight: 5 }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col className="gutter-row" md={12}>
              <img alt="avatar" src={test1} style={imgStyle1} />
            </Col>
            <Col className="gutter-row" md={12}>
              <img alt="avatar" src={test3} style={imgStyle1} />
            </Col>
            <Col className="gutter-row" md={12}>
              <img alt="avatar" src={test4} style={imgStyle1} />
            </Col>
            <Col className="gutter-row" md={12}>
              <img alt="avatar" src={test2} style={imgStyle1} />
            </Col>
          </Row>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Head;
