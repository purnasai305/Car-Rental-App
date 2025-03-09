import styled from "styled-components";

// Container to hold the form
export const Container = styled.div`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 800px; // Fixed width for the container
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; // Fixed gap value
`;


// Form control component for labels and inputs
export const FormControl = styled.div`
  width: 100%; // Full width for form controls
  margin-bottom: 15px;
`;

// Label for input fields
export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
`;

// Input field styling
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

// Select field styling
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

// Button styling
export const Button = styled.button`
  background-color: #10a310;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #357ab8; // Darker shade on hover
  }
`;
