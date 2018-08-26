import React, { Component } from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { Area } from "components/grid/Grid";
import { CalendarGrid } from "./CalendarGrid";
import { getMonthDate } from "./getMonthDate";

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
        <CalendarGrid year={this.state.year} month={this.state.month}>
          <Days {...this.state} />
        </CalendarGrid>
      </div>
    );
  }
}
