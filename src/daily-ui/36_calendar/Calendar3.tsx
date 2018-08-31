import React, { Component } from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { Area } from "components/grid/Grid";
import { getMonthDate, generateFilledCalendar } from "./getMonthDate";

type CalendarProps = {
  year: number;
  month: number;
};

const DayItem = styled.div`
  text-align: center;
  vertical-align: middle;
  height: 3em;
  line-height: 3em;
  width: 3em;
`;

const Days = ({ year, month }) => {
  const days = generateFilledCalendar(year, month).reduce((curr, item) => {
    return [...curr, ...item];
  }, []);
  console.log(days);
  return (
    <>
      {days.map((dt, i) => {
        return (
          <div key={i}>
            {dt !== undefined ? <DayItem>{dt.day}</DayItem> : null}
          </div>
        );
      })}
    </>
  );
};

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  background: #ccc;
`;

export class Calendar3 extends Component<CalendarProps, CalendarProps> {
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
        <CalendarGrid>
          <Days {...this.state} />
        </CalendarGrid>
      </div>
    );
  }
}
