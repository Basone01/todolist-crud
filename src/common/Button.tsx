import styled, { css } from "styled-components";
import { MarginProps, margin } from "styled-system";

type Props = MarginProps & {
  primary?: boolean;
};

export const Button = styled.button<Props>`
  border-radius: 0.25rem;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      font-weight: 600;
    `}

  ${margin}
`;
