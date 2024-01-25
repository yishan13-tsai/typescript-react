// import { Card, Carousel, Space } from "antd";
// import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { Card, Carousel, Col, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CarouselArrows from "./CarouselArrows";

// type AppProps = {}
// type AppState = {}
// export default class Rooms extends React.Component<AppProps, AppState> {
//     constructor(props: AppProps) {
//         super(props);
//         //this.props will already be of type AppProps.
//         //Only the constructor props are any
//     }
//     contentStyle: React.CSSProperties = {
//         margin: 0,
//         height: '160px',
//         color: '#fff',
//         lineHeight: '160px',
//         textAlign: 'center',
//         background: '#364d79',
//     };
//     carouselStyle: React.CSSProperties = {
//         overflow: 'hidden',
//         background: 'teal',
//     }

//     settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     image: React.CSSProperties = {
//         backgroundImage: "url('https://fakeimg.pl/300/')",
//     };
//     settings: Settings = {
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />
//     };
//     public render() {
//         return (
//             <>
//                 <Space direction="vertical" size={40} style={{ width: '100%', alignItems: 'center' }}>
//                     <div style={{ padding: "50px" }}>
//                         <Carousel arrows {...this.settings}>
//                             <div>
//                                 <h3>1</h3>
//                             </div>
//                             <div>
//                                 <h3>2</h3>
//                             </div>
//                             <div>
//                                 <h3>3</h3>
//                             </div>
//                             <div>
//                                 <h3>4</h3>
//                             </div>
//                         </Carousel>
//                     </div>
//                     {/* <Card bordered style={{ width: 1000, border: "2px solid black" }}> */}
//                     {/* <div className="max-w-sm w-full lg:max-w-full lg:flex">
//                             <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={this.image} title="Woman holding a mug">
//                             </div>
//                             <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//                                 <div className="mb-8">

//                                     <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
//                                     <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
//                                     <div className="text-sm">
//                                         <p className="text-gray-900 leading-none">Jonathan Reinink</p>
//                                         <p className="text-gray-600">Aug 18</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> */}
//                     {/* <Row >
//                             <Col md={16}>
//                                 <Carousel arrows >
//                                     <div>
//                                         <h3 style={this.contentStyle}>1</h3>
//                                     </div>
//                                     <div>
//                                         <h3 style={this.contentStyle}>2</h3>
//                                     </div>
//                                     <div>
//                                         <h3 style={this.contentStyle}>3</h3>
//                                     </div>
//                                     <div>
//                                         <h3 style={this.contentStyle}>4</h3>
//                                     </div>
//                                 </Carousel>
//                             </Col>
//                             <Col md={10}>

//                             </Col>
//                         </Row>
//                     </Card>

//                     <Card bordered style={{ width: 600, border: "2px solid black" }}>
//                         <p>Card content</p>
//                         <p>Card content</p>
//                         <p>Card content</p>
//                     </Card> */}

//                 </Space>

//             </>
//         );
//     }
// }
const gridStyle: React.CSSProperties = {
    width: '60%',
    textAlign: 'center',
};
const Rooms = () => {
    return (
        // <Space direction="vertical" size={40} style={{ width: '100%', alignItems: 'center' }}>
        <Card hoverable style={{ width: '65%', margin: '0 auto' }} >
            <Row >
                <Col md={16}>
                    <CarouselArrows />
                </Col>
                <Col md={10}>

                </Col>
            </Row>
            {/* <Card.Grid style={gridStyle}><CarouselArrows /></Card.Grid> */}
        </Card>
        // </Space>
    )
}

export default Rooms