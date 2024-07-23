import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.teks}>Halo kontol!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  teks: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});
