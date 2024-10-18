import { Input as AntdInput, InputProps as AntdInputProps } from "antd";

export default function Input(props: AntdInputProps) {
  return <AntdInput {...props} size="large"/>;
}
