import cn from "classnames";
import { mapObject } from "rambdax";

function mergeStyles(defaultStyles, propStyles) {
    return mapObject((value, key) => cn(value, propStyles[key]), defaultStyles);
}

export { mergeStyles };
