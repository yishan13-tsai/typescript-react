import {  Button, Input } from "antd";

function SignupStepOne () {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  
  return (
    <>
      <div>
        <div className="font-medium mb-10">
          <div className="mb-4">
            <label className="inline-block mb-2">電子信箱</label>
            <Input
              style={{ height: "56px" }}
              size="large"
              placeholder="hello@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block mb-2">密碼</label>
            <Input.Password
              style={{ height: "56px" }}
              size="large"
              placeholder="請輸入密碼"
            />
          </div>
          <div>
            <label className="inline-block mb-2">確認密碼</label>
            <Input.Password
              style={{ height: "56px" }}
              size="large"
              placeholder="請再輸入一次密碼"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupStepOne