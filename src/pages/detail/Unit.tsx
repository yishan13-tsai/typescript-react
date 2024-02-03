
import plus from '@/assets/icons/ic_plus.svg';
import minus from '@/assets/icons/ic_minus.svg';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { quantityPeople } from '@/slice/roomSlice';

const numStyle = {
  border: '1px solid rgba(0, 0, 0, 0.05)',
  borderRadius: 50,
};

const Unit = () => {
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.room.people);
  const handlePlus = () => {
    const quantity = people > 0 ? people - 1 : 0
    dispatch(quantityPeople(quantity))
  };

  const handleMinus = () => {
    const quantity = people + 1
    dispatch(quantityPeople(quantity))
  };

  return (
    <div className="justify-center">
      <Button style={numStyle} onClick={handlePlus}>
        <img src={minus} alt="size" />
      </Button>
      <span className="text-2xl ml-6 mr-6">{people}</span>
      <Button style={numStyle} onClick={handleMinus}>
        <img src={plus} alt="size" />
      </Button>
    </div>
  );
};

export default Unit;
