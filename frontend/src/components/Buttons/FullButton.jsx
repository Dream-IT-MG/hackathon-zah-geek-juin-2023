import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#60768b" : "#496595")};
  background-color: ${(props) => (props.border ? "#60768b" : "#496595")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#fff" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "BFD1DB" : "#DEE6E9")};
    border: 1px solid white;
    color: ${(props) => (props.border ? "#fff" : "#fff")};
  }
`;

