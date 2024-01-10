import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../utils/colors";
export default function Card(Props) {
  const { item } = Props;
  return (
    <View style={styles.card}>
      <Image source={{ uri: item?.banner?.url }} style={styles.img} />

      <View style={styles.main}>
        <Text style={styles.words}>{item.name}</Text>
      </View>

      <View style={[{ justifyContent: "space-between" }, styles.main]}>
        <View style={[styles.main, { marginLeft: 5, marginRight: 5 }]}>
          <Ionicons name="book-outline" size={15} />
          <Text>{item?.chapters?.length} Chapters</Text>
        </View>

        <View style={styles.main}>
          <Ionicons name="md-time-outline" size={15} />
          <Text stylest={styles.words}>{item.time}</Text>
        </View>
      </View>
      <Text style={[{ color: colors.PRIMARY, marginLeft: 2 }, styles.words]}>
        {Number(item.price) === 0 ? "free" : item.price}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
  },
  img: {
    borderRadius: 15,
    height: 150,
    width: 210,
  },
  card: {
    backgroundColor: colors.WHITE,
    padding: 7,
    marginRight: 15,
    borderRadius: 15,
  },
  words: {
    padding: 5,
    fontSize: 17,
    fontFamily: "outfit-medium",
  },
});
