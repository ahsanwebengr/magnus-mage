import api from "../../../utils/api";

const login = async (userData) => {
  const response = await api().post('users/login', userData);
  if (response) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const signUp = async (userData) => {
  const response = await api().post('users/signUp', userData);
  return response.data;
};

const forgotPassword = async (userData) => {
  const response = await api().post('users/forgotPassword', userData);
  return response.data;
};

const authService = {
  login,
  signUp,
};

export default authService;
