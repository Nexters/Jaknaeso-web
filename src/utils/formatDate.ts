import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  const format = 'M월 D일';
  return dayjs(date, 'YYYY.MM.DD').format(format);
};
