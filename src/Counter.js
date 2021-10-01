import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
    const [num, setNum] = useState(0);
    return (
        <div className={styles.root}>
            <button
                className={styles.button}
                onClick={() => setNum((i) => i - 1)}
            >
                -
            </button>
            <span className={styles.num}>{num}</span>
            <button
                className={styles.button}
                onClick={() => setNum((i) => i + 1)}
            >
                +
            </button>
        </div>
    );
}

export default Counter;
