import cn from "classnames";
import { mapObject } from "rambdax";
interface StylesFace {
    [key: string]: string;
}
function mergeStyles(defaultStyles: StylesFace, propStyles: StylesFace) {
    return mapObject(
        (value: string, key: string) => cn(value, propStyles[key]),
        defaultStyles
    );
}

export { mergeStyles };
