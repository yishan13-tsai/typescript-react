import plus from '@/assets/icons/ic_plus.svg';
import minus from '@/assets/icons/ic_minus.svg';
import { Button } from 'antd';
import { Component } from 'react';

const numStyle = {
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: 50,
};
interface UnitProps {
    quantity: number;
    onQuantityChange: (newQuantity: number) => void;
}
interface UnitState {
    quantity: number;
}
export default class Unit extends Component<UnitProps, UnitState> {
    constructor(props: UnitProps) {
        super(props);
        this.state = {
            quantity: props.quantity
        };
    }
    handlePlus = () => {
        this.setState({ quantity: this.state.quantity > 0 ? this.state.quantity - 1 : 0 }, () => {
            this.props.onQuantityChange(this.state.quantity);
        });
    }

    handleMinus = () => {
        this.setState({ quantity: this.state.quantity + 1 }, () => {
            this.props.onQuantityChange(this.state.quantity);
        });
    }
    render() {
        return (
            <>
                <div className="justify-center">
                    <Button style={numStyle} onClick={this.handleMinus}>
                        <img src={plus} alt="size" />
                    </Button>
                    <span className="text-2xl ml-6 mr-6" >{this.state.quantity}</span>
                    <Button style={numStyle} onClick={this.handlePlus}>
                        <img src={minus} alt="size" />
                    </Button>
                </div>
            </>
        )
    }
}