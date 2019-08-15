import {
  convertDate,
  isOverdue,
  isDueToday,
  isDueTomorrow
} from './date-utils';

const filterMap = {
  default: () => (item) => !item.completed,
  completed: () => (item) => item.completed,
  overdue: (now) => (item) => isOverdue(convertDate(item.dueBy), now),
  today: (now) => (item) => {
    const date = convertDate(item.dueBy);
    return isDueToday(date, now);
  },
  tomorrow: (now) => (item) => {
    const date = convertDate(item.dueBy);
    return isDueTomorrow(date, now);
  }
};

export const filter = (items, selectedFilter) => {
  const f = selectedFilter || 'default';
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return items.filter(filterMap[f](d));
};
