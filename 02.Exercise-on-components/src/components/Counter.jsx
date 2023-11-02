import { useState } from "react";

export default function Counter() {

    const [count, setState] = useState(0);

    const incrementClickHandler = () => {
        setState(oldValue => oldValue + 1);
    };

    let message = null

    switch (count) {
        case 1: message = 'Number One'; break;
        case 2: message = 'Number Two'; break;
        case 3: message = 'Number Three'; break;
        case 4: message = 'Number Four'; break;
        case 5: message = 'Number Five'; break;
        case 6: message = 'Number Six'; break;
        case 7: message = 'Number Seven'; break;
        case 8: message = 'Number Eight'; break;
        case 9: message = 'Number None'; break;
        case 10: message = 'Number Ten'; break;
        default: message = 'Number is not between one and ten'; break;
    }

    let output = null;
    if (count > -5 && count < 0) {
        output = <p>Value cannot be below zero!</p>
    }
    else if (count <= -5) {
        output = <p>Button for decrease is disabled!</p>
    }

    return (
        <>
            <h2>{message}</h2>
            <button onClick={incrementClickHandler}>+</button>
            <button>{count}</button>
            <button disabled={count <= -5} onClick={() => setState(count - 1)}>-</button><br />
            <button onClick={() => setState(0)}>Clear</button>
            {output}


            {/* {count < 0 ? <p>Value cannot be below zero!</p> : <p></p>} */}
        </>

    );

}