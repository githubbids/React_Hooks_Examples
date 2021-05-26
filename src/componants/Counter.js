import React,{useState}from 'react'

const Counter = () => {

const[count, setCount] = useState(0);

    return (
        <div align="center">
            <h1>Counter Example in React Hooks.....</h1>
            <h1>{count}</h1>
            <button onClick = {() => setCount(count+1)}>+</button>
            <button onClick = {() => setCount(count-1)}>-</button>
        </div>
    )
}

export default Counter;
