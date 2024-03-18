import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Page() {
  const { username } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Welcome {username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
