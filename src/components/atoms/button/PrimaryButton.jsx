import styled from "styled-components";
import { BaseButton } from "./BaseButton";
export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//BaseButton.jsxで定義しているCSSを継承してCSSを追加できる
//継承せずに作る場合は styled.button` ` などとする
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
