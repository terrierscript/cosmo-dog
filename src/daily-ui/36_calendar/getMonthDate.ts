import { DateTime } from "luxon";
export const getMonthDate = (year, month) => {
  const firstDay = DateTime.local(year, month, 1);
  return Array.from({ length: firstDay.daysInMonth }, (_, day) => {
    const currDay = firstDay.plus({ days: day });
    return currDay;
  });
};
