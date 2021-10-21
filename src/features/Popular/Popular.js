import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, fetchMovies } from "../MovieList/MovieListSlice";
import { MovieList } from "../";
import { Pagination } from "../../components";
import { SearchBar } from "../";
import styles from "./popular.module.css";
function Popular(props) {
    const { history, location } = props;
    const { apiStatus, data } = useSelector(selectMovies);
    const list = Object.values(data.results);
    const page = location?.state?.page;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies(page));
    }, [dispatch, page]);
    if (apiStatus !== "idle") return <>loading</>;
    const toPage = (page) => history.push(location.pathname, { page });
    const ThePagination = () => (
        <Pagination cur={data.page} total={data.total_pages} toPage={toPage} />
    );
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>Popular Movies</h1>
            <SearchBar />
            <ThePagination />
            <MovieList list={list} history={history} />
            <ThePagination />
        </main>
    );
}

export default Popular;
