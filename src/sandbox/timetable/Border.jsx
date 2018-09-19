const Border = styled(Area)`
  border-left: solid 1px #ccc;
  min-height: 3em;
  border-top: ${({ color = "#ccc" }) => `solid 1px ${color}`};
`;
