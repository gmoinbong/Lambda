import React, { ChangeEvent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../AuthService/AuthService';

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn(credentials.email, credentials.password);
      navigate('/me');
    } catch (error: any) {
      setErrorMessage(error.message || "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <header>Login</header>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <input type="submit" className="button" value={isLoading ? 'Logging in...' : 'Login'} disabled={isLoading} />
        <div className="signup">
          <span>Don't have an account? <Link to="/sign-up">Sign Up</Link></span>
        </div>
      </form>
    </div>
  );
}
