import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieList } from "../";
import { selectMovies, searchMovies } from "../MovieList/MovieListSlice";
import { Pagination } from "../../components";
import { SearchBar } from "..";
import styles from "./Search.module.css";
function Search(props) {
    const { history, match } = props;
    const { apiStatus, data } = useSelector(selectMovies);
    const list = Object.values(data.results);
    const keyword = match?.params?.keyword;
    const dispatch = useDispatch();
    useEffect(() => {
        const page = 1;
        dispatch(searchMovies({ keyword, page }));
    }, [dispatch, keyword]);
    if (apiStatus !== "idle") return <>loading</>;
    const toPage = (page) => dispatch(searchMovies({ keyword, page }));
    const ThePagination = () => (
        <Pagination
            cur={data?.page}
            total={data?.total_pages}
            toPage={toPage}
        />
    );
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>Search Result</h1>
            <SearchBar keyword={keyword} />
            <ThePagination />
            <MovieList list={list} history={history} />
            <ThePagination />
        </main>
    );
}

export default Search;
