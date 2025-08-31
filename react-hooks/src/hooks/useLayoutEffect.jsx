import { useLayoutEffect, useRef, useState } from "react";


export default function UseLayoutEffect(){

    const boxRef = useRef();
    const [width, setWidth] = useState(0);

    useLayoutEffect(()=>{
        setWidth(boxRef.current.offsetWidth);
    }, []);

    return (
        <div ref={boxRef}>
            <h2>Using useLayoutEffect to get parent div width before component rendering to prevent flickering</h2>

            <h4>My initial width is: {width}px</h4>
            <button onClick={()=>setWidth(boxRef.current.offsetWidth)}>Recalculate</button>
        </div>
    );
}