import axios from 'axios';
import { WhoAmIRequest } from '../api/api';

export enum AuthStatus {
    Loading,
    SignedIn,
    SignedOut,
}

export async function signIn(email: string, password: string) {
    const response = await axios.post(`http://142.93.134.108:1111/login?email=${email}&password=${password}`);
    return {
        accessToken: response.data.body.access_token,
        refreshToken: response.data.body.refresh_token,
    };
}

export async function refreshAccessToken(token: string) {
    const response = await axios.post("http://142.93.134.108:1111/refresh", null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return {
        accessToken: response.data.body.access_token,
        refreshToken: response.data.body.refresh_token,
    };
}

export async function signUp(email: string, password: string) {
    await axios.post("http://142.93.134.108:1111/sign_up", { email, password });
}

export async function checkAuthStatus(token: string, refreshToken: string, setAuthStatus: (status: AuthStatus) => void) {
    try {
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
    setAuthStatus(AuthStatus.SignedOut);
}
