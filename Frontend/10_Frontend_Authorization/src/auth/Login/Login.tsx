import React, { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { AuthStatus } from '../authService';
import styles from "./Login.module.css";

type Props = {};

const Login: React.FC<Props> = () => {
    const { signIn, authStatus } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (signIn) {
            try {
                await signIn(credentials.email, credentials.password);
                if (authStatus === AuthStatus.SignedIn) {
                    navigate('/me');
                } else {
                    throw new Error("Login failed")
                }
            } catch (error) {
                throw new Error("Signin error")
            }
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Login</h2>
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
