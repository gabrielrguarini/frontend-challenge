import styled from "styled-components";
import SearchIcon from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 352px;
  padding: 10px 16px;
  background-color: var(--bg-secondary);
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--text-dark);
  border: none;
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
