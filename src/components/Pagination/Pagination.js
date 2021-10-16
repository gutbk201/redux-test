import PropTypes from "prop-types";
import styles from "./Pagination.module.css";
function Pagination(props) {
    const { cur, total, toPage } = props;
    return (
        <div className={styles.root}>
            {cur !== 1 && <span onClick={() => toPage(cur - 1)}>{"Prev"}</span>}
            {cur !== total && (
                <span onClick={() => toPage(cur + 1)}>{"Next"}</span>
            )}
        </div>
    );
}
Pagination.defaultProps = {
    propStyles: {},
};
Pagination.propTypes = {
    cur: PropTypes.number,
    total: PropTypes.number,
    toPage: PropTypes.func,
};
export default Pagination;
