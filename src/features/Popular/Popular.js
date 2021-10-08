import dummy from "../../dummyJson/popular.json";
import styles from "./popular.module.css";
import MovieList from "../../components/MovieList";
function Popular(props) {
    const dbResults = dummy?.results;
    const { history } = props;
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>Popular Movies</h1>
            <MovieList list={dbResults} history={history} />
        </main>
    );
}

export default Popular;
