import { TabNav } from '@/components/TabNav';
import { ROUTES } from '@/constants';
import { useRouter } from 'next/navigation';
import { useMemberStore } from '@/stores';
import { useCharacterStore } from '@/stores/useCharacter';

const TABS = [
  // {
  //   href: ROUTES.reportAnalysis,
  //   label: '캐릭터 분석',
  // },
  {
    href: ROUTES.reportQuestions,
    label: '나의 답변 모아보기',
  },
];

const CharacterTabNav = () => {
  const router = useRouter();
  const memberId = useMemberStore().getMemberId();
  const bundleId = useCharacterStore().getBundleId();
  const handleRouter = (href: string) => {
    router.push(`${href}?memberId=${memberId}&bundleId=${bundleId}`);
  };
  return <TabNav tabs={TABS} onClick={handleRouter} />;
};

export default CharacterTabNav;
