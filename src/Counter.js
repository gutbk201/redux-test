import { useState } from "react";
function Counter(props) {
    const [num, setNum] = useState(0);
    return (
        <div className="counter-root">
            <button onClick={() => setNum((i) => i - 1)}>-</button>
            <span>{num}</span>
            <button onClick={() => setNum((i) => i + 1)}>+</button>
        </div>
    );
}

export default Counter;
