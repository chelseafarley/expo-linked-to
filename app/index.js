import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link
        href={{
          pathname: "/user/[username]",
          params: { username: "misscoding" },
        }}
      >
        View User
      </Link>
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
