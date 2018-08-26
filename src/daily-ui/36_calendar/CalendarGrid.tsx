import styled from "styled-components";
import { DateTime } from "luxon";
import { getMonthDate } from "./getMonthDate";

const generateCalendarMap = (year, month, startWeekday = 7) => {
  const days = getMonthDate(year, month);
  return days.reduce((curr: any[][], day, i) => {
    if (day.weekday % startWeekday === 0 || i === 0) {
      return [...curr, [day]];
    }
    const newItem = [...curr.slice(-1)[0], day];
    return [...curr.slice(0, -1), newItem];
  }, []);
};

export const generateCalendarTemplate = (year, month, prefix = "day") => {
  const calendar = generateCalendarMap(year, month);
  const filled = calendar.map((item, i, arr) => {
    if (i === 0) {
      // first
      return [...Array.from({ length: 7 - item.length }), ...item];
    }
    if (i === arr.length - 1) {
      // last
      return [...item, ...Array.from({ length: 7 - item.length })];
    }
    return item;
  });

  return filled
    .map((week) => {
      return week
        .map((day?: DateTime) => (!!day ? `${prefix}-${day.day}` : "."))
        .join(" ");
    })
    .map((days) => `"${days}"`)
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
