import PropTypes from "prop-types";
import { mergeStyles } from "../../../util/helper";
import defaultStyles from "./index.module.css";
import { ArrowUpCircle, ArrowDownCircle } from "react-bootstrap-icons";
const iconList = {
    arrowDown: ArrowDownCircle,
    arrowUp: ArrowUpCircle,
};
function IconButton(props) {
    const { children, propStyles, onClick, iconName } = props;
    const styles = mergeStyles(defaultStyles, propStyles);
    const TheIcon = iconList[iconName];
    return (
        <button className={styles.root} onClick={onClick}>
            <i className={styles.icon}>
                <TheIcon size={24} />
            </i>
            {children}
        </button>
    );
}
IconButton.defaultProps = {
    propStyles: {},
};
IconButton.propTypes = {
    iconName: PropTypes.string.isRequired,
    children: PropTypes.any,
    onClick: PropTypes.func,
    propStyles: PropTypes.object,
};
export default IconButton;
