import { clientApi } from '@/libs/api/client';

const getTest = async (params, api = clientApi) => {
  try {
    const { data } = await api.get(`/api/test`);
    return data;
  } catch (error) {
    throw new Error({ error, ...params });
  }
};

const testApis = { getTest };

export default testApis;
