import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';

import IconButton from '../Button/IconButton';
import { Close } from '../Icons/Icons';

export interface IBaseInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: String;
  isClearable?: boolean;
  onCloseButtonClicked?: () => void;
}

const SBaseInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;

  & div {
    display: flex;
    border: 1px solid black;
    box-sizing: border-box;
  }

  & input {
    width: 100%;
    padding: 12px;
    font-size: 12px;
    border: 0;

    &:focus {
      outline: none;
    }
  }

  & label {
    font-weight: 600;
    margin-bottom: 6px;
  }
`;

const BaseInput = forwardRef(
  (
    { label, isClearable, onCloseButtonClicked, ...rest }: IBaseInput,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const id = label?.toLowerCase();

    return (
      <SBaseInput>
        {label && <label htmlFor={id}>{label}</label>}
        <div>
          {label ? (
            <input ref={ref} id={id} name={id} {...rest} />
          ) : (
            <input ref={ref} {...rest} />
          )}
          {isClearable && rest.value && (
            <IconButton icon={<Close />} onClick={onCloseButtonClicked} />
          )}
        </div>
      </SBaseInput>
    );
  }
);

export default BaseInput;
