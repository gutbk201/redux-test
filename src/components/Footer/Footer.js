import PropTypes from "prop-types";
import logo from "../../assets/tmdb-logo.svg";
import styles from "./Footer.module.css";
function Footer(props) {
    return (
        <div className={styles.root}>
            <span>Resource provided by</span>
            <img
                src={logo}
                alt="tmdb-logo"
                onClick={() =>
                    window.open("https://www.themoviedb.org/", "_blank")
                }
            ></img>
        </div>
    );
}
Footer.defaultProps = {
    propStyles: {},
};
Footer.propTypes = {
    iconName: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func,
    propStyles: PropTypes.object,
    ariaLabel: PropTypes.string,
};
export default Footer;
