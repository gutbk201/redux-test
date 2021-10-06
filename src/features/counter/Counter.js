import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    incrementIfEven,
    selectCount,
} from "./counterSlice";
import { Button } from "../../components/Buttons";

import styles from "./Counter.module.css"; // must put at the end to overwrite

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");
    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div className={styles.root}>
            <div className={styles.row}>
                <Button
                    ariaLabel="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </Button>
                <span className={styles.value}>{count}</span>
                <Button
                    ariaLabel="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </Button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <Button
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </Button>
                <Button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    Add Async
                </Button>
            </div>
            <div className={styles.row}>
                <Button
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </Button>
                <Button
                    onClick={() => dispatch(incrementIfEven(incrementValue))}
                >
                    Add If Even
                </Button>
            </div>
        </div>
    );
}
