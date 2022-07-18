const baseUrl = "https://reqres.in/api";

const requestor = async (path = "", options = {}) => {
  const url = `${baseUrl}${path}`;
  const defaultOptions = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    ...options,
  } as RequestInit;

  const response = await fetch(url, defaultOptions);
  return response.json();
};

export default requestor;
