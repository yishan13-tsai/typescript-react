import Col from 'antd/es/col';
import Row from 'antd/es/row';
import size from '@/assets/icons/ic-size.svg';
import bed from '@/assets/icons/ic-bed.svg';
import person from '@/assets/icons/ic-person.svg';

const detailStyle = {
  border: '1px solid #F1EAE4',
  borderRadius: 8,
  paddingTop: 10,
  paddingRight: 30,
  paddingLeft: 15,
  backgroundColor: '#FFFFFF',
};
interface Props {
  baseInfo: { size: string, bed: string, capacity: number }
}
const BaseInformation: React.FC<Props> = ({ baseInfo }) => {
  return (
    <Row className="flex space-x-5">
      <Col className="gutter-row">
        <div style={detailStyle}>
          <img src={size} alt="size" className="h-6 w-6" />
          <p className="text-xs">{baseInfo.size}</p>
        </div>
      </Col>
      <Col className="gutter-row">
        <div style={detailStyle}>
          <img src={bed} alt="bed" className="h-6 w-6" />
          <p className="text-xs">{baseInfo.bed}</p>
        </div>
      </Col>
      <Col className="gutter-row">
        <div style={detailStyle}>
          <img src={person} alt="person" className="h-6 w-6" />
          <p className="text-xs">2-{baseInfo.capacity}人</p>
        </div>
      </Col>
    </Row>
  );
};

export default BaseInformation;
