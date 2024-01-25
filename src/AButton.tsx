import { Button } from 'antd';
import { ConfigProvider } from "antd";

const AButton = () => {
  return (
    <ConfigProvider theme={{
      "components": {
        "Button": {
          "defaultBorderColor": "rgb(191, 157, 125)",
          "defaultColor": "rgb(191, 157, 125)",
          "borderColorDisabled": "rgb(144, 144, 144)",
          "colorTextDisabled": "rgb(144, 144, 144)",
          "colorBgContainerDisabled": "rgb(255, 255, 255)"
        }
      }
    }}>
      <Button type="primary">按钮</Button>
      <Button > default 按钮</Button>
    </ConfigProvider>
  )
}

export default AButton
