import * as React from "react"
import { StyleSheet, Text, View } from "react-primitives"

const style = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: "#7952b3",
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    margin: 8,
    width: 160,
  },
  text: {
    color: "#7952b3",
    fontSize: 18,
    fontWeight: "500",
  },
})

interface Props {
  label: string
  onCountUp(): {}
}

export default (props: Props) => (
  <View
    style={style.button}
    // @ts-ignore
    onClick={props.onCountUp}
    onTouchEnd={props.onCountUp}
  >
    <Text style={style.text}>{props.label}</Text>
  </View>
)
