import { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
}

const SBasedButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 12px 24px;
  background: none;
  border: 1px solid black;
  cursor: pointer;
`;

const BaseButton = ({ label, children, ...buttonProps }: IBaseButton) => (
  <SBasedButton {...buttonProps}>
    {children}
    {label && <p>{label}</p>}
  </SBasedButton>
);

export default BaseButton;
