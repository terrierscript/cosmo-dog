const Area = styled.div`
  grid-column: ${({ column }) => column};
  grid-row: ${({ rowStart, rowEnd }) => {
    if (rowEnd) {
      return `t-${rowStart} / t-${rowEnd}`;
    }
    return `t-${rowStart}`;
  }};
`;

const flatten = (item) => item.reduce((a, b) => a.concat(b), []);
