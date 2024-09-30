import axios from 'axios';
import { WhoAmIRequest } from '../api/api';

export enum AuthStatus {
    Loading,
    SignedIn,
    SignedOut,
}

export async function signIn(email: string, password: string) {
    try {
        const response = await axios.post(`/api/login?email=${email}&password=${password}`);
        const accessToken = response.data.body.access_token;
        const refreshToken = response.data.body.refresh_token;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userEmail", email);

        return {
            accessToken,
            refreshToken,
        };
    } catch (error) {
        console.error("Error during sign in:", error);
        throw error;
    }
}

export async function refreshAccessToken(token: string) {
    try {
        const response = await axios.post(`/api/refresh`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return {
            accessToken: response.data.body.access_token,
            refreshToken: response.data.body.refresh_token,
        };
    } catch (error) {
        console.error("Error refreshing access token:", error);
        throw error;
    }

}

export async function signUp(email: string, password: string) {
    try {
        await axios.post(`/api/sign_up`, { email, password }); 
    } catch (error) {
        console.error("Error during sign up:", error);
        throw error; 
    }
}

export async function checkAuthStatus(token: string, refreshToken: string, setAuthStatus: (status: AuthStatus) => void) {
    try {
        if (AuthStatus.Loading) {
            return;
        }
        await WhoAmIRequest(token);
        setAuthStatus(AuthStatus.SignedIn);
    } catch (error: any) {
        if (error.message === "Unauthorized") {
            try {
                const tokens = await refreshAccessToken(refreshToken);
                setAuthStatus(AuthStatus.SignedIn);
                return tokens;
            } catch (refreshError) {
                setAuthStatus(AuthStatus.SignedOut);
            }
        } else {
            setAuthStatus(AuthStatus.SignedOut);
        }
    }
    return null;
}

export function signOut(setAuthStatus: (status: AuthStatus) => void) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userEmail");
    setAuthStatus(AuthStatus.SignedOut);
}
