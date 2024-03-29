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

const forgotPassword = async (email) => {
  const response = await api().post('users/forgotPassword', email);
  return response.data;
};

const verifyOTP = async (userData) => {
  const response = await api().post('users/verifyCode', userData);
  return response.data;
};

const resetPassword = async (userData) => {
  const response = await api().patch('users/resetPassword', userData);
  return response.data;
};

const authService = {
  login,
  signUp,
  forgotPassword,
  verifyOTP,
  resetPassword
};

export default authService;
