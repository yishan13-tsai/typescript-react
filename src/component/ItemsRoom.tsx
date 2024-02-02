import React from 'react';
import { Row, Col } from 'antd'; // Supondo que você esteja usando Ant Design
import { RoomSubItemInfo } from '@/types/room.model';
import check from '@/assets/icons/ic_check.svg'
interface ChildProps {
  items: RoomSubItemInfo[];
}

const detailStyle = {
  padding: 15,
  backgroundColor: '#FFFFFF',
  marginLeft: 3,
  borderRadius: 8,
  alignItems: 'center',
};

const ItemsRoom: React.FC<ChildProps> = ({ items }) => {
  return (
    <Row style={detailStyle}>
      {items.map((item, index) => (
        <Col xs={20} xl={4} key={index}>
          <img src={check} alt="size" className="h-4 w-4" />
          <span className="text-base">{item.title}</span>
        </Col>
      ))}
    </Row>
  );
};

export default ItemsRoom;
