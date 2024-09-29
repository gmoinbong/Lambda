import React, { ChangeEvent, useContext, useState } from 'react';
import styles from "./SignUp.module.css";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { checkPasswordStrength } from './func';

type Props = {};

const SignUp: React.FC<Props> = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<string | null>(null);
    const [passwordStrength, setPasswordStrength] = useState<string>("");

    const { signUp } = useContext(AuthContext);

    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));

        if (name === 'password') {
            setPasswordStrength(checkPasswordStrength(value));
        }
    };

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setErrors(null);
        setSuccess(null); 

        if (!validateEmail(credentials.email)) {
            setErrors("Invalid email format");
            return;
        }

        if (credentials.password !== credentials.confirmPassword) {
            setErrors("Passwords do not match");
            return;
        }

        try {
            if (signUp) {
                await signUp(credentials.email, credentials.password);
                setSuccess("Registration successful!"); 
                navigate('/');
            }
        } catch (error: any) {
            setErrors(error.message || "An error occurred during registration");
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {errors && <div className={styles.error}>{errors}</div>}
            {success && <div className={styles.success}>{success}</div>} 
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    value={credentials.email}
                    onChange={handleChange}
                    id='email'
                    name='email'
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    id='password'
                    name='password'
                    required
                />
                {credentials.password && (
                    <div className={styles.passwordStrength}>
                        Password strength: {passwordStrength}
                    </div>
                )}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    id='confirmPassword'
                    name='confirmPassword'
                    required
                />
            </div>
            <button
                className={styles.submit}
                type='submit'
                disabled={
                    !credentials.email ||
                    !credentials.password ||
                    !credentials.confirmPassword ||
                    errors !== null
                }
            >
                Sign Up
            </button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    );
};

export default SignUp;
