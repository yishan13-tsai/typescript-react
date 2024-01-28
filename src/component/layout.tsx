import {Outlet} from "react-router-dom";
import {Footer, Header} from "antd/es/layout/layout";
import {Image} from 'antd';

const layout = () => {
  return (
    <>
      <Header className="box-border justify-between flex py-[24px] px-[80px] h-[120px] w-[100%] bg-neutral-120">
        <div>
          <Image
            className='block'
            src='/LOGO.png'
            preview={false}
            width={196}
            height={72}
          ></Image>
        </div>
        <div></div>
      </Header>
      <Outlet />
      <Footer className='bg-neutral-120'>
        <h1>Footer</h1>
      </Footer>
    </>
  )
}

export default layout;
