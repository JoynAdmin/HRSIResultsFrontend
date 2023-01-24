import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vhw;
  height: 100vh;
  display: flex;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  padding: 20px;
  padding-bottom: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  min-width:250px
`;
export const LogoWrapprt = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5;
`;
export const Field2 = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #282828;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #909090;
  margin-top: 10px;
  height: 30px;
`;
export const Value = styled.div`
  margin-top: 10px;
  height: 30px;
  font-size: 15px;
  margin-bottom: 10px;
`;
export const Submitbutton = styled.div`
  width: 100%;
  height: 30px;
  background-color: #4369a3;
  border-radius: 4px;
  color: white;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
