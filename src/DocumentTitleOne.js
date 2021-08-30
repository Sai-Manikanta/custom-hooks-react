import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';

function DocumentTitleOne() {
    const [count, setCount] = useDocumentTitle(33);

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Clicked { count } times
            </button>
        </div>
    )
}

export default DocumentTitleOne
