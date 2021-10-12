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
    useEffect(() => {
        // this one doesn't work on mobile
        // setTimeout(
        //     () => window.scrollTo({ top: 10000, behavior: "instant" }),
        //     100
        // );
        return () => {
            // const { scrollY, scrollMaxY } = window;
            // const dom = document.querySelector("#root>div");
            // console.log(scrollY, scrollMaxY, dom.scrollY, dom.scrollMaxY);
        };
    }, []);
    if (apiStatus !== "idle") return <>loading</>;
    const toPage = (page) => dispatch(fetchMovieList(page));
    const ThePagination = () => (
        <Pagination cur={data.page} total={data.total_pages} toPage={toPage} />
    );
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>Popular Movies</h1>
            <ThePagination />
            <MovieList list={data?.results} history={history} />
            <ThePagination />
        </main>
    );
}

export default Popular;
