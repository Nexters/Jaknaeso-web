import { clientApi } from '@/libs/api/api.client';
import type { ResponseDTO } from '@/types';

import type { SurveyResponse } from './types';

const get = async () => {
  const res = await clientApi.get<ResponseDTO<SurveyResponse>>(`/api/v1/surveys/history`);
  return res.data.data;
};

const surveyApis = { get };

export default surveyApis;
