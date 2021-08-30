import { useState, useEffect } from 'react';

function useDocumentTitle(intialCount = 0){
    const [count, setCount] = useState(intialCount);

    useEffect(() => {
        document.title = `Count is ${count}`;
    }, [count])

    return [count, setCount]
}

export default useDocumentTitle