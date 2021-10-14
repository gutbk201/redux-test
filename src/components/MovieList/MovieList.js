import genresArray from "../../dummyJson/genres.json";
import { Link } from "react-router-dom";
import cn from "classnames";
import missingImage from "../../assets/missing-image.png";
import styles from "./MovieList.module.css";
function MovieList(props) {
    const { history, list } = props;
    if (!list || list.length === 0) return <div>empty</div>;
    const mappedList = list.map((item) => ({
        ...item,
        poster_path: item.poster_path
            ? "https://image.tmdb.org/t/p/w300" + item.poster_path
            : missingImage,
        release_year: item.release_date.slice(0, 4),
        genres: item.genre_ids.map(
            (id) => genresArray.find((gen) => gen.id === id)?.name
        ),
    }));
    return (
        <div className={styles.root}>
            {mappedList.map((item) => (
                <div
                    key={item.id}
                    className={"col-lg-3 col-md-4 col-sm-6 col-12"}
                >
                    <div className={styles.item}>
                        <img
                            src={item.poster_path}
                            alt={"poster"}
                            className={cn(styles.img, "col-md-12", "col-4")}
                            onClick={() => history.push("/movie/" + item.id)}
                        />
                        <div
                            className={cn(
                                styles.sectionA,
                                "col-8",
                                "col-md-12"
                            )}
                        >
                            <h4>
                                <Link
                                    to={"/movie/" + item.id}
                                    className={styles.title}
                                >
                                    {" "}
                                    {item.title}
                                </Link>{" "}
                                ({item.release_year})
                            </h4>
                            <div className={styles.ratingParent}>
                                <div className={styles.rating}>
                                    {item.vote_average}/10
                                </div>
                                <div className={styles.votes}>
                                    {item.vote_count} votes
                                </div>
                            </div>
                            <div>{item.genres.join(", ")}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
