import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
    margin-bottom: 20px;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const SelectField = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const SubmitButton = styled.button`
    padding: 10px 15px;
    background-color: #10a310;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: #0056b3;
    }
`;
