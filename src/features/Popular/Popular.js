import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectMovieList,
    fetchMovieList,
} from "../../components/MovieList/MovieListSlice";
import { MovieList, Pagination } from "../../components";
import styles from "./popular.module.css";
function Popular(props) {
    const { history, location } = props;
    const { apiStatus, data } = useSelector(selectMovieList);
    const dispatch = useDispatch();
    const fetchNew = apiStatus === "init" || location?.state?.getNew;
    useEffect(() => {
        if (!fetchNew) return;
        console.log("fetch new");
        const page = 1;
        dispatch(fetchMovieList(page));
    }, [dispatch, fetchNew]);
    if (apiStatus !== "idle") return <>loading</>;
    const toPage = (page) => dispatch(fetchMovieList(page));
    return (
        <main className={styles.root}>
            <Pagination
                cur={data.page}
                total={data.total_pages}
                toPage={toPage}
            />
            <h1 className={styles.title}>Popular Movies</h1>
            <MovieList list={data?.results} history={history} />
            <Pagination
                cur={data.page}
                total={data.total_pages}
                toPage={toPage}
            />
        </main>
    );
}

export default Popular;
