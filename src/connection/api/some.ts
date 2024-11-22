import httpRequest from "../axios";

const api = httpRequest.api("v1");
interface Some {
  id: number;
  name: string;
  age: number;
}

async function some() {
  const response = await api.get<Some>("/some");
  return response.data;
}

const someApi = {
  some,
};

export default someApi;
