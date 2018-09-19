
const ItemWithBorder = styled(Item)`
  color: #182438;
  background: ${(props) => `${props.bgColor}`};
  border: ${(props) => `10px solid ${props.borderColor}`};
`;
