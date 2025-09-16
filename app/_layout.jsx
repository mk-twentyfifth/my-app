import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";
import { BooksContext } from "../contexts/BooksContext";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <BooksContext>
        <StatusBar value="auto" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />

          <Stack.Screen name="(auth)" options={{ headerShown: false }} />

          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        </Stack>
      </BooksContext>
    </UserProvider>
  );
};

export default RootLayout;
