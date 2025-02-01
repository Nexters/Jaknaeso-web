import type { PropsWithChildren } from 'react';
import { Card as CardComponent, Text } from '@radix-ui/themes';
import { Accordion } from 'radix-ui';

import styles from './Card.module.scss';

import '@radix-ui/themes/styles.css';

interface CardProps {
  title: string;
  chipContents: string;
  useCollapse?: boolean;
}

const BasicCard = ({ title, chipContents, children }: PropsWithChildren<CardProps>) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Text color="gray" size="2">
          {chipContents}
        </Text>
        <h3 className="body1">{title}</h3>
      </div>
    </div>
    {children}
  </div>
);

export default function Card({ title, chipContents, useCollapse = false, children }: PropsWithChildren<CardProps>) {
  if (!useCollapse) {
    return (
      <BasicCard title={title} chipContents={chipContents}>
        {children}
      </BasicCard>
    );
  }

  return (
    <div className={styles.container}>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <CardComponent className={styles.wrapper}>
            <Accordion.Header className={styles.header}>
              <div className={styles.chips}>
                {/* Chip 컴포넌트로 교체 예정 */}
                <Text color="gray" size="2">
                  {chipContents}
                </Text>
                <Accordion.Trigger>
                  {/* 아이콘 교체 시 수정 예정 */}
                  <div>더보기</div>
                </Accordion.Trigger>
              </div>
              <h3 className="body1">{title}</h3>
            </Accordion.Header>
            <Accordion.Content>{children}</Accordion.Content>
          </CardComponent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
