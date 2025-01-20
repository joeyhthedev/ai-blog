import React from 'react';
import styles from './singlePage.module.css';
import Image from 'next/image';
import { Menu } from '@/components/Menu/Menu';
import Comments from '@/components/comments/Comments';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {

  const {slug} = params;
  const data = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data?.title}</h1>
            <div className={styles.user}>
              {data?.img && <div className={styles.userImageContainer}>
                <Image src={data.img} alt="" fill className={styles.avatar}/>
              </div>}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>Joseph Holzman</span>
                <span className={styles.date}>01.01.2025</span>
              </div>
            </div>
          </div>
          {data?.img && <div className={styles.imageContainer}>
            <Image src={data?.img} alt="" fill className={styles.image} />
          </div>}
          </div>
          <div className={styles.content}>
            <div className={styles.post}>
              <div className={styles.body} dangerouslySetInnerHTML={{__html: data?.body}}/>
              <div className={styles.comments}>
                <Comments />
              </div>
            </div>
            <Menu/>
          </div>
        </div>
  );
};

export default SinglePage;