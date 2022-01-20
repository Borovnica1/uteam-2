import axiosInstance from './http';

export const login = async (identifier, password) => {
  const user = { identifier, password };

  try {
    const response = await axiosInstance.post('/api/auth/local/', user);
    console.log(response.data.user, '🚀🤘USER');
    console.log('token', response.data.jwt);
    // console.log(response.data.user, '🚀🤘USER');
    // console.log('token', response.data.jwt);

    return response.data;
  } catch (err) {
    console.error(`${err.message}, 💥🤯`);
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post(`/api/auth/local/register`, data);
    return response.data;
  } catch (err) {
    console.error(`${err.message}, 💥🤯`);
  }
};
