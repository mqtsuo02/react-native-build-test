import React from "react"
import { StyleSheet, Text, View } from "react-primitives"

const style = StyleSheet.create({
  frame: {
    alignItems: "center",
    borderColor: "#7952b3",
    borderWidth: 2,
    height: 80,
    justifyContent: "center",
    margin: 8,
    width: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
  },
})

export default props => (
  <View style={style.frame}>
    <Text style={style.text}>{props.count}</Text>
  </View>
)
