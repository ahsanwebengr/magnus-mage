/**
 * Retrive access token from local storage
 * @returns string | undefined
 */

export const getUser = () => {
  if (typeof window === 'object' && window?.localStorage?.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'));
  }
  return undefined;
};

/**
 * Retrive access token from local storage
 * @returns string | undefined
 */
export const getAccessToken = (data) => {
  if ((typeof window === 'object' && window?.localStorage?.getItem('user')) || data) {
    const user = data ?? JSON.parse(localStorage.getItem('user'));
    return user?.data;
  }
  return undefined;
};
