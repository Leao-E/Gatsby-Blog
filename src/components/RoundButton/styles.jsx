import styled from "@emotion/styled";
import { colors } from "../../assets/styles/colors";

const Button = styled.button`
  margin: 1rem;
  color: ${colors.mainLight};
  background-color: ${colors.mainColor};
  border: 0;
  outline:none;
  height: 2.5rem;
  width: 2.5rem;
  min-width: 2.5rem;
  border-radius: 50%;
  padding: 0;            
  font-size: 1.4rem;
  display: flex;
  justify-content:center;
  align-items: center;
  &:hover {
    background-color: red;
  }`;

export default Button;