import {
  convertDate,
  isOverdue,
  isDueToday,
  isDueTomorrow
} from './date-utils';

const filterMap = {
  'default': (now) => {
    return item => !item.completed;
  },
  'completed': (now) => {
    return item => item.completed;
  },
  'overdue': (now) => {
    return item => isOverdue(convertDate(item.dueBy), now);
  },
  'today': (now) => {
    return item => {
      const date = convertDate(item.dueBy);
      return isDueToday(date, now);
    }
  },
  'tomorrow': (now) => {
    return item => {
      const date = convertDate(item.dueBy);
      return isDueTomorrow(date, now);
    }
  }
}

export const filter = (items, selectedFilter) => {
  const f = selectedFilter ? selectedFilter : 'default';
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return items.filter( filterMap[f](d) );
}
