import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

enum Area {
  header = "header",
  body = "body",
  footer = "footer"
}
type Ar<T extends string> = { area: (T | null)[]; cols?: string[] };

type AreaMap<T extends string> = {
  areas: Ar<T>[];
  rows?: string[];
};

const areaMap: AreaMap<Area> = {
  areas: [
    {
      area: [Area.header, Area.header, Area.header]
    },
    {
      area: [null, Area.body, null]
    },
    {
      area: [Area.footer, Area.footer, Area.footer]
    }
  ],
  rows: []
};

const generateTemplate = <T extends string>(areaMap: AreaMap<T>) => {
  const colsMap = areaMap.areas
    .map(({ area, cols }) => {
      const colsString = cols ? cols.join(" ") : "";
      const filled = area.map(item => {
        return !!item ? item : ".";
      });
      return `"${filled.join(" ")}" ${colsString}`;
    })
    .join("\n");
  const rowsString =
    areaMap.rows && areaMap.rows.length > 0
      ? `/ ${areaMap.rows.join(" ")}`
      : "";
  const tmp = colsMap + rowsString;
  return tmp;
};

const gridTemplate = `
  "${Area.header} ${Area.header} ${Area.header}" 60px
               ". ${Area.body} ." 1fr
  "${Area.footer} ${Area.footer} ${Area.footer} " 20px
`;
const Layout = styled.div`
  display: grid;
  grid-template: ${generateTemplate(areaMap)};
`;

const LayoutArea = styled.div<{ area: string }>`
  grid-area: ${props => props.area}};
`;

const Foo = () => {
  return (
    <Layout>
      <LayoutArea area={Area.header}>header</LayoutArea>
      <LayoutArea area={Area.body}>body</LayoutArea>
      <LayoutArea area={Area.footer}>footer</LayoutArea>
    </Layout>
  );
};
ReactDOM.render(<Foo />, document.getElementById("container"));
