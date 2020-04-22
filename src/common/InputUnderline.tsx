import styled from "styled-components";

export const InputUnderline = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  padding: 0.25rem 0.125rem;

  line-height: 1.5;
  font-size: 0.8rem;

  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
