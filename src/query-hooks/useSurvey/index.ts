import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import surveyApis from './api.client';
import surveyKeys from './keys';
import type { HistoryResponse, TodaySurveyResponse } from './types';

const useGetSurvey = (options?: UseQueryOptions<HistoryResponse, Error>) => {
  return useQuery<HistoryResponse, Error>({
    queryKey: surveyKeys.lists(),
    queryFn: surveyApis.getHistory,
    ...options,
  });
};

const useGetTodaySurvey = (bundleId: number, options?: UseQueryOptions<TodaySurveyResponse, Error>) =>
  useQuery<TodaySurveyResponse, Error>({
    queryFn: () => surveyApis.getTodaySurvey(bundleId),
    queryKey: surveyKeys.list([bundleId]),
    ...options,
  });

export { useGetSurvey, useGetTodaySurvey };
