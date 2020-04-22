import styled from "styled-components";
import { margin, MarginProps } from "styled-system";

export const InputLabel = styled.label<MarginProps>`
  color: rgba(128, 128, 128);
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.5;
  ${margin}
`;
