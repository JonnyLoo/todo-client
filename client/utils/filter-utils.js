const ONE_DAY = 1000 * 60 * 60 * 24;

export const convertDate = (date) => {
  const d = new Date(date);
  return new Date(`${ d.getUTCMonth() + 1 }/${ d.getUTCDate() }/${ d.getUTCFullYear() }`);
}

export const isOverdue = (date, now) => date - now < 0;
export const isDueToday = (date, now) => date - now >= 0 && date - now < ONE_DAY;
export const isDueTomorrow = (date, now) => date - now >= ONE_DAY && date - now <= ONE_DAY * 2;

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
