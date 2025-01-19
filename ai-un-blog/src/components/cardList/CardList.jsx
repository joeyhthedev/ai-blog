import React from 'react';
import styles from "./cardList.module.css";
import { Card } from '../card/Card';

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const CardList = async ({ page }) => {
  let data = [];

  try {
    data = await getData(page);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading posts. Please try again later.</div>;
  }

  // Check if data is in the expected format
  if (!Array.isArray(data)) {
    console.error("Data structure error:", data);
    return <div>Unexpected data format. Please try again later.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data.length > 0 ? (
          data.map((item) => (
            <Card item={item} key={item._id} />
          ))
        ) : (
          <div>No posts available.</div>
        )}
      </div>
    </div>
  );
};

export default CardList;