import { useState } from "react";
import { StyleSheet, TextInput, Alert, Pressable } from "react-native";
import { router } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SubscribeScreen() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    if (!isValidEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }
    Alert.alert("Thanks for subscribing!", "Stay tuned!", [
      {
        text: "OK",
        onPress: () => {
          setEmail("");
          router.back();
        },
      },
    ]);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F4CE14", dark: "#495E57" }}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle" style={styles.title}>
          Subscribe to our newsletter for our latest delicious recipes!
        </ThemedText>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Type your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <ThemedView
          style={[
            styles.button,
            (!email || isLoading) && styles.disabledButton,
          ]}
        >
          <Pressable
            onPress={email && !isLoading ? handleSubscribe : undefined}
            disabled={!email || isLoading}
          >
            <ThemedText style={styles.buttonText}>
              {isLoading ? "Subscribing..." : "Subscribe"}
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#495E57",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
