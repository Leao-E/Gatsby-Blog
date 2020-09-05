import styled from "@emotion/styled";
import { colors } from "../../assets/styles/colors";

export const Root = styled.div`  
  display: flex;
  flex-direction: column;
  background-color: ${colors.mainLight};
  align-items: center;
  min-height: 100vh;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  flex: 1;
  align-items: center;
  background-color: ${colors.mainLight};
`
