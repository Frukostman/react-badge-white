import { useState } from "react";

const FunctionalCounter = () => {

    //useState Hook
    let [counter, setCounter] = useState(0)

    return (
        <>
            <p>Functional Counter</p>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter-1)}>-</button>
        </>
    );
}

export default FunctionalCounter