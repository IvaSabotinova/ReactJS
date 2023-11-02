import { useState } from "react";

export default function Timer(props) {

    const [current, setTime] = useState(props.start);

    // Note: Don't use setTimeout, useEffect is more appropriate
    setTimeout(() => {
        setTime(current => current + 1);
    }, 1000)

    return (
        <>
            <h4>Timer: {current}</h4>
        </>
    );
}