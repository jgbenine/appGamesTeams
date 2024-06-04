import {TouchableOpacityProps} from "react-native";
import { ButtonTypeProps, Container, Icon } from "./styles";
import {MaterialIcons} from "@expo/vector-icons"

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap; 
  type?: ButtonTypeProps;
  
};

export function ButtonIcon({icon, type = 'PRIMARY', ...rest} : Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type}  />
    </Container>
  )
}
