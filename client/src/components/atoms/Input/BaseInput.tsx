import { InputHTMLAttributes, RefObject, forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';

export interface IBaseInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: String;
}

const SBaseInput = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
    font-size: 12px;

    &:focus {
      outline: none;
    }
  }

  & label {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 6px;
  }
`;

const BaseInput = forwardRef(({ label, ...rest }: IBaseInput, ref: ForwardedRef<HTMLInputElement>) => {
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
});

export default BaseInput;
