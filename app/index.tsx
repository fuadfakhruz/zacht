import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useFonts, Outfit_400Regular } from "@expo-google-fonts/outfit";

export default function Index() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Project Management</Text>
        <Text style={styles.subtitle}>Project Management</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    fontFamily: "Outfit_400Regular",
    display: "flex",
    flex: 1,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Outfit_400Regular",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Outfit_400Regular",
  },
});
