import axios from 'axios';

export const WhoAmIRequest = async (accessToken: string | null) => {
    try {
        const response = await axios.get("http://142.93.134.108:1111/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            throw new Error("Unauthorized");
        }
        throw new Error("An error occurred");
    }
};
