import styled from "styled-components";
import { DateTime } from "luxon";

export const getMonthDate = (year, month) => {
  const firstDay = DateTime.local(year, month, 1);
  return Array.from({ length: firstDay.daysInMonth }, (_, day) => {
    const currDay = firstDay.plus({ days: day });
    return currDay;
  });
};

const generateCalendarMap = (year, month) => {
  const days = getMonthDate(year, month);
  return days.reduce((curr: any[][], day, i) => {
    if (day.weekday % 7 === 0 || i === 0) {
      return [...curr, [day]];
    }
    const newItem = [...curr.slice(-1)[0], day];
    return [...curr.slice(0, -1), newItem];
  }, []);
};
export const generateCalendarTemplate = (year, month) => {
  const calendar = generateCalendarMap(year, month);
  const filled = calendar.map((item, i, arr) => {
    if (i === 0) {
      return [...Array.from({ length: 7 - item.length }), ...item];
    }
    if (arr.length - 1 === i) {
      return [...item, ...Array.from({ length: 7 - item.length })];
    }
    return item;
  });

  return filled
    .map((week) => {
      const days = week
        .map((day?: DateTime) => {
          if (!day) {
            return ".";
          }
          return `day-${day.day}`;
        })
        .join(" ");
      return `"${days}"`;
    })
    .join("\n");
};

const _Grid = styled.div<{
  year: number;
  month: number;
}>`
  display: grid;
  grid-template: ${({ year, month }) => generateCalendarTemplate(year, month)};
`;

export const CalendarGrid = styled(_Grid)`
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  background: #ccc;
`;
