import { TabNav } from '@radix-ui/themes';
import styles from './TabNav.module.scss.module.scss';

interface CustomTabNavProps {
  menus: Menu[];
}

type Menu = {
  name: string;
  link: string;
};

export default function CustomTabNav({ menus }: CustomTabNavProps) {
  return (
    <TabNav.Root>
      {menus.map((menu: Menu) => {
        return (
          <TabNav.Link href={menu.link} key={menu.name}>
            menu.name
          </TabNav.Link>
        );
      })}
    </TabNav.Root>
  );
}
