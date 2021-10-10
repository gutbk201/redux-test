import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectMovieList,
    fetchMovieList,
} from "../../components/MovieList/MovieListSlice";
import { MovieList } from "../../components";
import styles from "./popular.module.css";
function Popular(props) {
    const { history } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        const page = 1;
        dispatch(fetchMovieList(page));
    }, [dispatch]);
    const dbResponds = useSelector(selectMovieList);
    if (dbResponds.status !== "idle") return <div>loading</div>;
    const list = dbResponds?.data?.results;
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>Popular Movies</h1>
            <MovieList list={list} history={history} />
        </main>
    );
}

export default Popular;
