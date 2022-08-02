import React, {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    
    return(
        <>
            button count: <span> {count} </span>
            <button className="body" onClick={()=> {setCount(count +1)}}>Increase </button>
            <button className="body" onClick={()=> {setCount(count -1)}}>Decrease </button>
        </>

    )
}
