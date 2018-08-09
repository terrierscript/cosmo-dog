import * as React from "react";

import { AreaMap, generateTemplateComponent } from "./generateTemplate";
import { Gradient, White } from "./Background";

type AreaKeys = "header" | "body" | "footer";

const areaMap: AreaMap<AreaKeys> = {
  areas: [
    {
      area: ["header", "header", "header"],
      cols: "60px"
    },
    {
      area: [null, "body", null]
    }
  ],
  rows: ["0.2fr", "1fr", "0.2fr"]
};

const { Layout, Area } = generateTemplateComponent(areaMap);
export const Main = () => {
  return (
    <Gradient>
      <Layout>
        <Area area={"header"}>header</Area>
        <Area area={"body"}>
          <White>body</White>
        </Area>
      </Layout>
    </Gradient>
  );
};
