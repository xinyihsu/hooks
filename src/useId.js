import { useId } from "react";


export default function App() {
    return (
        <>
        <EmailForm />
        <hr />
        <EmailForm />
        <hr />
        <PasswordForm />
        </>
    );
}

function EmailForm() {
    const id = useId();

    return (
        <>
        <label htmlFor={`${id}-email`}>Email:</label>
        <input id={`${id}-email`} type="email" />
        <label htmlFor={`${id}-name`}>Name:</label>
        <input id={`${id}-name`} type="text" />
        </>
    );
}

function PasswordForm() {
    const id = useId();

    return (
        <>
        <label>
            password:
            <input type="password" aria-describedby={id} />
        </label>
        <p id={id}>The password should contain at least 18 characters</p>
        </>
    );
}