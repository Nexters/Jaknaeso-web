import { useQuery } from '@tanstack/react-query';
import testApis from './api';
import testKeys from './keys';

const useGetTest = ({ params, options } = {}) =>
  useQuery({
    queryKey: testKeys.all(),
    queryFn: () => testApis.getTest(),
    ...options,
  });

export { useGetTest };
