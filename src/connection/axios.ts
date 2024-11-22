import { handler } from "axios-wizard";

const httpRequest = handler({
  api: "https://server.co.kr",
});

export default httpRequest;
