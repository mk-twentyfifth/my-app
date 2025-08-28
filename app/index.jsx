import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>The Number 1</Text>
      <Text
        style={{
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        Readling List App
      </Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      
      <Link href="/contact" style={styles.link}>
        Contact Us
      </Link>
    </View>
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
