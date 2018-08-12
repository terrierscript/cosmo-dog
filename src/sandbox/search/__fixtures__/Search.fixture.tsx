import { SearchInput } from "../Search";
import React from "react";
import { Gradient } from "sandbox/background/Background";

const Search = () => (
  <Gradient>
    <SearchInput />
  </Gradient>
);

export default {
  name: "SearchInput",
  component: Search
};
