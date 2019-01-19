import React from "react";

import { Background, Block } from "./Background";
import { Grid, Form, Blank } from "./Grid";
import { InputForm } from "./InputForm";

export const SignUp = () => {
  return (
    <Background>
      <Block>
        <Grid>
          <Form>
            <InputForm />
          </Form>
          <Blank>Welcome</Blank>
        </Grid>
      </Block>
    </Background>
  );
};
