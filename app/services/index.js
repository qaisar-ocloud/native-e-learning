import { request, gql } from "graphql-request";

const BASE_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clr6alftk04i601w5ert6tjrd/master";

export const getCourseList = async (complexity) => {
  const query = gql`
    query CourseList($complexity: Complexity!) {
      courses(where: { level: $complexity }) {
        createdAt
        id
        name
        level
        price
        publishedAt
        time
        updatedAt
        author
        banner {
          url
        }
      }
    }
  `;

  try {
    const result = await request(BASE_URL, query, { complexity });

    return result?.courses;
  } catch (error) {
    console.log("🚀 ~ getCourseList ~ error:", error);
    throw error;
  }
};
