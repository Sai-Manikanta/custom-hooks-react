import React from 'react';
import useInput from './hooks/useInput';

function Form() {
    const [name, bindName, resetName] = useInput('');
    const [email, bindEmail, resetEmail] = useInput('');

    const handleSubmit = e => {
        e.preventDefault();

        alert(name, email);

        resetName();
        resetEmail();
    }

    return (
        <div>
            <h1>Fill the form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" { ...bindName } />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" { ...bindEmail } />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
