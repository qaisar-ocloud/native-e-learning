import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../services";
import SubHeading from "../SubHeading";
import colors from "../../../utils/colors";
import Card from "../Card";
export default function CourseList(Props) {
  const { complexity } = Props;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    coursesList();
  }, []);

  const coursesList = () => {
    getCourseList(complexity).then((res) => {
      return setCourses(res);
    });
  };

  return (
    <View>
      <SubHeading
        color={complexity == "Beginner" ? colors.WHITE : "black"}
        headingText={
          complexity === "Beginner" ? "Basic Courses" : complexity + " Courses"
        }
      />
      <FlatList
        data={courses}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        key={courses.id}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
}
