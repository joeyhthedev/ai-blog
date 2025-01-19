import Image from "next/image";
import Link from "next/link";
import styles from "./homepage.module.css";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { CategoryList } from "../components/categoryList/CategoryList";
import { Featured } from "../components/featured/Featured";
import CardList from "../components/cardList/CardList";
import { Menu } from "../components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <div className={styles.cardList}>
          <CardList page={page} />
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div>
  );
}
