import React from 'react';
import styles from "./cardList.module.css";
import { Card } from '../card/Card';
import { Pagination } from '../pagination/Pagination';

const CardList = ({ page, data }) => {

  if (!data || !Array.isArray(data.posts)) {
    return <div>Loading posts...</div>;  // Display loading or error state
  }

  const { posts, count } = data;
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.length > 0 ? (
          posts?.map((item) => (
            <Card item={item} key={item._id} />
          ))
        ) : (
          <div>No posts available.</div>
        )}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
};

export default CardList;