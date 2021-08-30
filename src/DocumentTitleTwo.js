import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';

function DocumentTitleTwo() {
    const [count, setCount] = useDocumentTitle()

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Clicked { count } times
            </button>
        </div>
    )
}

export default DocumentTitleTwo
