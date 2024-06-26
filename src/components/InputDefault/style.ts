import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    background-color: ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.WHITE};
  `}

  flex: 1;
  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  padding: 16px;
`;
