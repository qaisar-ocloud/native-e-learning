import { View, Text } from "react-native";
import React from "react";

export default function SubHeading(Props) {
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 25,
          color: Props.color,
          marginTop: 10,
        }}
      >
        {Props.headingText}
      </Text>
    </View>
  );
}
