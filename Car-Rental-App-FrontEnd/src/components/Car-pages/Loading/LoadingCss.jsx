import styled from 'styled-components';

export const LoadingContainer = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingBox = styled.div`
    width: 60%;
    min-width: 400px;
    background-color: #fff;
    height: 400px;
    border-radius: 25px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const LoadingHeading = styled.h1`
    font-size:50px
`;

export const LoadingImage = styled.img`
    height: 75%;
    width: 550px;
`;
