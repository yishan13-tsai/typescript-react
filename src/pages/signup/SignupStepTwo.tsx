import { Select, Input, Checkbox } from "antd";

function SignupStepTwo() {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const yearOptions = [
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
  ];

  return (
    <>
      <div>
        <div className="font-medium mb-10">
          <div className="mb-4">
            <label className="inline-block mb-2">姓名</label>
            <Input
              style={{ height: "56px" }}
              size="large"
              placeholder="請輸入姓名"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block mb-2">手機號碼</label>
            <Input
              style={{ height: "56px" }}
              size="large"
              placeholder="請輸入手機號碼"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block mb-2">生日</label>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Select
                  showSearch
                  defaultValue="1990年"
                  style={{ width: "100%", height: "56px" }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={ yearOptions }
                />
              </div>
              <div>
                <Select
                  showSearch
                  defaultValue="8月"
                  style={{ width: "100%", height: "56px" }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={ yearOptions }
                />
              </div>
              <div>
                <Select
                  showSearch
                  defaultValue="15日"
                  style={{ width: "100%", height: "56px" }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={ yearOptions }
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-block mb-2">地址</label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <Select
                  showSearch
                  defaultValue="高雄市"
                  style={{ width: "100%", height: "56px" }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={ yearOptions }
                />
              </div>
              <div>
                <Select
                  showSearch
                  defaultValue="新興區"
                  style={{ width: "100%", height: "56px" }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={ yearOptions }
                />
              </div>
            </div>
            <Input
              style={{ height: "56px" }}
              size="large"
              placeholder="詳細地址"
            />
          </div>
          <Checkbox className="text-neutral-0" onChange={onChange}>
            我已閱讀並同意本網站個資使用規範
          </Checkbox>
        </div>
      </div>
    </>
  );
}

export default SignupStepTwo