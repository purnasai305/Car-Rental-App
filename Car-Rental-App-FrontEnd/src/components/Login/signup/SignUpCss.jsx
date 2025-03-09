import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 800px; 
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; 
`;


export const FormControl = styled.div`
  width: 100%; // Full width for form controls
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
`;

export const Input = styled.input`
  width: 500px; // Full width relative to FormControl
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; // Include padding and border in total width

  &:focus {
    border-color: #4a90e2;
    outline: none; // No outline on focus
  }
`;

export const Select = styled.select`
  width: 100%; // Full width relative to FormControl
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; // Include padding and border in total width

  &:focus {
    border-color: #4a90e2;
    outline: none; // No outline on focus
  }
`;

export const Button = styled.button`
  background-color: #10a310;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

