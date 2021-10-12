import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search as SearchIcon } from "react-bootstrap-icons";
import {
    selectMovieList,
    fetchMovieList,
} from "../../components/MovieList/MovieListSlice";
import styles from "./SearchBar.module.css";
function SearchBar(props) {
    const { history, location } = props;
    const [keyword, setKeyword] = useState("");
    // const { apiStatus, data } = useSelector(selectMovieList);
    const dispatch = useDispatch();
    // useEffect(() => {
    // }, [dispatch]);
    const changeKeyword = (keyword) => setKeyword(keyword.substring(0, 50));
    return (
        <div className={styles.root}>
            <i>
                <SearchIcon size={24} style={{ margin: "1rem" }} />
            </i>
            <input
                value={keyword}
                onChange={(e) => changeKeyword(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
