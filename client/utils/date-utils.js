const ONE_DAY = 1000 * 60 * 60 * 24;

export const convertDate = (date) => {
  const d = new Date(date);
  return new Date(`${d.getUTCMonth() + 1}/${d.getUTCDate()}/${d.getUTCFullYear()}`);
};

export const isOverdue = (date, now) => date - now < 0;
export const isDueToday = (date, now) => date - now >= 0 && date - now < ONE_DAY;
export const isDueTomorrow = (date, now) => date - now >= ONE_DAY && date - now < ONE_DAY * 2;
