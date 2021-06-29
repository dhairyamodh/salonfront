const setToken = (token) => {
  const tkn = localStorage.setItem("salon_token", token);
  return tkn;
};
export default setToken;
