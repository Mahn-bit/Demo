import styled from "styled-components";

function ExtendComp() {
  return (
    <div>
      <h2>Heading 2</h2>
      <button>Click Me!</button>
    </div>
  );
}

const Wrapper = styled(ExtendComp)`
  h2 {
    color: green;
    text-align: center;
  }

  button {
    padding: 4px 8px;
    background-color: violet;
    border: none;
  }
`;

export default Wrapper;
