import React, { useState } from 'react';

function ButtonComponent() {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p>You have clicked the button {clickCount} times.</p>
        </div>
    );
}

export default ButtonComponent;
