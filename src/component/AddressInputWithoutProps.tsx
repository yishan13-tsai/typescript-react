import { Form, Input, Space, Select } from 'antd'
const { Option } = Select
import { useState, useEffect } from 'react'
import twDistrict from '@/assets/tw-district.json'

// type AddressInputProps = {
//   form: FormInstance
// }

type CityType = {
  id: number
  name: string
}

type DistrictType = {
  zip: string
  name: string
}
const AddressInput = () => {
  const [cityOptions, setCityOptions] = useState<CityType[]>([])
  const [districtOptions, setDistrictOptions] = useState<DistrictType[]>([])
  const selectedAddress = Form.useWatch('address')
  useEffect(() => {
    const selectedCity = selectedAddress?.city
    setDistrictOptions(twDistrict[selectedCity]?.districts || [])
  }, [selectedAddress])
  useEffect(() => {
    setCityOptions(
      twDistrict.map((item, id) => {
        return { name: item.name, id }
      }),
    )
  }, [])

  return (
    <Form.Item style={{ fontWeight: 700 }} label="地址">
      <Space.Compact size="middle" className="w-full">
        <Form.Item
          className="w-full mr-4 mb-4"
          name={['address', 'city']}
          rules={[{ required: true, message: '請選擇城市' }]}
        >
          <Select placeholder="縣市">
            {cityOptions?.length &&
              cityOptions.map((item: CityType) => (
                <Option value={item?.id} key={item?.id}>
                  {item.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          className="w-full"
          name={['address', 'district']}
          rules={[{ required: true, message: '請選擇地區' }]}
        >
          <Select placeholder="地區">
            {districtOptions?.length &&
              districtOptions.map((item: DistrictType) => (
                <Option value={item?.zip} key={item?.zip}>
                  {item.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
      </Space.Compact>
      <Space.Compact className="w-full">
        <Form.Item
          className="w-full"
          name={['address', 'detail']}
          rules={[{ required: true, message: '請輸入地址' }]}
        >
          <Input placeholder="請輸入地址" />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
  )
}

export default AddressInput
