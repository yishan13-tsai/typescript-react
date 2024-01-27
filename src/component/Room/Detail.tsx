import { ArrowsAltOutlined, CarOutlined, UserOutlined } from "@ant-design/icons";
import Col from "antd/es/col";
import Row from "antd/es/row";
import './rooms.css'

const detail: React.CSSProperties = {
    maxWidth: 60,
    border: '1px solid #F1EAE4',
    borderRadius: 8,
    marginRight: 10,
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 15,
    backgroundColor: '#FFFFFF',
};
const icon: React.CSSProperties = {
    color: '#FFF',
    backgroundColor: '#BF9D7D',
    borderRadius: 4,
    padding: 2

};
const Detail = () => {
    return (
        < >
            <Row  >
                <Col className="gutter-row"  >

                    <div style={detail}>
                        <ArrowsAltOutlined style={icon} />
                        {/* <div className="arrow-up"></div> */}
                        <p className="text-xs">24 坪</p>
                    </div>
                </Col>
                <Col className="gutter-row"  >
                    <div style={detail}>
                        <CarOutlined style={icon} />
                        <p className="text-xs">一張大床</p>
                    </div>
                </Col>
                <Col className="gutter-row"  >
                    <div style={detail}>
                        <UserOutlined style={icon} />

                        <p className="text-xs">2-4人</p>
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default Detail;