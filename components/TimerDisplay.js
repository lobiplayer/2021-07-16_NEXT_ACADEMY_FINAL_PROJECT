import React from "react";
import { StyleSheet, Text, View } from "react-native";

class TimerDisplay extends React.Component {
  // display currently running timer
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {Math.floor(this.props.time / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (this.props.time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
    );
  }
}

export default TimerDisplay;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    marginBottom: "10%",
    marginLeft: "8%",
    marginRight: "8%",
    padding: "20%",
    borderColor: "white",
    borderRadius: 80,
    borderWidth: 5,
    alignItems: "center",
    backgroundColor: "#2b6ac2",
  },
  textStyle: {
    color: "white",
    fontSize: 50,
    fontWeight: "400",
  },
});
