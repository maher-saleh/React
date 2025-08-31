import { useState, useEffect } from "react";

export default function UseEffectHook(){

    const [button1State, setbutton1State] = useState(false);
    const [button2State, setbutton2State] = useState(false);
    const [timer1count, setTimer1count] = useState(0);
    const [timer2count, setTimer2count] = useState(0);
    const [timer1state, setTimer1state] = useState(false);
    const [timer2state, setTimer2state] = useState(false);

    useEffect(() => {
        let timer1;
        if(button1State){
            if (!timer1state) {
                timer1 = setInterval(() => {
                    setTimer1state(true);
                    setTimer1count((prev) => prev + 1);
                }, 1000);
            }
        }else{
            if (timer1state) {
                setTimer1state(false);
                clearInterval(timer1);
            }
        }

        return ()=>{
            clearInterval(timer1);
        }

    }, [button1State]);
    
    useEffect(() => {

        let timer2;
        if(button1State && button2State){
            if (!timer2state) {
                timer2 = setInterval(() => {
                    setTimer2state(true);
                    setTimer2count((prev) => prev + 1);
                }, 1000);
            }
        }else{
            if (timer2state) {
                setTimer2state(false);
                clearInterval(timer2);
            }
        }

        return ()=>{
            clearInterval(timer2);
        }

    }, [button1State, button2State]);

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                <h5 style={{alignItems: 'center', display: 'flex', gap: '10px', height: 0}}>This timer depends on button 1: <h3 style={{ display: 'inline', color: '#0000FF'}}>{timer1count}</h3></h5>
                <button onClick={() => setbutton1State(!button1State)}>Button 1: <span style={{color: button1State?'green':'red'}}>{button1State?'ON':'OFF'}</span></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                <h5 style={{alignItems: 'center', display: 'flex', gap: '10px', height: 0}}>This timer depends on both buttons 1 and 2: <h3 style={{ display: 'inline', color: '#00FF00'}}>{timer2count}</h3></h5>
                <button onClick={() => setbutton2State(!button2State)}>Button 2: <span style={{color: button2State?'green':'red'}}>{button2State?'ON':'OFF'}</span></button>
            </div>
        </div>
    );
}