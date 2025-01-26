import { clientApi } from '@/libs/api/client';

const getTest = async () => {
  try {
    const { data } = await clientApi.get(`/api/test`);
    return data;
  } catch (error) {
    throw new Error();
  }
};

const testApis = { getTest };

export default testApis;
