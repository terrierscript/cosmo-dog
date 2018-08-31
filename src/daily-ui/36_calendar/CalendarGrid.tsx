import styled from "styled-components";
import { DateTime } from "luxon";
import { generateFilledCalendar } from "./getMonthDate";

export const generateCalendarTemplate = (year, month, prefix = "day") => {
  const filled = generateFilledCalendar(year, month);

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
