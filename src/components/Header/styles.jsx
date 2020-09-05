import styled from "@emotion/styled";
import { colors } from "../../assets/styles/colors";

export const Container = styled.header`
  width: 100%;
  position: sticky; 
  top: 0; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;  
  align-items: center;
  background-color: ${colors.mainLight}
`