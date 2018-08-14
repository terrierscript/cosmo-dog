import styled from "styled-components";
import React from "react";

const template = `
  "s1 s1 s4 s4 s3 s3 s9 s9 s2 s2"
  "s1 s1 s4 s4 s3 s3 s9 s9 s2 s2"
  "s1 s1 s8 s8 s3 s3 s5 s5 s2 s2"
  "s1 s1 s8 s8 s3 s3 s5 s5 s2 s2"
  "s7 s7 s7 s7 s7 s6 s6 s6 s6 s6"
  "s7 s7 s7 s7 s7 s6 s6 s6 s6 s6"
`;

const Grid = styled.div`
  display: grid;
  grid-template: ${template};
  grid-auto-rows: 80em;
  /* grid-auto-columns: 80px; */
  grid-gap: 0.5em;
`;

const Canvas = styled.div`
  background: white;
  border: 1px solid black;
  min-height: 5em;
  min-width: 5em;
  padding: 1em;
`;

const Areas = () => {
  const areas = [
    { area: "s1", name: "課題" },
    { area: "s2", name: "顧客セグメント" },
    { area: "s3", name: "独自の価値提案" },
    { area: "s4", name: "ソリューション" },
    { area: "s5", name: "チャネル" },
    { area: "s6", name: "収入の流れ" },
    { area: "s7", name: "コスト構造" },
    { area: "s8", name: "主要指標" },
    { area: "s9", name: "圧倒的な優位性" }
  ];
  return (
    <>
      {areas.map(({ area, name }) => {
        return (
          <Canvas style={{ gridArea: area }}>
            {name}
            <div contentEditable />
          </Canvas>
        );
      })}
    </>
  );
};
export const LearnCampus = () => {
  return (
    <Grid>
      <Areas />
    </Grid>
  );
};
