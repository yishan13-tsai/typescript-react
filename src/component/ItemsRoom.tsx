import React from 'react';
import { Row } from 'antd'; // Supondo que você esteja usando Ant Design
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
        // <Col xs={20} xl={4} key={index}>
        <div className="w-1/2 md:w-1/5" key={index}>
          <img src={check} alt="size" className="align-bottom h-6 w-6 mr-2" />
          <span className="text-base">{item.title}</span>
        </div>
        // </Col>
      ))}
    </Row>
  );
};

export default ItemsRoom;
