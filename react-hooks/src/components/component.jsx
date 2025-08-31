import React, { useEffect, useRef, useState } from "react";

function Component({fn}) {
    const counter = useRef(0);

    useEffect(() => {
        counter.current = counter.current + 1;
    });

    return (
        <div style={{backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px', marginTop: '20px'}}>
            <h2>Nested component is re-rendered {counter.current} times</h2>
            <h4>Using useCallback side by side with React.memo this</h4>
            <h4>will only re-render when (input two) value changes</h4>
        </div>
    );
}

export default React.memo(Component);