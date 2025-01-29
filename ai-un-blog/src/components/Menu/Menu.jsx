import React from 'react'
import styles from "./menu.module.css"
import MenuItem from '../menuItem/MenuItem'

export const Menu = ({data}) => {

  if (!data || !Array.isArray(data.posts)) {
    return <div>Loading posts...</div>;  // Display loading or error state
  }

  const { posts } = data;

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {posts.length > 0 ? (
            posts?.map((item) => (
              <MenuItem item={item} key={item._id} />
            ))
          ) : (
            <div>No posts available.</div>
          )}
      </div>
    </div>
  )
}