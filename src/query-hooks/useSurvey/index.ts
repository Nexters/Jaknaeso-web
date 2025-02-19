import { useRouter } from 'next/navigation';
import {
  useMutation,
  type UseMutationOptions,
  useQuery,
  useQueryClient,
  type UseQueryOptions,
} from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

import { ROUTES } from '@/constants';
import { useToast } from '@/hooks';
import { CookieKey } from '@/libs/cookie/cookieKey';
import { useCharacterStore } from '@/stores';

import characterApis from '../useCharacter/api.client';
import characterKeys from '../useCharacter/keys';

import surveyApis from './api.client';
import surveyKeys from './keys';
import type {
  HistoryResponse,
  OnboardingResponse,
  OnboardingSubmissionParams,
  SurveySubmissionParams,
  SurveySubmissionResponse,
  TodaySurveyResponse,
} from './types';

const useGetSurvey = (options?: UseQueryOptions<HistoryResponse, Error>) => {
  return useQuery<HistoryResponse, Error>({
    queryKey: surveyKeys.lists(),
    queryFn: surveyApis.getHistory,
    ...options,
  });
};

const useGetTodaySurvey = (bundleId: string, options?: UseQueryOptions<TodaySurveyResponse, Error>) =>
  useQuery<TodaySurveyResponse, Error>({
    queryFn: () => surveyApis.getTodaySurvey(bundleId),
    queryKey: surveyKeys.list([bundleId]),
    ...options,
  });

const useGetOnboarding = (options?: UseQueryOptions<OnboardingResponse, Error>) =>
  useQuery<OnboardingResponse, Error>({
    queryFn: () => surveyApis.getOnboarding(),
    queryKey: surveyKeys.list(['onboarding']),
    ...options,
  });

const useSubmitSurvey = (options?: UseMutationOptions<null, Error, SurveySubmissionParams>) => {
  const router = useRouter();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const bundleId = getCookie(CookieKey.bundleId);
  const { setCharacter } = useCharacterStore();
  return useMutation<null, Error, SurveySubmissionParams>({
    mutationFn: ({ surveyId, survey }) => surveyApis.submitSurvey(surveyId, survey),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: surveyKeys.lists() });
      queryClient.invalidateQueries({ queryKey: surveyKeys.list(['retrospective', bundleId]) });
      queryClient.invalidateQueries({ queryKey: characterKeys.lists() });
      router.push(ROUTES.gameComplete);
      characterApis.getCharacters().then((characterData) => {
        const currentCharacter = characterData.characters[characterData.characters.length - 1];
        setCharacter({
          characterId: currentCharacter.characterId,
          characterNo: currentCharacter.characterNo,
          isCompleted: currentCharacter.isCompleted,
          bundleId: currentCharacter.bundleId,
        });
      });
    },
    onError: () => {
      showToast('오늘의 가치관 테스트 제출에 실패했습니다. ');
    },
    ...options,
  });
};

const useSubmitOnboarding = (options?: UseMutationOptions<null, Error, OnboardingSubmissionParams>) => {
  const router = useRouter();
  const { showToast } = useToast();
  const { setCharacter } = useCharacterStore();
  const queryClient = useQueryClient();
  return useMutation<null, Error, OnboardingSubmissionParams>({
    mutationFn: (onboarding) => surveyApis.submitOnboarding(onboarding),
    onSuccess: () => {
      router.push(ROUTES.onboardingGameComplete);
      queryClient.invalidateQueries({ queryKey: characterKeys.lists() });
      characterApis.getCharacters().then((characterData) => {
        const currentCharacter = characterData.characters[characterData.characters.length - 1];
        setCharacter({
          characterId: currentCharacter.characterId,
          characterNo: currentCharacter.characterNo,
          isCompleted: currentCharacter.isCompleted,
          bundleId: currentCharacter.bundleId,
        });
      });
    },
    onError: () => {
      showToast('가치관 테스트 제출에 실패했습니다. 다시 시도해주세요.');
    },
    ...options,
  });
};

const useGetSubmissions = (bundleId: string, options?: UseQueryOptions<SurveySubmissionResponse, Error>) => {
  return useQuery<SurveySubmissionResponse, Error>({
    queryKey: surveyKeys.list(['retrospective', bundleId]),
    queryFn: () => surveyApis.getSubmissions({ bundleId: Number(bundleId) }),
    ...options,
  });
};

export { useGetOnboarding, useGetSubmissions, useGetSurvey, useGetTodaySurvey, useSubmitOnboarding, useSubmitSurvey };
