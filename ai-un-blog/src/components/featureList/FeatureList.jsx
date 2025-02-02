import React from 'react'
import styles from './featurelist.module.css'
import Link from 'next/link'

const FeatureList = ({sortedPosts}) => {
    
    return (
        <div className={styles.container}>
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              {sortedPosts.slice(1, 5).map((post, index) => (
                <React.Fragment key={index}>
                  <Link href={`/posts/${post.slug}`}>
                    <li>{post.title || 'Untitled Post'}</li>
                  </Link>
                  <div className={styles.divider} />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      );
    };

export default FeatureList