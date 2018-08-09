import * as React from "react";

import styled from "styled-components";
import {
  generateTemplate,
  AreaMap,
  generateTemplateComponent
} from "./generateTemplate";
type AreaKeys = "header" | "body" | "footer";

const areaMap: AreaMap<AreaKeys> = {
  areas: [
    {
      area: ["header", "header", "header"]
    },
    {
      area: [null, "body", null]
    },
    {
      area: ["footer", "footer", "footer"]
    }
  ],
  rows: []
};
const { Layout, Area } = generateTemplateComponent(areaMap);
export const Main = () => {
  return (
    <Layout>
      <Area area={"header"}>header</Area>
      <Area area={"body"}>body</Area>
      <Area area={"footer"}>footer</Area>
    </Layout>
  );
};
