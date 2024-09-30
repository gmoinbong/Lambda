import React, { FC, createContext, useEffect, useState } from 'react';
import {
    refreshAccessToken as authServiceRefreshAccessToken,
    signUp as authServiceSignUp,
    checkAuthStatus as authServiceCheckAuthStatus,
    signOut as authServiceSignOut,
    AuthStatus,
} from '../authService';

export interface IAuth {
    authStatus?: AuthStatus;
    signIn?: (email: string, password: string) => void;
    signOut?: () => void;
    signUp?: (email: string, password: string) => void;
    refreshAccessToken?: () => Promise<void>;
    accessToken?: string | null;
    refreshToken?: string | null;
    userEmail?: string | null;
}

const defaultAuthState: IAuth = {
    authStatus: AuthStatus.Loading,
};

interface AuthProviderProps {
    children?: React.ReactNode;
}

export const AuthContext = createContext(defaultAuthState);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.Loading);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const storedAccessToken = localStorage.getItem("accessToken");
        const storedRefreshToken = localStorage.getItem("refreshToken");
        const storedEmail = localStorage.getItem("userEmail");

        if (storedAccessToken && storedRefreshToken) {
            authServiceCheckAuthStatus(storedAccessToken, storedRefreshToken, setAuthStatus).then(tokens => {
                if (tokens) {
                    localStorage.setItem("accessToken", tokens.accessToken);
                    localStorage.setItem("refreshToken", tokens.refreshToken);
                }
            });
        } else {
            setAuthStatus(AuthStatus.SignedOut);
        }

        if (storedEmail) {
            setUserEmail(storedEmail);
        }
    }, []);

    async function signIn(email: string, password: string) {
        try {
            console.log("Attempting to sign in with email:", email);
            const response = await fetch(`/api/proxy/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                console.error("Sign-in failed with status:", response.status, "and message:", errorResponse.message);
                throw new Error("Signin error");
            }

            const data = await response.json();
            console.log("Sign-in successful, received data:", data);

            localStorage.setItem("userEmail", email);
            console.log(localStorage.getItem("userEmail"));

            setAuthStatus(AuthStatus.SignedIn);
            setAccessToken(data.body.access_token);
            setRefreshToken(data.body.refresh_token);
            localStorage.setItem("accessToken", data.body.access_token);
            localStorage.setItem("refreshToken", data.body.refresh_token);
            return data;
        } catch (error) {
            console.error("Error during sign-in:", error);
            throw error;
        }
    };

    async function refreshAccessToken() {
        if (refreshToken) {
            try {
                const tokens = await authServiceRefreshAccessToken(refreshToken);
                setAccessToken(tokens.accessToken);
                setRefreshToken(tokens.refreshToken);
                localStorage.setItem("accessToken", tokens.accessToken);
                localStorage.setItem("refreshToken", tokens.refreshToken);
                setAuthStatus(AuthStatus.SignedIn);
            } catch (error) {
                setAuthStatus(AuthStatus.SignedOut);
                throw new Error("Error refresh token");
            }
        } else {
            setAuthStatus(AuthStatus.SignedOut);
        }
    }

    function signOut() {
        authServiceSignOut(setAuthStatus);
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = '/login';
    }

    async function signUp(email: string, password: string) {
        try {
            await authServiceSignUp(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    const state: IAuth = {
        authStatus,
        signIn,
        signOut,
        signUp,
        refreshAccessToken,
        accessToken,
        refreshToken,
        userEmail,
    };

    if (authStatus === AuthStatus.Loading) {
        return null;
    }

    return (
        <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    );
};
