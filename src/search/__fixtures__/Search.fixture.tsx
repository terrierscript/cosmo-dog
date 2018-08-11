import { SearchInput } from "../Search";
import React from "react";
import { Gradient } from "background/Background";

export default {
  name: "SearchInput",
  component: () => {
    return (
      <Gradient>
        <SearchInput />
      </Gradient>
    );
  }
};
