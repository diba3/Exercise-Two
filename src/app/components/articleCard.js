import Article from "../article/[slug]/page"
import styles from "../page.module.css"
import Link from "next/link"
export default function ArticleCard({title, publishedDate, blurb, image, id}) {

    return (
        <div className={styles.articleCardWrapper}>
            <div className={styles.picture}>
            <img src={image.url} alt={image.alt} />
            </div>
            <div className={styles.text}>
            <h2>{title}</h2>
            <p>{publishedDate}</p>
            <p>{blurb}</p>
            <Link href={`article/${id}`}>Read More</Link>
            </div>
        </div>
    )
}