import { View } from "react-native";
import React from "react";
import Header from "../../components/Header.js/Header";
import colors from "../../../utils/colors";
import CourseList from "../../components/CourseList/CourseList";
export default function Home() {
  return (
    <View>
      <View
        style={{ backgroundColor: colors.PRIMARY, height: 250, padding: 20 }}
      >
        <Header />
      </View>
      <View style={{ padding: 15 }}>
        <View style={{ marginTop: -110 }}>
          <CourseList complexity={"Beginner"} />
          <CourseList complexity={"Advance"} />
        </View>
      </View>
    </View>
  );
}
