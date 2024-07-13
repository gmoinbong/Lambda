import React, { ChangeEvent, useContext, useState } from 'react';
import styles from "./SignUp.module.css";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

type Props = {};

const SignUp: React.FC<Props> = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { signUp } = useContext(AuthContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (credentials.password === credentials.confirmPassword) {
            if (signUp) {
                signUp(credentials.email, credentials.password);
            }
        } else {
            alert("Different passwords!");
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="text" value={credentials.email} onChange={handleChange} id='email' name='email' required />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" value={credentials.password} onChange={handleChange} id='password' name='password' required />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" value={credentials.confirmPassword} id='confirmPassword' onChange={handleChange} name='confirmPassword' required />
            </div>
            <button className={styles.submit} type='submit'>Submit</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    );
};

export default SignUp;
