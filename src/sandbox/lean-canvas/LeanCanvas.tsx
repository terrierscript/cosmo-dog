import styled, { css } from "styled-components";
import React from "react";
import { transpose } from "transpose-matrix";
import { withMediaStyle } from "components/style/responsive";

const template = `
  "s1 s1 s4 s4 s3 s3 s9 s9 s2 s2"
  "s1 s1 s4 s4 s3 s3 s9 s9 s2 s2"
  "s1 s1 s8 s8 s3 s3 s5 s5 s2 s2"
  "s1 s1 s8 s8 s3 s3 s5 s5 s2 s2"
  "s7 s7 s7 s7 s7 s6 s6 s6 s6 s6"
  "s7 s7 s7 s7 s7 s6 s6 s6 s6 s6"
`;

const templateToArray = (template: string) => {
  return template
    .split("\n")
    .map((item) => {
      if (item.trim() === "") {
        return null;
      }
      return item
        .trim()
        .replace(/\"/g, "")
        .split(" ");
    })
    .filter((row) => !!row);
};

const arrayToTemplate = (arr: string[][]) => {
  return arr
    .map((row) => {
      return `"${row.join(" ")}"`;
    })
    .join("\n");
};

const rotated = arrayToTemplate(transpose(templateToArray(template)));

const _Grid = styled.div`
  display: grid;
  grid-template: ${template};
  grid-auto-rows: 80em;
  /* grid-auto-columns: 80px; */
  grid-gap: 0.5em;
  box-sizing: border-box;
`;

const Grid = withMediaStyle(
  _Grid,
  css`
    grid-template: ${rotated};
  `
);

const Canvas = styled.div`
  background: white;
  border: 1px solid black;
  min-height: 5em;
  min-width: 5em;
  padding: 1em;
`;
const Edit = styled.div`
  height: 50%;
`;
const Title = styled.div`
  color: #333;
  font-weight: bold;
  padding: 0.5em 0;
`;

const Areas = ({ canvasItem }) => {
  const areas = [
    { area: "s1", name: "1.課題" },
    { area: "s2", name: "2.顧客セグメント" },
    { area: "s3", name: "3.独自の価値提案" },
    { area: "s4", name: "4.ソリューション" },
    { area: "s5", name: "5.チャネル" },
    { area: "s6", name: "6.収入の流れ" },
    { area: "s7", name: "7.コスト構造" },
    { area: "s8", name: "8.主要指標" },
    { area: "s9", name: "9.圧倒的な優位性" }
  ];
  return (
    <>
      {areas.map(({ area, name }, i) => {
        return (
          <Canvas style={{ gridArea: area }} key={i}>
            <Title>{name}</Title>
            <Edit contentEditable>{canvasItem[i]}</Edit>
          </Canvas>
        );
      })}
    </>
  );
};
export const LearnCampus = (props) => {
  return (
    <Grid>
      <Areas {...props} />
    </Grid>
  );
};
