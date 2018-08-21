import React, { Component } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";

const areaName = (weekDay: number, weekNum: number) => {
  return `cal-${weekDay}-${weekNum}`;
};

const generateTemplate = () => {
  return Array.from({ length: 6 }, (_, weekNum) => {
    const w = Array.from({ length: 7 }, (_, weekDay) =>
      areaName(weekDay, weekNum)
    ).join(" ");
    return `"${w}"`;
  }).join("\n");
};

const Grid = styled.div`
  display: grid;
  grid-template: ${generateTemplate()};
  grid-gap: 0.5em;
`;

const _CalDay = styled.div<{ weekDay: number; weekNum: number }>`
  grid-area: ${({ weekDay, weekNum }) => areaName(weekDay, weekNum)};
`;
const CalDay = styled(_CalDay)`
  border: 1px solid gray;
  padding: 0.5em;
`;

const getWeekNumber = (dt: DateTime) => {
  const isSunday = dt.weekday === 7;
  const weekNumOffset = isSunday ? 1 : 0;
  return dt.weekNumber + weekNumOffset;
};

const getWeekNum = (target: DateTime, current: DateTime) => {
  // TODO 年またぎ
  console.log(target.weekNumber, current.weekNumber);
  return getWeekNumber(current) - getWeekNumber(target);
};
const getMonthDate = (year, month) => {
  const firstDay = DateTime.local(year, month, 1);
  return Array.from({ length: firstDay.daysInMonth }, (_, day) => {
    const cursor = firstDay.plus({ days: day });
    return {
      day: cursor.day,
      weekDay: cursor.weekday % 7,
      weekNum: getWeekNum(firstDay, cursor)
    };
  });
};

const Days = ({ year, month }) => {
  return (
    <>
      {getMonthDate(year, month).map(({ day, weekDay, weekNum }, i) => {
        return (
          <CalDay weekDay={weekDay} weekNum={weekNum} key={i}>
            <div>{areaName(weekDay, weekNum)}</div>
            <div>{day}</div>
          </CalDay>
        );
      })}
    </>
  );
};

type CalendarProps = {
  year: number;
  month: number;
};
export class Calendar extends Component<CalendarProps, CalendarProps> {
  constructor(props) {
    super(props);
    this.state = { year: this.props.year, month: this.props.month };
  }
  handlePrev = () => {
    const prev = DateTime.local(this.state.year, this.state.month).minus({
      months: 1
    });
    this.setState({
      year: prev.year,
      month: prev.month
    });
  };
  handleNext = () => {
    const next = DateTime.local(this.state.year, this.state.month).plus({
      months: 1
    });
    this.setState({
      year: next.year,
      month: next.month
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handlePrev}>prev</button>
        <button onClick={this.handleNext}>next</button>
        <div>
          {this.state.year}/{this.state.month}
        </div>
        <Grid>
          <Days {...this.state} />
        </Grid>
      </div>
    );
  }
}
