import { useState } from "react";

function Counter(){

    let [count , setCount] = useState(0);

    const decreaseCount = () =>{
        setCount(count--);
    }

    const resetCount = ()  =>{
        setCount(0);
    }

    const increaseCount = () =>{
        setCount(count++);
    }

    return(
        <div className="counter-container">
            <h1 className='counter-number'>{count}</h1>
            <button className='button' onClick={decreaseCount}>Decrement</button>
            <button className='button' onClick={resetCount}>Reset</button>
            <button className='button' onClick={increaseCount}>Increment</button>
            <br />
            <br />
        </div>
    );
    
}

export default Counter;