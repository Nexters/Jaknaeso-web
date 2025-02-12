import { usePathname } from 'next/navigation';
import { TabNav } from '@radix-ui/themes';
import cn from 'classnames';

import styles from './TabNav.module.scss';

interface CustomTabNavProps {
  tabs: Tab[];
  onClick: (href: string) => void;
  className?: string;
}

type Tab = {
  href: string;
  label: string;
};

export default function CustomTabNav({ tabs, onClick, className }: CustomTabNavProps) {
  const currentPath = usePathname();
  const isActive = (targetPath: string) => {
    return currentPath.includes(targetPath);
  };

  return (
    <TabNav.Root className={cn(styles.container)}>
      {tabs.map((tab: Tab) => {
        return (
          <TabNav.Link
            className={styles.tab}
            key={tab.label}
            active={isActive(tab.href)}
            onClick={() => onClick(tab.href)}
          >
            {tab.label}
          </TabNav.Link>
        );
      })}
    </TabNav.Root>
  );
}
