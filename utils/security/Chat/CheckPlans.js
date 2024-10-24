// utils/checkUserPlan.js
import axios from 'axios';

const checkUserPlan = async (token) => {
  const config = {
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/checkPlan`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios(config);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user plan:', error);
    return { success: false };
  }
};

export default checkUserPlan;
