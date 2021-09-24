export const authConfig = {
  headers: { authorization: `Bearer ${window.localStorage.getItem('access_token')}` },
};
