import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/hooks/useTheme";

export default function Index() {

  const {toggleDarkMode} = useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Hi My Name is Aditya Sharma</Text>
      <Text>This is my new app</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        gap: 10,
      },
  content:{
        fontSize: 22,
      }
});
