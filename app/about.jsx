import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View style={styles.cotainer}>
      <Text style={styles.title}>About</Text>

      <Link href="/" style={styles.link}>
        Back Home
      </Link>
    </View>
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
