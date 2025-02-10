import { clientApi } from '@/libs/api/api.client';
import type { ResponseDTO } from '@/types';

import type { HistoryResponse, TodaySurveyResponse } from './types';

const getHistory = async () => {
  const res = await clientApi.get<ResponseDTO<HistoryResponse>>('/api/v1/surveys/history');
  return res.data.data;
};

const getTodaySurvey = async (bundleId: string) => {
  const res = await clientApi.get<ResponseDTO<TodaySurveyResponse>>(`/api/v1/surveys/${bundleId}`);
  return res.data.data;
};

const surveyApis = { getHistory, getTodaySurvey };

export default surveyApis;
