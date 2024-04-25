import {useState} from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (<div>
        <button onClick={() => setCount(prevState => prevState + 1)} className={styles.btn}>add count</button>
        <span>{count}</span>
    </div>)
} 