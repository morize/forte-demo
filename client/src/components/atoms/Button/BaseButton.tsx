import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: String;
  children?: React.ReactNode;
}

const SBasedButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 12px 24px;
  
  box-sizing: border-box;
  cursor: pointer;

  & p{
    margin: 6px 0;
  }
`;

const BaseButton = ({ label, children, ...rest }: IBaseButton) => {
  return (
    <SBasedButton {...rest}>
      {children && children}
      {label && <p>{label}</p>}
    </SBasedButton>
  );
};

export default BaseButton;
