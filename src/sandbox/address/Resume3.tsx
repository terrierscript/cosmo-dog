import React from "react";
import styled from "styled-components";
import photo from "./photo.png";
import { Area } from "components/grid/Grid";
import { BorderProps, Border, parseBorderProps } from "./border";

const template = `
"	tl    ts  .     photo	"	
"	.	    .	  .     photo	"	
"	area1 .	  .     photo	"	
"	area1 .	  .     photo	"	
"	area1 .  	. 	    .     "	
"	area2	area2	area2  area2	" 
`;
const GridBase = styled.div`
  display: grid;
`;
const Grid = styled(GridBase)`
  background: white;
  box-sizing: border-box;
  grid-template: ${template};
  width: 800px;
  /* grid-gap: 1px; */
`;

const template1 = `
  "kanaf	kanal"
  "namef	namel"
  "birth	gender"
`;
const Grid1 = styled(GridBase)`
  display: grid;
  grid-template-areas: ${template1};
  grid-area: area1;
  border: 2px solid black;
  border-bottom: none;
`;
const template2 = `
  "zip	  zip	  zip	  zip    phone"
  "place	place	place	place	 phone"
`;
const Grid2 = styled(GridBase)`
  display: grid;
  grid-template-areas: ${template2};
  grid-area: area2;
  border: 2px solid black;
`;

const PhotoImg = styled.img`
  width: 200px;
`;
const Photo = () => {
  return <PhotoImg src={photo} />;
};

const Name = styled.div`
  font-size: 2em;
  width: 100%;
  /* text-align: center; */
`;
const Kana = styled.div`
  width: 100%;
  /* text-align: center; */
`;
const Title = styled.div`
  font-size: 2em;
  letter-spacing: 1.5em;
  text-align: center;
  font-weight: bold;
`;

const BoxArea = styled(Area)<BorderProps & { area: string }>`
  padding: 0.2em;
  ${(props) => parseBorderProps(props)};
`;
const BorderArea = styled(Border)<BorderProps & { area: string }>`
  grid-area: ${(props) => props.area}
  width: 100%;
  height: 100%;
`;
const Borders = () => {
  return (
    <>
      <BorderArea area={"kanaf"} t={2} l={2} r={0} b={0} />
      <BorderArea area={"kanal"} t={2} l={0} r={2} b={0} />
      <BorderArea area={"namef"} t={1} l={2} r={0} b={0} />
      <BorderArea area={"namel"} t={1} l={0} r={2} b={0} />
      <BorderArea area={"gender"} t={1} l={0} r={2} b={0} />
      <BorderArea area={"birth"} t={1} l={2} r={0} b={0} />
      <BorderArea area={"zip"} t={2} l={2} r={0} b={1} />
      <BorderArea area={"place"} t={0} l={2} r={0} b={2} />
      <BorderArea
        area={"phone"}
        t={2}
        l={1}
        r={2}
        b={2}
        style={{ height: "98%" }}
      />
      <BorderArea area={"photo"} t={2} l={2} r={2} b={2} />
    </>
  );
};
export const Resume3 = () => {
  return (
    <Grid>
      <Area area={"tl"}>
        <Title>履歴書</Title>
      </Area>
      <Area area={"ts"}>2018/09/20</Area>
      <Grid1>
        <BoxArea area={"kanaf"} b={1}>
          <Kana>しいえす</Kana>
        </BoxArea>
        <BoxArea area={"kanal"} b={1}>
          <Kana>えすたろう</Kana>
        </BoxArea>
        <BoxArea area={"namef"} b={1}>
          <Name>椎江州</Name>
        </BoxArea>
        <BoxArea area={"namel"} b={1}>
          <Name>得太郎</Name>
        </BoxArea>
        <BoxArea area={"gender"}>男</BoxArea>
        <BoxArea area={"birth"}>昭和 60 年 1 月 1 日</BoxArea>
      </Grid1>
      <Grid2>
        <BoxArea area={"zip"}>〒 153-0063</BoxArea>
        <BoxArea area={"place"}>
          東京都目黒区目黒３丁目９−１ 目黒 須田 ビル 5F
        </BoxArea>
        <BoxArea area={"phone"} l={1}>
          090-1234-5678
        </BoxArea>
      </Grid2>

      <BoxArea area={"photo"} l={2} b={2} r={2} t={2}>
        <Photo />
      </BoxArea>
    </Grid>
  );
};
