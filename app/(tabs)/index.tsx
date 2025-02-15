import { Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function WelcomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F4CE14", dark: "#495E57" }}
      headerImage={
        <Image
          source={require("@/assets/images/little-lemon-logo.png")}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">LITTLE LEMON</ThemedText>
      </ThemedView>

      <ThemedView style={styles.descriptionContainer}>
        <ThemedText>Little Lemon, your local Mediterranean Bistro</ThemedText>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <Link href="/subscribe" style={styles.button}>
          <ThemedText style={styles.buttonText}>Newsletter</ThemedText>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  descriptionContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  logo: {
    height: 100,
    width: 100,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#495E57",
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
