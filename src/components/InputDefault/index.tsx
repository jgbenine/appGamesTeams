import { TextInput, TextInputProps } from "react-native";
import { Container } from "./style";
import { useTheme } from "styled-components/native";

type PropsInput = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: PropsInput) {
  const { COLORS } = useTheme();
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_100}
      {...rest}
    />
  )
}

