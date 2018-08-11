import * as React from "react";

import { AreaMap, generateTemplateComponent } from "./generateTemplate";
import { Gradient, White, Goodie } from "./Background";
import styled from "styled-components";
import { SearchInput } from "../search/Search";

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

const CenterArea = styled(Area)`
  align-self: center;
`;

export const Hero = () => {
  return (
    <Gradient>
      <Layout>
        <CenterArea area={"header"}>
          <SearchInput placeholder="Search Items" />
        </CenterArea>
        <CenterArea area={"body"}>
          <White>body</White>
        </CenterArea>
      </Layout>
    </Gradient>
  );
};
