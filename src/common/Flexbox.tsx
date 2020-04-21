import styled from "styled-components";
import { flexbox, space, FlexboxProps, SpaceProps } from "styled-system";

export const Flexbox = styled.div<FlexboxProps & SpaceProps>`
  display: flex;
  ${flexbox}
  ${space}
`;
