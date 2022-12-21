import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: String;
}

const StyledButton = styled.button`
  width: 100px;
  padding: 12px;
`;

const Button = ({ label, ...rest }: IButton) => {
  return <StyledButton {...rest}>{label}</StyledButton>;
};

export default Button;
