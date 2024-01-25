import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Image } from 'antd';
import React from "react";

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
                    <Image
                        width={300}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
                <div>
                    <Image
                        width={300}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                </div>
                <div>
                    <Image width={300} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        </>
    );
};
export default CarouselArrows;