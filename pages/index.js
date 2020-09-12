import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Row, Col } from "antd";

// Functional component
function Tweet({ avatar, author, message, date, likesCount, comments }) {
  return (
    <Row
      style={{
        border: "1px solid #f0f0f0",
        borderRadius: "10px",
        padding: "1rem",
      }}
      gutter={24}
    >
      <Col flex="100px">
        <img
          src={avatar}
          alt="User avatar"
          style={{ width: "100%", borderRadius: "100%" }}
        />
      </Col>
      <Col flex="auto">
        <Row>{author}</Row>
        <Row>{message}</Row>
        TODO: Add the icons
      </Col>
    </Row>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col flex="100px">Menu</Col>
        <Col flex={1}>
          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1278619568508985344/MCS_SOvw_400x400.jpg"
            author="Paul Martinez"
            message="OMG! I'm enjoying this workshop a lot. Thanks for coming <3"
            date={new Date()}
            likesCount={10}
            comments={[
              {
                author: "Paco",
                message: "Keep it up!",
              },
            ]}
          />

          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1278619568508985344/MCS_SOvw_400x400.jpg"
            author="Jorge Ferreiro @jgferreiro"
            message="OMG! I'm enjoying this workshop a lot. Thanks for coming <3"
            date={new Date()}
            likesCount={10}
            comments={[
              {
                author: "Paco",
                message: "Keep it up!",
              },
            ]}
          />
        </Col>
        <Col flex={0}>Sidebar</Col>
      </Row>
    </div>
  );
}
