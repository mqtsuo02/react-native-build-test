import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-primitives"
import Button from "./Button"
import Counter from "./Counter"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f8f9fa",
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

let count = 0

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Counter count={this.state.count} />
        <Button label="Button" onCountUp={this.countUp.bind(this)} />
      </View>
    )
  }
}
