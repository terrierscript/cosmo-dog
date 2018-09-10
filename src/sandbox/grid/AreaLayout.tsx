import * as React from "react";
import { AreaMap, generateTemplateComponent } from "./generateTemplate";
import styled from "styled-components";
import { White } from "components/background/Background";
import { SearchInput } from "../search/Search";

const template = `
  "header header header" 3em
  ".      body   ."      80vh
  "footer footer footer" 2em
  / 10%   80%    10%
`;

const Layout = styled.div`
  display: grid;
  grid-template: ${template};
`;

const Area = styled.div<any>`
  grid-area: ${(props: any) => props.area};
  background: ${(props: any) => props.background};
`;

export const AreaLayout = () => {
  return (
    <Layout>
      <Area area="header" background="#e85c40">
        header
      </Area>
      <Area area="body" background="#4080e8">
        body
      </Area>
      <Area area="footer" background="#49d853">
        footer
      </Area>
    </Layout>
  );
};
