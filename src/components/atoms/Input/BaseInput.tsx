import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';

export interface IBaseInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SBaseInput = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  & input {
    display: flex;
    padding: 12px;
    font-size: 12px;
    border: 1px solid black;

    &:focus {
      outline: none;
    }
  }
`;

const BaseInput = forwardRef(
  ({ label, ...rest }: IBaseInput, ref: ForwardedRef<HTMLInputElement>) => {
    const id = label?.toLowerCase();

    return (
      <SBaseInput>
        {label && <label htmlFor={id}>{label}</label>}

        {label ? (
          <input ref={ref} id={id} name={id} {...rest} />
        ) : (
          <input ref={ref} {...rest} />
        )}
      </SBaseInput>
    );
  }
);

export default BaseInput;
