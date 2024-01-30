import BgLineImg from '@/assets/Login/line.png'
import SuccessIcon from '@/assets/icons/success.svg'
import { Card, Divider, Button } from 'antd'

const OrderInfoCard = () => {
  return (
    <Card className="p-10">
      <span>預訂參考編號： HH2302183151222</span>
      <p className="text-xl font-bold">即將來的行程</p>
      <img
        src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full"
      />
      <p className="font-bold text-lg">
        <span>尊爵雙人房，1 晚</span> | <span>住宿人數：2 位</span>
      </p>
      <p className="title-line">入住：6 月 10 日星期二，15:00 可入住</p>
      <p className="title-line before:border-neutral-60">
        退房：6 月 11 日星期三，12:00 前退房
      </p>
      <Divider />
      {/* 溝溝component */}
    </Card>
  )
}

const orderSuccess = () => {
  return (
    <>
      <section className="bg-neutral-120">
        <div className="p-4 md:max-w-[1296px] mx-auto grid grid-cols-12 md:gap-x-[72px]">
          {/* left */}
          <div className="gap-4 col-span-12 md:col-span-7 text-neutral-0 ">
            <div className="flex items-center">
              <img
                src={SuccessIcon}
                alt="success"
                className="row-span-3 mr-10 w-10 h-10 content-center"
              />
              <div className="text-4xl leading-heading font-bold">
                <p className="my-0">恭喜，Jessica！</p>
                <p className="my-0">您已預訂成功</p>
              </div>
            </div>
            <p className="font-normal">
              我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
            </p>
            <Divider className="my-20" />
            <p className="font-bold">立即查看您的訂單紀錄</p>
            <Button type="primary">前往我的訂單</Button>
            <Divider className="my-20" />
            <div className="flex flex-col">
              <p className="font-bold text-xl">訂房人資訊</p>
              <span className="mb-2">姓名</span>
              <span className="font-bold mb-6">姓名喔</span>
              <span className="mb-2">手機號碼</span>
              <span className="font-bold mb-6">09123456789</span>
              <span className="mb-2">電子信箱</span>
              <span className="font-bold mb-6">test@test.com</span>
            </div>
          </div>
          {/* right */}
          <div className="col-span-12 mt-[60px] md:col-span-5 md:mt-0">
            <OrderInfoCard></OrderInfoCard>
          </div>
        </div>
        <img src={BgLineImg} alt="bg" className="w-full h-28 bg-neutral-120" />
      </section>
    </>
  )
}

export default orderSuccess
