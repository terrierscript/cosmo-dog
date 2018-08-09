import styled from "styled-components";

type Ar<T extends string> = {
  area: (T | null)[];
  cols?: string[];
};
export type AreaMap<T extends string> = {
  areas: Ar<T>[];
  rows?: string[];
};

export const generateTemplate = <T extends string>(areaMap: AreaMap<T>) => {
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

export const generateTemplateComponent = <T extends string>(
  areaMap: AreaMap<T>
) => {
  const template = generateTemplate(areaMap);
  const Layout = styled.div`
    display: grid;
    grid-template: ${template};
  `;

  const Area = styled.div<{
    area: T;
  }>`
    grid-area: ${props => props.area};
  `;
  return {
    Layout,
    Area
  };
};
