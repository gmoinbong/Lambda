import React, { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import styles from "./Login.module.css";

type Props = {};

const Login: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
        setErrorMessage(null);
    };


    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (signIn) {
            try {
                console.log("Attempting to sign in with credentials:", credentials);
                const response: any = await signIn(credentials.email, credentials.password);
                console.log("Sign-in response:", response);
                if (response !== undefined && response.statusCode === 200) {
                    navigate('/me');
                } else {
                    setErrorMessage("Authentication failed");
                }
            } catch (error) {
                setErrorMessage("Authentication failed");
            }
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Login</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={credentials.email} name='email' type="email" required />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} value={credentials.password} type="password" id='password' name='password' required />
            </div>
            <button className={styles.submit} type='submit'>Submit</button>
            <p>
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
            </p>
        </form>
    );
};

export default Login;
