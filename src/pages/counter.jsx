import React, {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    
    return(
        <>
            button count: <span>{count}</span>
            <button onClick={()=> {setCount(count +1)}}>Increase</button>
            <button onClick={()=> {setCount(count -1)}}>Decrease</button>
        </>

    )
}
