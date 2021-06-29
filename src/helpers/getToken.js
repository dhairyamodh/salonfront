const getToken = (token) => {
  const tkn = localStorage.getItem("salon_token");
  return tkn;
};
export default getToken;
