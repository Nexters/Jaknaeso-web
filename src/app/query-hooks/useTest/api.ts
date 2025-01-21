import qs from 'query-string';
import { clientApi } from '@/app/libs/api/client';

const getTest = async (params, api = clientApi) => {
  const queryString = qs.stringify(params, { skipNull: true });
  try {
    const { data } = await api.get(`/api/test`);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error({ error, ...params });
  }
};

const testApis = { getTest };

export default testApis;
