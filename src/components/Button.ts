import styled from "styled-components";

interface ButtonProps {
  types?: "button" | "submit" | "reset";
  red?: boolean;
}

export const DefaultButton = styled.button<ButtonProps>`
  background-color: ${({ red }) => (red && "red") || "#000"};
  border: none;
  padding: 10px;
  color: #fff;
  ${({ type }) => type === "submit" && `background-color: #28a745`}
`;

export const ExtendedButton = styled(DefaultButton)`
  display: block;
  width: 100vw;
`;
