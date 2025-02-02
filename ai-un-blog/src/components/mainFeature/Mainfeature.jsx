import React from 'react'
import styles from './mainfeature.module.css';
import Image from 'next/image'
import FeatureList from '../featureList/FeatureList';
import Link from 'next/link';

const Mainfeature = ({data}) => {

    if (!data.allPosts || data.allPosts.length === 0) {
        return <p>No posts available</p>;
      }
    
      // Ensure posts are sorted by most recent
      const sortedPosts = [...data.allPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
      // Get the most recent post
      const mostRecentPost = sortedPosts[0];

  return (
    <div className={styles.container}>
        <div className={styles.postContainer}>
            <div className={styles.imgContainer}>
                <Image src={mostRecentPost.img} alt="Alt" fill objectFit='cover' className={styles.image}/>
            </div>
            <div className={styles.postContent}>
                <h1 className={styles.featuredMarker}><span>FEATURED</span></h1>
                <div className={styles.textContainer}>
                    <Link href={`/posts/${mostRecentPost.slug}`}>
                        <h1 className={styles.postTitle}>
                            {mostRecentPost.title}
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
        <div className={styles.featureList}>
            <FeatureList sortedPosts={sortedPosts}/>
        </div>
    </div>
  )
}

export default Mainfeature