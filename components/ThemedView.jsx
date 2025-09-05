import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/Color";

const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme(); // light or dark
  const theme = Colors[colorScheme] ?? Colors.light;
  return <View style={[{ backgroundColor: theme.backgroundColor }, style]} {...props}></View>;
};

export default ThemedView;

// #1

// const ThemedView = ({ style, ...props }) => {
//   const colorScheme = useColorScheme(); // light or dark
//   const theme = Colors[colorScheme] ?? Colors.light;
//   return <View style={[{ backgroundColor: theme.backgroundColor }, style]} {...props}/>;
// };

// #2

// const ThemedView = ({ style, , children, ...props }) => {
//   const colorScheme = useColorScheme(); // light or dark
//   const theme = Colors[colorScheme] ?? Colors.light;
//   return <View style={[{ backgroundColor: theme.backgroundColor }, style]} {...props>
//      {Children}
//      </View>;
// };