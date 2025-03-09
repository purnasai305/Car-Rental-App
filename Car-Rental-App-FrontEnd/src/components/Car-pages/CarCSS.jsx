// StyledComponents.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainDiv = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    gap:40px;
    background-color:rgb(245, 245, 245);
`;

export const FilterContainer = styled.div`
    position:fixed,
    width: 400px;
    height: 100vh;
    overflow-y: auto;
     &::-webkit-scrollbar {
        display: none;
    }
`;

export const CarsContainer = styled.div`
    width: 68%;
    margin-right: 20px;
`;

export const SearchBar = styled.div`
    height: auto;
    margin-top: 20px;
`;

export const CarBox = styled.div`
    margin-top: 20px;
    margin-bottom:20px;
      overflow-y: auto;
      height: 100vh;
     &::-webkit-scrollbar {
        display: none;
    }
`;

export const CarCard = styled.div`
    background-color: white;
    border-radius: 25px;
    height: 370px;
    width:400px;
    cursor: pointer;
`;

export const ImageBox = styled.div`
    height: 60%;
`;

export const CarDetails = styled.div`
    height: 30%;
`;

export const RatingBox = styled.div`
    width: 45px;
    height: 26px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(12, 89, 6);
    margin-top: -50px;
    margin-left:-5px;
`;

export const SortContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 60px;
`;

export const SortSelect = styled.select`
    background-color: white;
    border-radius: 6px;
    width: 280px;
`;
