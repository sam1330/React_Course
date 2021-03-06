import React, { useState, useCallback } from 'react';
import { Child } from './Child';

export const Father = () => {

    const number = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    const increment = useCallback((num) => {
        setValue((v) => v + num)
    }, [setValue]);

    return (
        <div>
            <h1>Father</h1>
            <p> Total: { value } </p>

            <hr />

            {
                number.map( n => (
                    <Child 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
