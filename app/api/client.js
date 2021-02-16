import { create } from "apisauce";
import settings from "../config/settings";
import cache from "../utiliy/cache";

const apiClient = create({
  baseURL: settings.apiUrl,
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const res = await get(url, params, axiosConfig);

  if (res.ok) {
    cache.store(url, res.data);
    return res;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : res;
};

export default apiClient;
