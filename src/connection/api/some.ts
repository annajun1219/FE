import httpRequest from "../axios";

const api = httpRequest.api("v1");
async function some() {
  const response = await api.get("/some");
  return response.data;
}

const someApi = {
  some,
};

export default someApi;
