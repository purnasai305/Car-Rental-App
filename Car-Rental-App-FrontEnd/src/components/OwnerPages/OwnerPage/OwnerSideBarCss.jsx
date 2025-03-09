import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 300px;
  height: auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  width: 100%;
  background-color: #10a310;
  border-top-right-radius: 10px;
`;

export const FilterHeaderText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CheckboxWrapper = styled.div`
  padding: 16px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const CreateCarButton = styled.div`
  background-color: black;
  width: 80%;
  height: 50px;
  border-radius: 40px;
  margin-left: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 25px;
  font-weight: 600;
  font-size: 25px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #393;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
