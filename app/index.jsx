import { StyleSheet } from "react-native";
import { Link } from "expo-router";

// ThemeView
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      <Spacer />
      <ThemedText>Readling List App</ThemedText>

      <Spacer />
      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>

      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Us</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, //100vh or h-screen
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    marginVertical: 20, //tailwind : my-5
  },
  card: {
    backgroundColor: "eee",
    padding: 20,
    borderRadius: 6,
    boxShadow: "4px 4px rgba(0,0,0,0.1",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1, // tailwind: boder-b-1
  },
});
