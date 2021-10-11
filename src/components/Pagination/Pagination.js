import PropTypes from "prop-types";
import logo from "../../assets/tmdb-logo.svg";
import styles from "./Pagination.module.css";
function Pagination(props) {
    const { cur, total, toPage } = props;
    return (
        <div className={styles.root}>
            {cur !== 1 && <span onClick={() => toPage(cur - 1)}>{"<"}</span>}
            <span>{cur}</span>
            {cur !== total && (
                <span onClick={() => toPage(cur + 1)}>{">"}</span>
            )}
        </div>
    );
}
Pagination.defaultProps = {
    propStyles: {},
};
Pagination.propTypes = {};
export default Pagination;
