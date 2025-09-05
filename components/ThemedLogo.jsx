import { View, Text, useColorScheme } from "react-native";

//import Logo
import DarkLogo from "../assets/img/logo_dark.png";
import LightLogo from "../assets/img/logo_light.ping";

const ThemedLogo = ({...props}) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
