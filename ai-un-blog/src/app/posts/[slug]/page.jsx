import React from 'react';
import styles from './singlePage.module.css';
import Image from 'next/image';
import { Menu } from '@/components/Menu/Menu';
import { formatDate } from '../../../../utils/datefix.js'

const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

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

  let posts = {};
  const {slug} = params;
  const data = await getData(slug)

  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { posts: [], count: 0 };
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data?.title}</h1>
            <div className={styles.divider}></div>
            <div className={styles.user}>
              {data?.user?.image && <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt=""  className={styles.avatar} width={40} height={40}/>
              </div>}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{data?.user.name} ○ {data.createdAt}</span>
              </div>
            </div>
            <p className={styles.description}>{data.desc}</p>
          </div>
          {data?.img && <div className={styles.imageContainer}>
            <Image src={data?.img} alt="" fill className={styles.image} />
          </div>}
          </div>
          <div className={styles.content}>
            <div className={styles.post}>
              <div className={styles.body} dangerouslySetInnerHTML={{__html: data?.body}}/>
            </div>
            <Menu data={posts}/>
          </div>
        </div>
  );
};

export default SinglePage;