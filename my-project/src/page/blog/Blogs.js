import { H1 } from "../../css/cssHome";

import styled from "styled-components";

const ViewDiv = styled.div`
  margin-top: 34vh;
  width: 100px;
  height: 100px;
  background-color: "blue";
  &.box {
    width: 200px;
    height: 200px;
    background-color: red;
  }
`;
const Text = styled.p`
  font-weight: 700;
  font-size: 30px;
  &.red {
    color: yellow;
  }
`;

const Blogs = () => {
  return (
    <ViewDiv>
      <ViewDiv className="box">
        <Text className="red">Baloo</Text>
      </ViewDiv>
      <Text>hello</Text>
    </ViewDiv>
  );
};
export default Blogs;
