import genresArray from "../../dummyJson/genres.json";
import { Link } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import styles from "./MovieList.module.css";
function MovieList(props) {
    console.log(props);
    const { history } = props;
    const list = props.list.map((item) => ({
        ...item,
        poster_path: "https://image.tmdb.org/t/p/w300" + item.poster_path,
        release_year: item.release_date.slice(0, 4),
        genres: item.genre_ids.map(
            (id) => genresArray.find((gen) => gen.id === id)?.name
        ),
    }));
    return (
        <div className={styles.root}>
            {list.map((item) => (
                <div key={item.id} className={"col-lg-3 col-md-4 col-sm-6"}>
                    <div className={styles.item}>
                        <img
                            src={item.poster_path}
                            alt={"poster"}
                            className={styles.img}
                            onClick={() => history.push("/movie/" + item.id)}
                        />
                        <div className={styles.sectionA}>
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
                            <div className={styles.rating}>
                                {item.vote_average}/10
                            </div>
                            <div className={styles.votes}>
                                {item.vote_count} votes
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
