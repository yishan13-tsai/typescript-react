import { Form, FormInstance, Input, Select, Space } from 'antd'
import { useEffect, useState } from 'react'
import twDistrict from '@/assets/tw-district.json'

type AddressInputProps = {
  form: FormInstance
}

type CityType = {
  id: number
  name: string
}

type DistrictType = {
  zip: string
  name: string
}
const AddressInput = ({ form }: AddressInputProps) => {
  const [cityOptions, setCityOptions] = useState<CityType[]>([])
  const [districtOptions, setDistrictOptions] = useState<DistrictType[]>([])
  const selectedAddress = Form.useWatch('address', form)
  useEffect(() => {
    setCityOptions(
      twDistrict.map((item, id) => {
        return { name: item.name, id }
      }),
    )
  }, [])
  useEffect(() => {
    const selectedCity =
      form.getFieldValue(['address', 'city']) || selectedAddress?.city
    const newDistrictOption: DistrictType[] =
      twDistrict.find((item) => item.name === selectedCity)?.districts || []
    setDistrictOptions(newDistrictOption)
  }, [form, selectedAddress])

  return (
    <Form.Item style={{ fontWeight: 700 }} label="地址">
      <Space.Compact size="middle" className="w-full">
        <Form.Item
          className="w-full mr-4 mb-4"
          name={['address', 'city']}
          rules={[{ required: true, message: '請選擇城市' }]}
        >
          <Select
            placeholder="縣市"
            options={
              (cityOptions?.length &&
                cityOptions.map((item: CityType) => ({
                  label: item.name,
                  value: item.name,
                }))) ||
              []
            }
          />
        </Form.Item>
        <Form.Item
          className="w-full"
          name={['address', 'county']}
          rules={[{ required: true, message: '請選擇地區' }]}
        >
          <Select
            placeholder="地區"
            options={
              (districtOptions?.length &&
                districtOptions.map((item: DistrictType) => ({
                  label: item.name,
                  value: item.name,
                }))) ||
              []
            }
          />
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
