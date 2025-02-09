export type SurveyType = 'MULTIPLE_CHOICE' | 'BALANCE';

export type SurveySubmissionId = {
  submissionId: number;
};

export type SurveyOption = {
  id: number;
  optionContent: string;
};

export type HistoryResponse = {
  bundleId: number;
  isCompleted: boolean;
  surveyHistoryDetails: SurveySubmissionId[];
  nextSurveyIndex: number;
};

export type TodaySurveyResponse = {
  id: number;
  contents: string;
  surveyType: SurveyType;
  options: SurveyOption[];
};
