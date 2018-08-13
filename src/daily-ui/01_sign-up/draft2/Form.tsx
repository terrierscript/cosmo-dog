import styled from "styled-components";
import { ClearInput } from "components/input/Input";
import React from "react";

const fontColor = "#6c71c4";

const Button = styled.button`
  /* background: linear-gradient(
    0deg,
    rgba(92, 80, 163, 1) 0%,
    rgba(107, 94, 181, 1) 100%
  ); */
  background: rgba(92, 80, 163, 1);
  font-size: 1.3em;
  color: white;
  border: 0 none;
  border-radius: 1em;
  padding: 0.5em 2em;
  cursor: pointer;
  transition: transform 0.2s;
  :active {
    transform: translateY(5px);
    transition: transform 0.2s;
  }
  :focus {
    outline: none;
  }
`;

const FormBox = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-top: 2em; */
  /* vertical-align: middle; */
  height: 100%;
`;

const Row = styled.div`
  padding: 0.5em;
`;
const RowSubmit = styled(Row)`
  padding-top: 2em
  align-self: flex-end;
`;

const Heading = styled.div`
  color: #666;
`;
const Label = styled.div`
  font-size: 1.2em;
`;
const Input = styled(ClearInput)`
  /* border-bottom: #282423 solid 1px; */
  background: rgba(100, 100, 100, 0.1);
  color: ${fontColor};
  font-size: 1.5em;
  padding: 0.5em;
  border-radius: 5px;
`;

const FormInner = styled.div`
  padding: 16px;
`;

const Forgot = styled.a`
  display: block;
  padding-top: 0.5em;
  text-align: center;
  color: #999;
`;

export const Form = () => {
  return (
    <FormInner>
      <FormBox>
        <Row>
          <Heading>Please sign in</Heading>
        </Row>
        <Row>
          <Label>Email</Label>
          <Input />
        </Row>
        <Row>
          <Label>Password</Label>
          <Input />
        </Row>
        <RowSubmit>
          <Button>Sign In</Button>
          <Forgot href="#">Forgot password?</Forgot>
        </RowSubmit>
      </FormBox>
    </FormInner>
  );
};
