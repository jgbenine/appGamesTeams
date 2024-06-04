import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  `
  
  export const Menssage = styled.Text`
    text-align: center;
    font-size: ${(({theme})=> theme.FONT_SIZE.MD)}px;
    font-family: ${(({theme})=> theme.FONT_FAMILY.REGULAR)};
    color: ${(({theme})=> theme.COLORS.GRAY_700)};
  `