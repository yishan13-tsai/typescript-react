import React, { useState } from 'react';
import plus from '@/assets/icons/ic_plus.svg';
import minus from '@/assets/icons/ic_minus.svg';
import { Button } from 'antd';

const numStyle = {
  border: '1px solid rgba(0, 0, 0, 0.05)',
  borderRadius: 50,
};

interface UnitProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const Unit: React.FC<UnitProps> = ({ quantity, onQuantityChange }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handlePlus = () => {
    setCurrentQuantity((prevQuantity) =>
      prevQuantity > 0 ? prevQuantity - 1 : 0
    );
    onQuantityChange(currentQuantity);
  };

  const handleMinus = () => {
    setCurrentQuantity((prevQuantity) => prevQuantity + 1);
    onQuantityChange(currentQuantity);
  };

  return (
    <div className="justify-center">
      <Button style={numStyle} onClick={handleMinus}>
        <img src={plus} alt="size" />
      </Button>
      <span className="text-2xl ml-6 mr-6">{currentQuantity}</span>
      <Button style={numStyle} onClick={handlePlus}>
        <img src={minus} alt="size" />
      </Button>
    </div>
  );
};

export default Unit;
