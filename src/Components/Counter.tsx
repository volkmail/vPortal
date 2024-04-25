import {useState} from "react";
import './Counter.styles.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (<div>
        <button onClick={() => setCount(prevState => prevState + 1)}>add count</button>
        <span>{count}</span>
    </div>)
} 