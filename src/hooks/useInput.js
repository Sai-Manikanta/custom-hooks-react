import { useState } from 'react';

function useInput(intialValue){
    const [value, setValue] = useState(intialValue);

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    
    const reset = () => {
        setValue(intialValue)
    }

    return [value, bind, reset]
}

export default useInput