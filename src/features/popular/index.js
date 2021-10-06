import dummy from "../../dummyJson/popular.json";
import styles from "./popular.module.css";
import MovieList from "../../components/MovieList";
function Popular(props) {
    const dbResults = dummy?.results;
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>Popular Movies</h1>
            <MovieList list={dbResults} />
        </main>
    );
}

export { Popular };
