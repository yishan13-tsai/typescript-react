import { Select, Form, Space } from 'antd'

const { Option } = Select

const BirthdayInput = () => {
  const years = Array.from(
    { length: 80 },
    (_, index) => new Date().getFullYear() - index,
  )
  const months = Array.from({ length: 12 }, (_, index) => index + 1)
  const days = Array.from({ length: 31 }, (_, index) => index + 1)

  return (
    <>
      <Form.Item style={{ fontWeight: 700 }} label="生日">
        <Space.Compact size="middle" className="w-full">
          <Form.Item
            className="w-full mr-4 mb-4"
            name={['birthday', 'year']}
            rules={[{ required: true, message: '年份' }]}
          >
            <Select placeholder="年">
              {years.map((year) => (
                <Option key={year} value={year}>
                  {year}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            className="w-full mr-4"
            name={['birthday', 'month']}
            rules={[{ required: true, message: '月' }]}
          >
            <Select placeholder="月">
              {months.map((month) => (
                <Option key={month} value={month}>
                  {month}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            className="w-full"
            name={['birthday', 'day']}
            rules={[{ required: true, message: '日' }]}
          >
            <Select placeholder="日">
              {days.map((day) => (
                <Option key={day} value={day}>
                  {day}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Space.Compact>
      </Form.Item>
    </>
  )
}

export default BirthdayInput
