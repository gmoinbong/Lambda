import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const API_URL = 'http://142.93.134.108:1111';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { email } = req.query;
  const authHeader = req.headers.authorization;

  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: authHeader || '',
      },
      params: { email },
    });
    res.status(response.status).json(response.data);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};
