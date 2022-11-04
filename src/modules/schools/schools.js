import styled from "styled-components";

const ListContainer = styled.div`
  padding: 20px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-top: 50px;
`;

const BoxSchool = styled.div`
  background: #fafafa;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #23304433;
`;
const IconBackSchools = styled.button`
  background: none;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  //position: absolute;
  bottom: 20px;
  left: 60px;
  border: none;
  font-size: 40px;
  color: gray;
`;

export { ListContainer, BoxSchool , IconBackSchools};
