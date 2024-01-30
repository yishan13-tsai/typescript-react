import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react';
import test1 from '@/assets/test1.jpg';
import test2 from '@/assets/test2.jpg';
import test3 from '@/assets/test3.jpg';
import test4 from '@/assets/test4.jpg';

interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

class SampleNextArrow extends React.Component<ArrowProps> {
  render() {
    const { className, onClick } = this.props;
    return (
      <RightOutlined
        style={{ fontSize: "20px", color: "#fff" }}
        className={className}
        onClick={onClick}
      />
    );
  }
}

class SamplePrevArrow extends React.Component<ArrowProps> {
  render() {
    const { className, onClick } = this.props;
    return (
      <div className={className}>
        <LeftOutlined
          style={{ fontSize: "20px", color: "#fff" }}
          onClick={onClick}
        />
      </div>
    );
  }
}
const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const CarouselArrows = () => {
  return (
    < >
      <Carousel arrows {...settings}>
        <div>
          <Image width={'100%'} src={test1} />
        </div>
        <div>
          <Image width={'100%'} src={test2} />
        </div>
        <div>
          <Image width={'100%'} src={test3} />
        </div>
        <div>
          <Image width={'100%'} src={test4} />
        </div>
      </Carousel>
    </>
  );
};
export default CarouselArrows;
