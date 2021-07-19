import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import PomodoroTimer from "../components/PomodoroTimer";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <PomodoroTimer />
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
