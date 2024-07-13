import React, { FC, createContext, useEffect, useState } from 'react';
import {
    signIn as authServiceSignIn,
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

    useEffect(() => {
        const storedAccessToken = localStorage.getItem("accessToken");
        const storedRefreshToken = localStorage.getItem("refreshToken");

        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
            authServiceCheckAuthStatus(storedAccessToken, storedRefreshToken, setAuthStatus).then(tokens => {
                if (tokens) {
                    setAccessToken(tokens.accessToken);
                    setRefreshToken(tokens.refreshToken);
                    localStorage.setItem("accessToken", tokens.accessToken);
                    localStorage.setItem("refreshToken", tokens.refreshToken);
                }
            });
        } else {
            setAuthStatus(AuthStatus.SignedOut);
        }
    }, []);

    async function signIn(email: string, password: string) {
        try {
            const tokens = await authServiceSignIn(email, password);
            setAccessToken(tokens.accessToken);
            setRefreshToken(tokens.refreshToken);
            localStorage.setItem("accessToken", tokens.accessToken);
            localStorage.setItem("refreshToken", tokens.refreshToken);
            setAuthStatus(AuthStatus.SignedIn);
        } catch (error) {
            setAuthStatus(AuthStatus.SignedOut);
            throw new Error("Signin error");
        }
    }

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
    };

    if (authStatus === AuthStatus.Loading) {
        return null;
    }

    return (
        <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    );
};
