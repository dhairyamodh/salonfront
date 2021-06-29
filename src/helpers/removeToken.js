const removeToken = (token) => {
  const tkn = localStorage.removeItem("salon_token");
  return tkn;
};
export default removeToken;
