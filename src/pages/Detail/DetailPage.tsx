import { Button, Card, Col, Divider, Row } from "antd";
import Body from "./Body";
import Head from "./Head";

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
                            <OrderPriceCard />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default DetailPage;

const OrderPriceCard = () => {
    return (
        <Card className='p-10 mt-0 m-16 md:sticky md:top-10'>
            <img src="https://miro.medium.com/v2/resize:fit:720/1*XGw9zUEZGYPNmeKGmyeX1g.jpeg" alt="" className='w-full' />
            <p className='text-2xl text-bold'>價格詳情</p>
            <div className='grid gap-y-3 mb-6'>

                <Divider />
                <div className="flex justify-between font-bold">
                    <span>總價</span>

                </div>
            </div>
            <Button type="primary" block>確認訂單</Button>
        </Card>
    )
}