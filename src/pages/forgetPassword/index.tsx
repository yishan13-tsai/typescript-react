// todo: 跟login結合成一頁
import ForgetPasswordForm from './ForgetPasswordForm'

const ForgetPassword = () => {

  return (
    <>
      <div className="grid md:grid-cols-2 md:p-0">
        <div className="hidden bg-black md:block">
          <img
            className="h-full w-full object-cover object-center"
            src="./Login/login_bg.png"
            alt="login_bg"
          />
        </div>
        <div className="h-screen bg-neutral-120 text-neutral-0 relative">
          <img
            className="h-187 w-full object-cover object-center absolute top-16"
            src="./Login/line.png"
            alt="line"
          />
          <div className="md:pt-0 md:w-full h-full flex justify-center items-center">
            <div className="md:w-1/2">
              <div className="mb-10">
                <p className="font-medium mb-2 tracking-normal text-primary-100">
                  享樂酒店，誠摯歡迎
                </p>
                <p className="font-bold m-0 text-5xl tracking-heading">
                  立即開始旅程
                </p>
              </div>
              <div className="font-medium">
                <ForgetPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword
