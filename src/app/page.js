import Image from "next/image";
import Link from "next/link";
import styles from "./homepage.module.css";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Featured } from "../components/featured/Featured";
import CardList from "../components/cardList/CardList";
import { Menu } from "../components/Menu/Menu";

//Fetches posts from database
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  let data = {};

  try {
    data = await getData();
    console.log(data);
  } catch (error) { 
    console.error("Error fetching data:", error);
    return { posts: [], count: 0 };
  }

  return (
    <div className={styles.container}>
      <div className={styles.featured}>
        <Featured data={data} />
      </div>
      <div className={styles.content}>
        <div className={styles.cardList}>
          <CardList page={page} />
        </div>
        <div className={styles.menu}>
          <Menu data={data} />
        </div>
      </div>
    </div>
  );
}
