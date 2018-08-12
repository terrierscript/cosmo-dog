import { SearchInput } from "../Search";
import React from "react";
import { Gradient } from "components/background/Background";

const Search = () => (
  <Gradient>
    <SearchInput />
  </Gradient>
);

export default {
  name: "SearchInput",
  component: Search
};
