// utility for filtering items
import {
  convertDate,
  isOverdue,
  isDueToday,
  isDueTomorrow
} from './date-utils';

// map of filter functions
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
  // could do more checking to make sure filter is valid
  const f = selectedFilter || 'default';
  // weird date stuff again
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return items.filter(filterMap[f](d));
};
