import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: String;
  children?: React.ReactNode;
}

const SBasedButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 12px 24px;
  background: none;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;

  & p {
    margin: 6px 0;
  }
`;

const BaseButton = ({ label, children, ...rest }: IBaseButton) => (
  <SBasedButton {...rest}>
    {children && children}
    {label && <p>{label}</p>}
  </SBasedButton>
);

export default BaseButton;
