import {Button} from "antd";
import {ReactNode} from "react";
interface Props {
  children?: ReactNode
}

export const PrimaryButton = ({children}: Props) => {
  return <Button type="primary">{children}</Button>;
};
