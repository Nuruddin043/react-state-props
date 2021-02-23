import React from 'react';

const MyComponent = (props) => {
    return (
        <>
            {props.page === 'home' && <>
                <h1>Home</h1>
                <p>{props.information}</p>
            </>
            }

            {props.page === 'contact' && <>
                <h1>Contact</h1>
                <p>{props.information}</p>
            </>
            }
        </>
    )
}

export default MyComponent;