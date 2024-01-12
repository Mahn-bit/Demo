import styled from "styled-components";

function CustomWrapper() {
  return (
    <div>
      <Wrapper>
        <h1>Another heading</h1>
        <p>Another para</p>
        <button>Another button</button>
      </Wrapper>
    </div>
  );
}

export default CustomWrapper;

const Wrapper = styled.div`
  h1 {
    text-align: center;
    color: #ee82ee;
  }

  p {
    font-size: 40px;
  }

  button {
    background-color: #ffc0cb;
    padding: 4px 8px;
    border: none;
  }
`;
