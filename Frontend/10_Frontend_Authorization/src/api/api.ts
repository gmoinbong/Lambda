import axios from 'axios';

export const WhoAmIRequest = async (accessToken: string | null) => {
    try {
        const response = await axios.get("/api/me", { 
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        // console.log(localStorage.getItem("accessToken"), 'accessToken');

        return response.data;
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            throw new Error("Unauthorized");
        }
        throw new Error("An error occurred");
    }
};
