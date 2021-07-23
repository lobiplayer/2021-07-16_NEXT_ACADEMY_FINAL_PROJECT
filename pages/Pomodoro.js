import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import PomodoroTimer from "../components/PomodoroTimer";
import PomodoroLoop from "../components/PomodoroLoop";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from "react-native";

export default class App extends React.Component {
  render() {
    return (

      <ScrollView style={styles.container}>
        {/* <Header /> */}
        <Text style={styles.header}>POMODORO TIMER</Text>
        <PomodoroTimer />
        <StatusBar style="auto" />
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',

  },

  header: {
    height: 30,
    width: '100%',
    paddingHorizontal: 20,
    fontSize: 25,
    fontWeight: '500',
    justifyContent: 'center',
    textAlign: 'center',
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
