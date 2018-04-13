import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-primitives"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center",
  },
})

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    )
  }
}
