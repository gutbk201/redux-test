import PropTypes from "prop-types";
import { mergeStyles } from "../../../util/helper.ts";
import defaultStyles from "./index.module.css";
import { ArrowUpCircle, ArrowDownCircle } from "react-bootstrap-icons";
const iconList = {
    arrowDown: ArrowDownCircle,
    arrowUp: ArrowUpCircle,
};
function Button(props) {
    const { children, propStyles, onClick, iconName, ariaLabel } = props;
    const styles = mergeStyles(defaultStyles, propStyles);
    const TheIcon = iconList[iconName];
    return (
        <button className={styles.root} onClick={onClick} ariaLabel={ariaLabel}>
            {iconName && (
                <i className={styles.icon}>
                    <TheIcon size={24} />
                </i>
            )}
            {children && <span className={styles.children}>{children}</span>}
        </button>
    );
}
Button.defaultProps = {
    propStyles: {},
};
Button.propTypes = {
    iconName: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func,
    propStyles: PropTypes.object,
    ariaLabel: PropTypes.string,
};
export default Button;
