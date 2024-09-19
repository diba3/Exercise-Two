// import styles from './page.module.css";

import data from "./data.json";
import ArticleCard from "./components/articleCard";

export default function Home() {
  return (
    <main>
      <h1>Article Listing</h1>
      {data.map((article, i) => (
        <ArticleCard />
      ))}
    </main>

  );
}
