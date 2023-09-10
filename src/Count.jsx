import { useState } from "react"

export default function Counts(){
    const [count, setCount] = useState(0)
    

    const handelAdd = () =>{
        const newConunt = count +1;
        setCount(newConunt);
    }
    const handelReduse = () =>{
        const newSetCount = count -1;
        setCount(newSetCount);
    }

    return (
        <div style={{ border:'2px solid blue' }}>
            <h3>Count: {count}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelReduse}>Reduse</button>
        </div>
    )
}