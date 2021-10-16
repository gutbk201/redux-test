import { useState, useEffect } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import styles from "./SearchBar.module.css";
function SearchBar(props) {
    const [keyword, setKeyword] = useState("");
    const changeKeyword = (keyword) => setKeyword(keyword.substring(0, 50));
    const history = useHistory();
    useEffect(() => {
        setKeyword(props.keyword);
    }, [props.keyword]);
    const onSearch = () => history.push("/search/" + keyword);
    const onEnter = (e) => {
        if (e.key === "Enter") onSearch();
    };
    return (
        <div className={styles.root}>
            <i onClick={onSearch}>
                <SearchIcon size={24} style={{ margin: "1rem" }} />
            </i>
            <input
                value={keyword}
                onChange={(e) => changeKeyword(e.target.value)}
                onKeyPress={onEnter}
            />
        </div>
    );
}

export default SearchBar;

SearchBar.defaultProps = {
    keyword: "",
};
