// StyledComponents.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
`;

export const BannerContainer = styled.div`
  height: 660px;
  position: relative;
`;

export const BannerImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const CenteredBox = styled.div`
  width: 650px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  max-width: 500px;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid white;
  }
`;

export const LocationDropDown = styled.select`
  height: 48px;
  border-radius: 10px;
  background: white;
  width: 100%;
  margin-bottom: 0.8em;
  padding: 0 1em;
    
    &:focus {
        border-color: #007bff; /* Change border color on focus */
        outline: none; /* Remove default outline */
    }
`;

export const LocationOption =styled.option`
  
`;


export const Button = styled.button`
  height: 48px;
  border-radius: 5px;
  background: #10a310;
  color: white;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: #0f9210;
  }
`;

export const OuterSection = styled.div`
    background: #383838;
`;

export const Section = styled.div`
  color: white;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
`;

export const SectionText = styled.p`
  margin: 20px 100px;
  color:white;
  font-wreight:400;
`;

export const SectionHeading = styled.h2`
    margin: 20px 100px;
    color:white;
    font-weight:600;
    font-size:20px;
`;

export const Heading = styled.h1`
  color: white;
  margin: 0;
  font-size: 30px;
  font-weight:600;
`;

export const SubHeading = styled.h2`
  color: white;
  margin: 0;
  font-weight:600;
  font-size:30px;
`;
