import React, { Component } from 'react';
import type { Dayjs } from 'dayjs';
import { Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;
type RangeValue = [Dayjs | null, Dayjs | null] | null;

const dateCalenderStyle: React.CSSProperties = {
    border: '2px solid',
    borderRadius: 8,
    padding: 0
};

const dayTotalStyle: React.CSSProperties = {
    padding: 0
};

const sharedProps = {
    onMouseDown(e: React.MouseEvent) {
        e.stopPropagation();
        e.preventDefault();
    }
};
interface DateCalenderProps {
    days: number;
    onDaysChange: (days: number) => void;
}

interface DateCalenderState {
    dates: RangeValue;
    value: RangeValue;
}

export default class DateCalender extends Component<DateCalenderProps, DateCalenderState> {
    constructor(props: DateCalenderProps) {
        super(props);
        this.state = {
            dates: null,
            value: null,
        };
    }

    handleClear = () => {
        this.setState({ dates: null });
    };
    dateConverter = (startDate: any, timeEnd: any) => {
        const newStartDate = new Date(startDate);
        const newEndDate = new Date(timeEnd);
        const one_day = 1000 * 60 * 60 * 24;
        let result
        result = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / (one_day))
        if (isNaN(result) || result < 0) { return 0 }
        this.props.onDaysChange(result);
        return result;
    }
    render() {
        const { dates, value } = this.state;

        return (
            <RangePicker
                value={dates || value}
                format="YYYY/MM/DD"
                placeholder={["Start", "End"]}
                onCalendarChange={(val) => {
                    this.setState({ dates: val });
                }}
                renderExtraFooter={() => {
                    return (
                        <div className='flex justify-end m-2'>
                            <Button onClick={this.handleClear} className='py-2 px-4 rounded mr-2'>清除日期</Button>
                            <Button type="primary" className='py-2 px-4 rounded'>確定日期</Button>
                        </div>

                    )
                }}
                panelRender={(node) => {
                    const date1 = dates && dates[0] && dates[0].format("YYYY/MM/DD") || '入住';
                    const date2 = dates && dates[1] && dates[1].format("YYYY/MM/DD") || '退房';
                    return (
                        <div {...sharedProps}>
                            <div className='p-4'>
                                <div className="flex items-center grid grid-cols-7 gap-4">
                                    <div className="py-4 col-span-3" style={dayTotalStyle}>

                                        <p className="font-bold text-xl">{this.dateConverter(date1, date2)}晚</p>
                                        <p>{date1} - {date2}</p>
                                    </div>
                                    <div className="py-4  col-span-2" style={dateCalenderStyle}>
                                        <p className="font-bold text-sm">入住</p>
                                        <p>{date1}</p>
                                    </div>
                                    <div className="py-4 col-span-2" style={dateCalenderStyle}>
                                        <p className="font-bold text-sm">退房</p>
                                        <p>{date2}</p>
                                    </div>
                                </div>
                            </div>
                            <div>{node}</div>
                        </div>
                    );
                }}
            />
        );
    }
}

