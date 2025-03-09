import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 900px;
  margin: auto;
  margin-top: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #66b3ff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color:#10A310; /* Teal color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2f7e5b; /* Darker teal */
  }
`;

export const Text = styled.span`
  cursor: pointer;
  margin-top: 16px;
  color: black; /* Link color */
`;

export const Image = styled.img`
  margin-top: 20px;
  max-width: 100%;
`;
