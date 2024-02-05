import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react';

interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <RightOutlined
    style={{ fontSize: "35px", color: "#fff" }}
    className={className}
    onClick={onClick}
  />
);

const SamplePrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <LeftOutlined
    style={{ fontSize: "35px", color: "#fff" }}
    className={className}
    onClick={onClick}
  />
);

const CarouselArrows = ({ imageUrlList }: { imageUrlList: string[] }) => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <Carousel arrows {...settings}>
        {imageUrlList.map((image: string, index: number) => {
          return <div>
            <Image width={'100%'} src={image} key={index} />
          </div>
        })}
      </Carousel>
    </>
  );
};

export default CarouselArrows;
