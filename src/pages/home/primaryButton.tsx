import {Button} from "antd";
import {ReactNode} from "react";

interface Props {
  children?: ReactNode,
  onClick?: () => void,
  loading?: boolean,
}

export const PrimaryButton = ({children, ...props}: Props) => {
  return <Button type="primary" {...props}>{children}</Button>;
};
