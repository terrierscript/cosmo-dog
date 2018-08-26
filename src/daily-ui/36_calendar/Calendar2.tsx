import React, { Component } from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { Area } from "components/grid/Grid";

type CalendarProps = {
  year: number;
  month: number;
};

const getMonthDate = (year, month) => {
  const firstDay = DateTime.local(year, month, 1);
  return Array.from({ length: firstDay.daysInMonth }, (_, day) => {
    const currDay = firstDay.plus({ days: day });
    return currDay;
    // {
    //   day: cursor.day,
    //   weekDay: cursor.weekday % 7
    // };
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
const generateCalendarTemplate = (year, month) => {
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

const _Grid = styled.div<{ year: number; month: number }>`
  display: grid;
  grid-template: ${({ year, month }) => generateCalendarTemplate(year, month)};
`;

const Grid = styled(_Grid)`
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  background: #ccc;
`;

const DayItem = styled.div`
  text-align: center;
  vertical-align: middle;
  height: 3em;
  line-height: 3em;
  width: 3em;
`;

const Days = ({ year, month }) => {
  return (
    <>
      {getMonthDate(year, month).map((dt, i) => {
        return (
          <Area area={`day-${dt.day}`} key={i}>
            <DayItem>{dt.day}</DayItem>
          </Area>
        );
      })}
    </>
  );
};

export class Calendar2 extends Component<CalendarProps, CalendarProps> {
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
        <Grid year={this.state.year} month={this.state.month}>
          <Days {...this.state} />
        </Grid>
      </div>
    );
  }
}
