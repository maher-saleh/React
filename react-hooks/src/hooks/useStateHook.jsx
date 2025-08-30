import { useState } from "react";

export default function UseStateHook(){
    const [color, setColor] = useState("Red");
    return (
        <div>
            <h3>Current Color: <span style={{color: color==='Red'?'red':'blue'}}>{color}</span></h3>
            <button onClick={() => color === 'Red' ? setColor("Blue") : setColor("Red")}>Change Color to {color==='Red'?'Blue':'Red'}</button>
        </div>
    );
}