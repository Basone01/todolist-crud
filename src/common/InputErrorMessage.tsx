import styled from "styled-components";
import { margin, MarginProps } from "styled-system";

export const InputErrorMessage = styled.span<MarginProps>`
  line-height: 1.5;
  font-size: 0.8rem;

  color: rgb(255, 64, 64);

  ${margin}
`;
