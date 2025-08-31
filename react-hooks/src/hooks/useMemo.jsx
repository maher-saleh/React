import { useEffect, useMemo, useState } from "react";


export default function UseMemoHook(){

    const [input1Value, setInput1Value] = useState(0);
    const [input2Value, setInput2Value] = useState(0);
    const [output, setOutput] = useState('');
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(prev=>prev+1);
    }, [input1Value, input2Value]);

    const calculatedValue = useMemo(() => {
        setOutput(output + '\n' + 'Calculation done!');
        return (input1Value+input2Value) / 2;
    }, [input2Value]);

    return (
        <div>
            <h4>Using useMemo to optimize performance</h4>

            <div>
                <h5>Page rendered {renderCount} times</h5>
            </div>

            <div>
                <label htmlFor="input1">Input One&nbsp;</label>
                <input type="number" name="input1" id="" onChange={(e) => setInput1Value(Number(e.target.value))} />
                {/* <label htmlFor="">Input One Value is: {input1Value}</label> */}
            </div>

            <div>
                <label htmlFor="input2">Input Two&nbsp;</label>
                <input type="number" name="input2" id="" onChange={(e) => setInput2Value(Number(e.target.value))} />
                {/* <label htmlFor="">Input Two Value is: {input2Value}</label> */}
            </div>

            <div>
                <p>(Number One + Number Two) ÷ 2: {calculatedValue}</p>
                <code>Using useMemo, this will be only be recalculated based on input (not on every render) two changes to save performance</code>
            </div>
        </div>
    );
}