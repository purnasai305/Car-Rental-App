import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: ${(props) => (props.user ? 'white' : 'black')};
`;

export const NavbarWrapper = styled.div`
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarHStack = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 10px;
`;

export const NavbarItemBox = styled.div`
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

export const CheckboxWrapper = styled.div`
  padding: 16px;
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CreateCarButton = styled.div`
  background-color: black;
  width: 150px;
  height: 50px;
  border-radius: 40px;
  margin-left: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 25px;
  font-weight: 600;
  font-size: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #393;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 30px;
  border: none;
  background-color: white;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background-color: lightgray;
  }
`;

export const LoginButton = styled.button`
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`;

export const NavbarRightContainer = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const CustomDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background-color: white;
  z-index: 1000; 
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999; 
`;

export const DrawerContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
  height: 100%; /* Ensure it takes the full height of the drawer */
  padding: 20px;
  box-sizing: border-box; /* Include padding in height calculation */
`;

export const DrawerLink = styled(Link)`
  height:50px;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  color: black; /* Set text color */
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction:space-between;
  gap: 10px;
  font-size: 20px;
`;

export const DrawerMenuItem = styled.div`
  margin-left: 15px;
  margin-top: 5px;
`;

export const CityAndLanguage = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #10a310;
  margin-left: 95px;
  margin-top: 5px;
`;
