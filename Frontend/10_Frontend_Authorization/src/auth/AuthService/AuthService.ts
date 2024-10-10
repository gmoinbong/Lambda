import axios, { AxiosResponse } from 'axios';
import queryString from 'query-string';

const API_URL = '/api';


export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  message: string;
  statusCode?: number;
  status?: string;

}

export interface AccountData {
  email: string;
  name: string;
  message: string;
}

interface APIResponseSuccess<T> {
  body: T;
  statusCode?: number;
  status_code?: number;
  status?: string;
}

interface APIResponseError {
  body: {
    code: number;
    message: string;
    status: string;
  };
  statusCode?: number;
  status_code?: number;
}

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};


export const signUp = async (email: string, password: string): Promise<AuthResponse> => {
  if (!validateEmail(email)) {
    throw new Error('Invalid email format');
  }
  if (!password) {
    throw new Error('Password cannot be empty');
  }

  try {
    const url = `${API_URL}/sign_up`;
    const response: AxiosResponse<{ message: string; status: string; access_token?: string; refresh_token?: string; }> = await axios.post(url, {
      email,
      password
    });

    const { status, message, access_token, refresh_token } = response.data;

    if (status !== 'Ok') {
      throw new Error(message || 'Sign-up failed');
    }

    if (access_token && refresh_token) {
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
    }

    localStorage.setItem('userEmail', email);

    await signIn(email, password);


    return {
      access_token: access_token || '',
      refresh_token: refresh_token || '',
      message: message || 'User was created successfully',
    };
  } catch (error: any) {
    if (error.response && error.response.data) {
      const serverError: APIResponseError = error.response.data;
      throw new Error(serverError.body.message || 'Sign-up failed');
    }
    throw new Error('Sign-up failed');
  }
};




export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  if (!validateEmail(email)) {
    throw new Error('Invalid email format');
  }
  if (!password) {
    throw new Error('Password cannot be empty');
  }

  try {
    const queryParams = queryString.stringify({ email, password });
    const url = `${API_URL}/login?${queryParams}`;
    const response: AxiosResponse<APIResponseSuccess<AuthResponse>> = await axios.post(url);

    const statusCode = response.data.statusCode || response.data.status_code || response.status;
    const status = response.data.body?.status || response.data.status;

    if (statusCode !== 200 || status === 'error') {
      throw new Error(response.data.body.message || 'Sign-in failed');
    }

    localStorage.setItem('accessToken', response.data.body.access_token);
    localStorage.setItem('refreshToken', response.data.body.refresh_token);
    localStorage.setItem('userEmail', email);

    window.location.href = '/me';

    return response.data.body;
  } catch (error: any) {
    if (error.response && error.response.data) {
      const serverError: APIResponseError = error.response.data;
      throw new Error(serverError.body.message || 'Sign-in failed');
    }
    throw new Error('Sign-in failed');
  }
};

export const logout = (): void => {
  try {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userEmail');
  } catch (error) {
    console.error('Logout failed', error);
  }
};


export const getAccount = async (): Promise<AccountData> => {
  try {
    const token = localStorage.getItem('accessToken');
    const email = localStorage.getItem('userEmail');
    if (!token) throw new Error('No access token available');
    if (!email) throw new Error('No email available');

    const url = `${API_URL}/me?email=${encodeURIComponent(email)}`;

    const response: AxiosResponse<APIResponseSuccess<AccountData>> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const statusCode = response.data.statusCode || response.data.status_code || response.status;

    if (statusCode !== 200 || (response.data.body as any).status === 'error') {
      throw new Error(response.data.body.message || 'Error fetching account data');
    }

    return response.data.body;
  } catch (error: any) {
    if (error.response?.status === 401) {
      try {
        await refreshToken();
        return await getAccount();
      } catch (refreshError: any) {
        logout();
        throw new Error('Session expired. Please log in again.');
      }
    } else {
      if (error.response && error.response.data) {
        const serverError: APIResponseError = error.response.data;
        throw new Error(serverError.body.message || 'Error fetching account data');
      }
      throw new Error('Error fetching account data');
    }
  }
};

export const refreshToken = async (): Promise<void> => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const email = localStorage.getItem('userEmail');
    if (!refreshToken) throw new Error('No refresh token available');
    if (!email) throw new Error('No email available');

    const url = `${API_URL}/refresh?email=${encodeURIComponent(email)}`;
    const response: AxiosResponse<APIResponseSuccess<{ access_token: string }>> = await axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const statusCode = response.data.statusCode || response.data.status_code || response.status;

    if (statusCode !== 200 || (response.data.body as any).status === 'error') {
      throw new Error('Failed to refresh token');
    }

    localStorage.setItem('accessToken', response.data.body.access_token);
  } catch (error: any) {
    throw new Error('Failed to refresh token');
  }
};


export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('accessToken');
};
