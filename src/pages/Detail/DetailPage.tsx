import { Col, Row } from "antd";
import Body from "./Body";
import Head from "./Head";
import BookRoom from "./BookRoom";

const DetailPage = () => {
    return (
        <>
            <div className="mb-20">
                <Head />
                <div className="w-4/6 mx-auto">
                    <Row gutter={[16, 16]}>
                        <Col span={12} className="pl-20">
                            <Body />
                        </Col>
                        <Col span={12}>
                            <BookRoom />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default DetailPage;
