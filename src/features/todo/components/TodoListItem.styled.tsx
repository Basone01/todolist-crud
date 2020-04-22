import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;

  box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.1);

  margin-bottom: 1rem;
`;

export const Title = styled.h4`
  font-size: 0.8rem;
  margin: 0;
  margin-bottom: 0.25rem;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  margin: 0;
  margin-bottom: 0.25rem;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
