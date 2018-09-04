import React, { SFC } from "react";
import styled from "styled-components";
import { Area } from "components/grid/Grid";
type Time = {
  hour: string;
  min: string;
};
const rangeTimes = (start = 10, hours = 6): Time[] => {
  return Array.from({ length: hours * 4 + 1 }, (_, i) => {
    // TODO: more clean
    const hr = Math.floor(i / 4) + start;
    const min = (i % 4) * 15;
    const minSprint = min === 0 ? "00" : min;

    // return `${hr}:${minSprint}`;
    return { hour: hr.toString(), min: minSprint.toString() };
  });
};

const times = rangeTimes();

// [t-1000] 1fr [t-1015] 1fr [t-1030] 1fr [t-1045] 1fr [t-1100] 1fr [t-1115] 1fr [t-1130] ..
const rowTemplate = times
  .map((time) => `[t-${time.hour}${time.min}]`)
  .join(" 1fr ");

const Grid = styled.div`
  display: grid;
  background: white;
  box-sizing: border-box;
  grid-template-columns: [time] 0.5fr [taro] 1fr [jiro] 1fr [hanako] 1fr;
  grid-template-rows: ${rowTemplate};
`;

const TimeArea = styled.div<{ column: string; start: string; end?: string }>`
  grid-column: ${({ column }) => column};
  grid-row: ${({ start, end }) => {
    if (end) {
      return `t-${start} / t-${end}`;
    }
    return `t-${start}`;
  }};
`;

const flatten = (item) => item.reduce((a, b) => a.concat(b), []);
// 全部のエリアにborderを撒き散らす
const Border = styled(TimeArea)`
  border-left: solid 1px #ccc;
  border-top: solid 1px #ccc;
`;
const Borders = () => {
  const elms = ["time", "taro", "jiro", "hanako"].map((column) => {
    return rangeTimes().map((time, i) => (
      <Border
        column={column}
        start={`${time.hour}${time.min}`}
        key={`${column}-${i}`}
      />
    ));
  });
  return flatten(elms);
};
// @ts-ignore
const Times: SFC<{}> = () => {
  return rangeTimes().map((time, i) => {
    return (
      <TimeArea
        start={`${time.hour}${time.min}`}
        column={"time"}
        key={i.toString()}
      >
        {time.hour}:{time.min}
      </TimeArea>
    );
  });
};
const ScheduleBlock = styled(TimeArea)`
  background: #bcd6ff;
  /* border: 1px solid #2b293f; */
  border-radius: 10px;
  padding: 1em;
`;
const Schedule: SFC<{ start: string; end: string; name: string }> = ({
  start,
  end,
  name,
  children
}) => {
  const time = `${start.substr(0, 2)}:${start.substr(2, 4)}`;
  return (
    <ScheduleBlock start={start} end={end} column={name}>
      <div>{time}</div>
      <div>
        [{name}
        ]: {children}
      </div>
    </ScheduleBlock>
  );
};

export const Timetable = () => {
  return (
    <Grid>
      <Borders />
      <Times />
      <Schedule name="taro" start={"1030"} end={"1145"}>
        外出
      </Schedule>
      <Schedule name="taro" start={"1345"} end={"1600"}>
        外出
      </Schedule>
      <Schedule name="hanako" start={"1130"} end={"1200"}>
        お昼
      </Schedule>
      <Schedule name="jiro" start={"1230"} end={"1400"}>
        会議
      </Schedule>
      <Schedule name="hanako" start={"1230"} end={"1400"}>
        会議
      </Schedule>
    </Grid>
  );
};
