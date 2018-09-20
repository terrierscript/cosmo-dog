import React from "react";
import styled from "styled-components";
import photo from "./photo.png"
import { Area } from "components/grid/Grid";
import { BorderProps, Border } from "./border";

const template = `
"	tl	  tl	    ts  .     photo	"	1fr
"	.	    .	      .   .     photo	"	1fr
"	kanaf	kanal	  .	  .     photo	"	2em
"	namef	namel	  .	  .     photo	"	5em
"	birth	gender	.  	. 	    .     "	2em
"	zip	  zip	  zip	  zip    phone	"	2em
"	place	place	place	place	 phone	"	3em
/	2fr	  2fr	  1fr	1fr   2fr	  
`;
const Grid = styled.div`
  background: white;
  padding: 2em;
  box-sizing: border-box;
  display: grid;
  grid-template: ${template};
  width: 800px;
  align-items: center;
  justify-content: center;
  grid-gap: 1px;
`;

const PhotoImg = styled.img`
  width: 100%;
`
const Photo = () => {
  return <PhotoImg src={photo} />
}

const Name = styled.div`
  font-size: 2em;
  width: 100%;
  /* text-align: center; */
`
const Kana = styled.div`
  width: 100%;
  /* text-align: center; */
`
const Title = styled.div`
  font-size: 2em;
  letter-spacing: 1.5em;
  text-align: center;
  font-weight: bold;
`


const BoxArea = styled(Area)`
  padding: 0.2em;
`
const BorderArea = styled(Border)<BorderProps & {area: string}>`
  grid-area: ${props => props.area}
  width: 100%;
  height: 100%;
`
const Borders = () => {
  return <>
    <BorderArea area={"kanaf"} t={2} l={2} r={0} b={0}/>
    <BorderArea area={"kanal"} t={2} l={0} r={2} b={0}/>
    <BorderArea area={"namef"} t={1} l={2} r={0} b={0}/>
    <BorderArea area={"namel"} t={1} l={0} r={2} b={0}/>
    <BorderArea area={"gender"} t={1} l={0} r={2} b={0} />
    <BorderArea area={"birth"} t={1} l={2} r={0} b={0}/> 
    <BorderArea area={"zip"}  t={2} l={2} r={0} b={1}/>
    <BorderArea area={"place"} t={0} l={2} r={0} b={2}/>
    <BorderArea area={"phone"} t={2} l={1} r={2} b={2} style={{height: "98%"}}/>
    <BorderArea area={"photo"} t={2} l={2} r={2} b={2}/>
  </>
}
export const Resume2 = () => {
  return (
    <Grid>
      <Borders />
      <Area area={"tl"}>
        <Title>履歴書</Title>
      </Area>
      <Area area={"ts"}>2018/09/20</Area>
      <BoxArea area={"kanaf"}><Kana>しいえす</Kana></BoxArea>
      <BoxArea area={"kanal"}><Kana>えすたろう</Kana></BoxArea>
      <BoxArea area={"namef"}><Name>椎江州</Name></BoxArea>
      <BoxArea area={"namel"}><Name>得太郎</Name></BoxArea>
      <BoxArea area={"gender"}>男</BoxArea>
      <BoxArea area={"birth"}>昭和 60 年 1 月 1 日</BoxArea>
      <BoxArea area={"zip"}>〒 153-0063</BoxArea>
      <BoxArea area={"place"}>東京都目黒区目黒３丁目９−１ 目黒 須田 ビル 5F</BoxArea>
      <BoxArea area={"phone"}>090-1234-5678</BoxArea>

      <Area area={"photo"}>
        <Photo />
      </Area> 
    </Grid>
  );
};
