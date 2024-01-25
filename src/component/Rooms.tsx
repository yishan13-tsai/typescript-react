// import { Card, Carousel, Space } from "antd";
// import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { Card, Carousel, Col, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

// const contentStyle: React.CSSProperties = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };
// const SampleNextArrow = props => {
//     const { className, style, onClick } = props
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 color: 'black',
//                 fontSize: '15px',
//                 lineHeight: '1.5715'
//             }}
//             onClick={onClick}
//         >
//             <RightOutlined />
//         </div>
//     )
// }

// const SamplePrevArrow = props => {
//     const { className, style, onClick } = props
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 color: 'black',
//                 fontSize: '15px',
//                 lineHeight: '1.5715'
//             }}
//             onClick={onClick}
//         >
//             <LeftOutlined />
//         </div>
//     )
// }
// const settings = {
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
// }
// const Rooms: React.FC = () => (
//     <>
//         <Space direction="vertical" size={40} style={{ width: '100%', alignItems: 'center' }}>
//             <Card bordered style={{ width: 600, border: "2px solid black" }}>
//                 <Carousel arrows {...settings}>
//                     <div>
//                         <h3 style={contentStyle}>1</h3>
//                     </div>
//                     <div>
//                         <h3 style={contentStyle}>2</h3>
//                     </div>
//                     <div>
//                         <h3 style={contentStyle}>3</h3>
//                     </div>
//                     <div>
//                         <h3 style={contentStyle}>4</h3>
//                     </div>
//                 </Carousel>
//             </Card>
//             <Card bordered style={{ width: 600, border: "2px solid black" }}>
//                 <p>Card content</p>
//                 <p>Card content</p>
//                 <p>Card content</p>
//             </Card>
//         </Space>

//     </>
// );

// export default Rooms

type AppProps = {}
type AppState = {}
export default class Rooms extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        //this.props will already be of type AppProps. 
        //Only the constructor props are any
    }
    contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    carouselStyle: React.CSSProperties = {
        borderRadius: '20px', overflow: 'hidden',
        height: '400px',
        background: 'teal',
    }

    settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    public render() {
        return (
            <>
                <Space direction="vertical" size={40} style={{ width: '100%', alignItems: 'center' }}>
                    {/* <Card bordered style={{ width: 600, border: "2px solid black", padding: -10 }}>

                        <Row >
                            <Col md={14}>
                                <Carousel arrows>
                                    <div>
                                        <h3 style={this.contentStyle}>1</h3>
                                    </div>
                                    <div>
                                        <h3 style={this.contentStyle}>2</h3>
                                    </div>
                                    <div>
                                        <h3 style={this.contentStyle}>3</h3>
                                    </div>
                                    <div>
                                        <h3 style={this.contentStyle}>4</h3>
                                    </div>
                                </Carousel>
                            </Col>
                            <Col md={10}>

                            </Col>
                        </Row>
                    </Card>

                    <Card bordered style={{ width: 600, border: "2px solid black" }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card> */}
                    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
                        </div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Members only
                                </p>
                                <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                    <p className="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Space>

            </>
        );
    }
}