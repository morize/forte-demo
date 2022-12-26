import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface IBaseInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: String;
}

const SBaseInput = styled.div`
  display: flex;
  flex-direction: column;

  & input {
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

const BaseInput = ({ label, ...rest }: IBaseInput) => {
  const id = label?.toLowerCase();

  return (
    <SBaseInput>
      {label && <label htmlFor={id}>{label}</label>}
      {label ? <input id={id} name={id} {...rest} /> : <input {...rest} />}
    </SBaseInput>
  );
};

export default BaseInput;
