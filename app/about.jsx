import { Link } from "expo-router";
import { StyleSheet } from "react-native";

// ThemeView
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  return (
    <ThemedView style={styles.cotainer}>
      <ThemedText style={styles.title}>About</ThemedText>

      <Link href="/" style={styles.link}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
