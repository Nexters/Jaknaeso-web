import styles from './InfoContent.module.scss';

interface InfoItemProps {
  title: string;
}
export default function InfoContentItem({ title }: InfoItemProps) {
  return (
    <div className={styles.container}>
      <h2 className="title3">{title}</h2>
      <ul>
        <li className="subTitle2">창의적인 해결책을 찾고 새로운 아이디어를 탐구하는 것을 좋아해요.</li>
        <li className="subTitle2">창의적인 해결책을 찾고 새로운 아이디어를 탐구하는 것을 좋아해요.</li>
        <li className="subTitle2">창의적인 해결책을 찾고 새로운 아이디어를 탐구하는 것을 좋아해요.</li>
      </ul>
    </div>
  );
}
