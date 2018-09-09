import React, { Component, SFC } from "react";
import { DateTime } from "luxon";
import styled, { css } from "styled-components";
import { generateFilledCalendar } from "./getMonthDate";

type CalendarProps = {
  year: number;
  month: number;
};

const colorCss = css<any>`
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ bgColor }) => bgColor};
`;

const DayItem: any = styled.div`
  text-align: center;
  vertical-align: middle;
  height: 3em;
  line-height: 3em;
  font-size: 1em;
  width: 3em;
  border-radius: 50%;
  ${colorCss};
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-columns: max-content;
  grid-auto-rows: max-content;
  grid-gap: 0.6em;
  width: fit-content;
  padding: 1em;
`;
export const Container = styled.div`
  background: #f4f4ed;
  width: fit-content;
`;
export const Month = styled.div`
  font-weight: bold;
  padding: 1em;
`;

const getFontColor = (date: DateTime) => {
  return "#160f01";
};
const getBgColor = (date: DateTime) => {
  switch (date.weekday) {
    case 7:
      return "#f7481d";
    case 6:
      return "#1daaf7";
    default:
      return "#f7ab1d";
  }
};
// @ts-ignore;
const Day: SFC<{ date: DateTime }> = ({ date }) => {
  if (!date) {
    return null;
  }

  return (
    <DayItem fontColor={getFontColor(date)} bgColor={getBgColor(date)}>
      {date.day}
    </DayItem>
  );
};

const Days = ({ year, month }) => {
  const days = generateFilledCalendar(year, month).reduce((curr, item) => {
    return [...curr, ...item];
  }, []);
  return (
    <>
      {days.map((date, i) => {
        return (
          <div key={i}>
            <Day date={date} />
          </div>
        );
      })}
    </>
  );
};

const WeekdayItem = styled.div`
  text-align: center;
`;
const WeekdaysHeader = () => {
  return (
    <>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((weekday) => {
        return <WeekdayItem>{weekday}</WeekdayItem>;
      })}
    </>
  );
};

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
        <Container>
          <Month>
            {this.state.year}/{this.state.month}
          </Month>
          <CalendarGrid>
            <WeekdaysHeader />
            <Days {...this.state} />
          </CalendarGrid>
        </Container>
      </div>
    );
  }
}
