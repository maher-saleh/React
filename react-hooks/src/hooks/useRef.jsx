import { useEffect, useRef, useState } from "react";

export default function UseRefHook() {

    const inputElem = useRef();

    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(inputElem.current.value);
    }, []);

    return (
        <div>
            <h4>Using useRef to get input field value</h4>
            <input type="text" ref={inputElem} placeholder="Type something..." onChange={(e) => setValue(e.target.value)}
            style={{fontSize: "18px", padding: "5px", borderRadius: "8px", width: "300px"}}/>
            <p>Current input value is: <span style={{ color: 'blue' }}>{value}</span></p>
        </div>
    );
}