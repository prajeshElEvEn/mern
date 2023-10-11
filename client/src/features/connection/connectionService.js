import { utils } from "../../utils";

const onConnectService = async () => {
  const res = await utils.axios.get("/api/connection");

  return res.data;
};

export { onConnectService };
