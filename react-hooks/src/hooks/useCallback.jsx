import { useCallback, useEffect, useState } from "react";
import Component from "../components/component";


export default function UseCallbackHook(){

    const [input1Value, setInput1Value] = useState(0);
    const [input2Value, setInput2Value] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(prev=>prev+1);
    }, [input1Value, input2Value]);

    const fn = useCallback(() => {}, [input2Value]);

    return (
        <div>
            <h4>Using useCallback to optimize performance</h4>

            <div>
                <h5>Page rendered {renderCount} times</h5>
            </div>

            <div>
                <label htmlFor="input1">Input One&nbsp;</label>
                <input type="number" name="input1" id="" onChange={(e) => setInput1Value(Number(e.target.value))} />
            </div>

            <div>
                <label htmlFor="input2">Input Two&nbsp;</label>
                <input type="number" name="input2" id="" onChange={(e) => setInput2Value(Number(e.target.value))} />
            </div>

            <Component fn={fn} />
        </div>
    );
}