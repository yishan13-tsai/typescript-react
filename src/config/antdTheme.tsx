import type { ThemeConfig } from 'antd'

// 可以來這個網站調整設定 https://ant.design/theme-editor#Style
export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#bf9d7d',
    colorInfo: '#bf9d7d',
    colorPrimaryHover: '#7b6651',
    colorPrimaryBorder: '#bf9d7d',
    fontSize: 16,
    borderRadius: 8,
    colorError: '#da3e51',
    colorSuccess: '#52dd7e',
    fontFamily:
      "'Noto Serif TC', serif, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    controlPaddingHorizontal: 16,
    controlHeight: 56,
    lineHeight: 1.5,
    paddingSM: 16,
    colorText: 'rgb(75, 75, 75)',
    colorTextPlaceholder: 'rgb(144, 144, 144)',
    colorErrorText: 'rgb(218, 62, 81)',
    colorBorder: 'rgba(217, 217, 217, 0)',
    colorPrimaryActive: 'rgb(191, 157, 112)',
    colorBgContainer: '#FFFFFF',
    lineWidth: 1,
  },
  components: {
    Button: {
      defaultBorderColor: 'rgb(191, 157, 125)',
      defaultColor: 'rgb(191, 157, 125)',
      borderColorDisabled: 'rgb(144, 144, 144)',
      colorTextDisabled: 'rgb(144, 144, 144)',
      colorBgContainerDisabled: 'rgb(255, 255, 255)',
    },
    Input: {
      inputFontSize: 16,
      paddingBlock: 16,
      paddingInline: 16,
      fontSize: 16,
      lineWidth: 1,
      colorText: 'rgb(75, 75, 75)',
      colorTextPlaceholder: 'rgb(144, 144, 144)',
      colorError: 'rgb(218, 62, 81)',
      colorErrorText: 'rgb(218, 62, 81)',
      colorBorder: 'rgba(217, 217, 217, 0)',
      colorPrimaryActive: 'rgb(191, 157, 112)',
      colorPrimaryHover: 'rgb(191, 157, 112)',
      colorBgContainer: '#FFFFFF',
    },
    Form: {},
    Steps: {
      colorText: '#FFFFFF',
    },
  },
}
