import React from 'react'
import styles from './mainfeature.module.css';
import Image from 'next/image'
import FeatureList from '../featureList/FeatureList';
import Link from 'next/link';

const Mainfeature = ({data}) => {

  const mostRecentPostTitle = data.posts.length > 0 ? data.posts[0].title : null;
  const mostRecentPost = data.posts.length > 0 ? data.posts[0] : null;

  return (
    <div className={styles.container}>
        <div className={styles.postContainer}>
            <div className={styles.imgContainer}>
                <Image src={mostRecentPost.image} alt="Antonio Guterres Speaking" fill objectFit='cover' className={styles.image}/>
            </div>
            <div className={styles.postContent}>
                <h1 className={styles.featuredMarker}><span>FEATURED</span></h1>
                <div className={styles.textContainer}>
                    <Link href={`/posts/${mostRecentPost.slug}`}>
                        <h1 className={styles.postTitle}>
                            {mostRecentPostTitle}
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
        <div className={styles.featureList}>
            <FeatureList data={data}/>
        </div>
    </div>
  )
}

export default Mainfeature