// utility for handling dates
// dates are not fun
const ONE_DAY = 1000 * 60 * 60 * 24;

// just converts date from whatever time zone it's in to GMT
export const convertDate = (date) => {
  const d = new Date(date);
  return new Date(`${d.getUTCMonth() + 1}/${d.getUTCDate()}/${d.getUTCFullYear()}`);
};

// I did some weird rounding with dates where i chop off the time and round it down to 12:00 AM
export const isOverdue = (date, now) => date - now < 0;
export const isDueToday = (date, now) => date - now >= 0 && date - now < ONE_DAY;
export const isDueTomorrow = (date, now) => date - now >= ONE_DAY && date - now < ONE_DAY * 2;
