import { CaretLeft } from "phosphor-react-native";
import { Container, Logo, BackIcon, BackButton } from "./styles";

import LogoImg from "@assets/logo.png";


type HeaderProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={LogoImg} />
    </Container>
  )
}

