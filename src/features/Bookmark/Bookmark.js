import { selectBookmark } from "./BookmarkSlice";
import { useSelector } from "react-redux";
import { MovieList } from "../";
import styles from "./Bookmark.module.css";
function Bookmark(props) {
    const { history } = props;
    const bookmark = useSelector(selectBookmark);
    const list = Object.values(bookmark.data);
    return (
        <main className={styles.root}>
            <h1 className={styles.title}>Bookmark</h1>
            <MovieList list={list} history={history} />
        </main>
    );
}

export default Bookmark;
