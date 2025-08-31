import { useReducer } from "react";



export default function UseReducerHook() {

    const reducer = (state, action)=>{
        switch(action.type){
            case '+1':
                return {count: Number(state.count) + 1};
            case '+2':
                return {count: Number(state.count) + 2};
            case '-1':
                return {count: Number(state.count) - 1};
            case '-2':
                return {count: Number(state.count) - 2};
            case 'set':
                return {count: Number(action.payload)};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, {count: 0});


    return (
        <div>
            <p>Using multiple actions to the same counter using useReducer</p>
            <h3>Counter: {state.count}</h3>
            <button onClick={()=>dispatch({type: '+1'})}>+1</button>
            <button onClick={()=>dispatch({type: '+2'})}>+2</button>
            <button onClick={()=>dispatch({type: '-1'})}>-1</button>
            <button onClick={()=>dispatch({type: '-2'})}>-2</button>
            <input value={state.count} type="number" onChange={(e)=>dispatch({type: 'set', payload: e.target.value})}/>
        </div>
    );
}