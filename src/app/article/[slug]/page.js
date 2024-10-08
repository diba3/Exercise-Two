import ArticleTextDisplay from "@/app/components/ArticleTextDisplay";
import data from "../../data.json";
import styles from "../../page.module.css";
import { formatDateForArticle } from "@/app/components/utils";

export default function Article({ params }) {
  const slug = params.slug;
  const articleData = data.find((article) => slug === article.id);

  return (
    <main>
      <div
        className={styles.articlePageHeaderWrapper}
        style={{ backgroundImage: `url(${articleData.image.url})` }}
      >
        <div className={styles.color}>
          <h1>{articleData.title}</h1>
          <p>{formatDateForArticle(articleData.publishedDate)}</p>
          <p>{articleData.blurb}</p>
        </div>
      </div>
      <div className={styles.articleBody}>
        {articleData?.articleText?.map((text, i) => (
          <ArticleTextDisplay key={i} data={text.data} type={text.type} />
        ))}
      </div>
    </main>
  );
}
