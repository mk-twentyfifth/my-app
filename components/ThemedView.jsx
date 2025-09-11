import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/Color";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme(); // light or dark
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe) return <View style={[{ backgroundColor: theme.background }, style]} {...props} />;

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    ></View>
  );
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
