import { useDispatch, useSelector } from "react-redux";
import { searchGenreMovies, selectMovies } from "../MovieList/MovieListSlice";
import { useEffect } from "react";
import { MovieList } from "../";
import { Pagination } from "../../components";
import genreList from "../../util/genres.json";
import styles from "./Genres.module.css";
function Genres(props) {
    const { match, history, location } = props;
    const genre = match?.params?.genre;
    return genre ? (
        <Result {...{ genre, history }} />
    ) : (
        <Picking history={history} />
    );
}
function Picking(props) {
    const { history } = props;
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>Pick one Genre</h1>
            <div className={styles.genreContainer}>
                {genreList.map(({ name, id }) => (
                    <div key={id} className={"col-sm-6 col-md-4"}>
                        <div
                            className={styles.item}
                            onClick={() =>
                                history.push("/genres/" + name, { page: 1 })
                            }
                        >
                            {name}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
function Result(props) {
    const { history, genre } = props;
    const page = history?.location?.state?.page || 1;
    const { apiStatus, data } = useSelector(selectMovies);
    const dispatch = useDispatch();
    const genreId = genreList.find((item) => item.name === genre)?.id;
    useEffect(() => {
        if (!genreId) return;
        dispatch(searchGenreMovies({ genreId, page }));
    }, [dispatch, genreId, page]);
    if (!genreId) return <>genre not found</>;
    if (apiStatus !== "idle") return <>loading</>;
    const toPage = (page) => history.push(history.location.pathname, { page });
    const ThePagination = () => (
        <Pagination
            cur={data?.page}
            total={data?.total_pages}
            toPage={toPage}
        />
    );
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>{genre} Movies</h1>
            <ThePagination />
            <MovieList list={data?.results} history={history} />
            <ThePagination />
        </main>
    );
}

export default Genres;
