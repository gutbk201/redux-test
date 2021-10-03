import { useState } from "react";
import styles from "./Counter.module.css";
import { Button, IconButton } from "../../components/Buttons";

function Counter() {
    const [num, setNum] = useState(0);
    const addNum = () => setNum((i) => i + 1);
    const subNum = () => setNum((i) => i - 1);
    return (
        <div className={styles.root}>
            <Button
                onClick={subNum}
                iconName="arrowDown"
                propStyles={{
                    root: styles.buttonRoot,
                }}
            />
            <span className={styles.num}>{num}</span>
            <Button onClick={addNum} iconName="arrowUp">
                foo{" "}
            </Button>
            <div className={styles.part}></div>
        </div>
    );
}

export default Counter;
