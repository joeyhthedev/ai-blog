import React from 'react';
import styles from './singlePage.module.css';
import Image from 'next/image';
import { Menu } from '@/components/Menu/Menu';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>We Are In the End Times. It Was Good knowing Everyone.</h1>
            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/asset/Guterres.jpg" alt="" fill className={styles.avatar}/>
              </div>
              <div className={styles.userTextContainer}>
                <span className={styles.username}>Joseph Holzman</span>
                <span className={styles.date}>01.01.2025</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/asset/Guterres.jpg" alt="" fill className={styles.image} />
          </div>
          </div>
          <div className={styles.content}>
            <div className={styles.post}>
              <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <Menu/>
          </div>
        </div>
  );
};

export default SinglePage;