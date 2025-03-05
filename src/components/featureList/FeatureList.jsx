import React from 'react'
import styles from './featurelist.module.css'
import Link from 'next/link'

const FeatureList = ({sortedPosts}) => {
    
    return (
        <div className={styles.container}>
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              {sortedPosts?.slice(1, 5).map((post, index) => (
                <li key={post.slug} className={styles.listItem}>
                  <Link href={`/posts/${post.slug}`} className={styles.link}>
                    {post.title || 'Untitled Post'}
                  </Link>
                  <div className={styles.divider}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

export default FeatureList