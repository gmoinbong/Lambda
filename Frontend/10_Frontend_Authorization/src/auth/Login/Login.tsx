// src/auth/Login/Login.tsx
import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "./Login.module.css";
import { signIn } from '../AuthService/AuthService';

type Props = {};

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); 

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
    setIsLoading(true); 
    try {
      await signIn(credentials.email, credentials.password);
      console.log("Sign-in successful");
      navigate('/me');
    } catch (error: any) {
      setErrorMessage(error.message || "Authentication failed");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={credentials.email}
          name='email'
          type="email"
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={credentials.password}
          type="password"
          id='password'
          name='password'
          required
        />
      </div>
      <button className={styles.submit} type='submit' disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Submit'}
      </button>
      <p>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;
