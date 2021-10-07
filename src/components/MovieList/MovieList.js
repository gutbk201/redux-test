import genresArray from "../../dummyJson/genres.json";
import cn from "classnames";

import styles from "./MovieList.module.css";
function MovieList(props) {
    const rawList = props.list;
    const list = rawList
        .map((item) => ({
            ...item,
            poster_path: "https://image.tmdb.org/t/p/w200" + item.poster_path,
            release_year: item.release_date.slice(0, 4),
            genres: item.genre_ids.map(
                (id) => genresArray.find((gen) => gen.id === id)?.name
            ),
        }))
        .slice(0, 2);
    return (
        <div className={"d-flex flex-column"}>
            {list.map((item) => (
                <div key={item.id} className={styles.item}>
                    <img
                        src={item.poster_path}
                        alt={"poster"}
                        className={styles.img}
                    />
                    <div className={styles.sectionA}>
                        <h4>
                            {item.title} ({item.release_year})
                        </h4>
                        <div className={styles.rating}>
                            {item.vote_average}/10
                        </div>
                        <div className={styles.overview}>{item.overview}</div>
                    </div>
                    <div className={cn(styles.sectionB, "d-none d-md-block")}>
                        <div>{item.genres.join(", ")}</div>
                        <div className={styles.votes}>
                            {item.vote_count} votes
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
