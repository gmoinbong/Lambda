import axios from 'axios';
import { refreshToken } from '../auth/AuthService/AuthService';

const apiClient = axios.create({
    baseURL: '/',
});

apiClient.interceptors.response.use(
    async (response) => {
        try {
            const request = response.config

            const path = request.url

            const isRefresh = path?.includes('/refresh')

            if(response.data && response.data.statusCode === 401 && !isRefresh) {
                const token = localStorage.getItem('refreshToken');
                if (token) {
                    const accessToken = await refreshToken()
                    console.log(accessToken, "new acess token");

                    if (accessToken) {
                        request.headers['Authorization'] = `Bearer ${accessToken}`;
                        return apiClient(request);
                    }
                    return response;
                }
            }
        } catch(error) {
            console.error('Ошибка при обновлении токена', error);
            return response;
        }
        return response;
    },
);

export default apiClient;
