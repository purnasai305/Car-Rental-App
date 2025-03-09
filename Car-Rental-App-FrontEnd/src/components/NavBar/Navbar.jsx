import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarHStack,
  NavbarItemBox,
  LogoImage,
  ButtonStyled,
  LoginButton,
  NavbarRightContainer,
  CustomDrawer,
  DrawerOverlay,
  DrawerContentStyled,
  DrawerLink,
  IconTextContainer,
  DrawerMenuItem,
  CityAndLanguage,
  CheckboxWrapper, SectionTitle, CreateCarButton
} from "./NavBarCss.jsx";
import { FaRegPlusSquare } from "react-icons/fa";
import Dropdown from "./DropDown.jsx";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaPassport, FaUserAlt, FaUserCog } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdLogout } from "react-icons/md";
import { auth_logout } from "../../redux/Auth/Auth.actionType";
import { FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleOwnerSignup = () => {
    navigate("/owner/signup");
  };

  return (
    <NavbarContainer user={user}>
      <NavbarWrapper>
        <NavbarHStack>
          <NavbarItemBox>
            <Hamburg />
          </NavbarItemBox>

          <NavbarItemBox onClick={handleHome}>
            {
              user !== undefined ? (
                <LogoImage src="https://www.zoomcar.com/img/zoomcar-logo-new-green.png" />
              ) :
                <LogoImage src="https://iili.io/29h8gzg.png" />
            }
          </NavbarItemBox>
        </NavbarHStack>

        <NavbarRightContainer>

          {/* <ButtonStyled onClick={handleOwnerSignup}>
            <img src="https://iili.io/29jVhtp.png" alt="host-icon" />
            Become a Host
          </ButtonStyled> */}

          {
            user && user.role === "owner" &&
            <CheckboxWrapper>
              <CreateCarButton style={{ gap: '15px' }} onClick={() => navigate("/createCar")}>
                <FaRegPlusSquare />
                Add Car
              </CreateCarButton>
            </CheckboxWrapper>
          }

          {
            user && user.role === "owner" ? (
              <ButtonStyled style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginRight: '40px' }} onClick={() => navigate(`/owner/${user.id}`)}>
                <img src="https://iili.io/29jVhtp.png" alt="host-icon" />
                My Cars
              </ButtonStyled>
            ) :
              <ButtonStyled onClick={handleOwnerSignup}>
                <img src="https://iili.io/29jVhtp.png" alt="host-icon" />
                Become a Host
              </ButtonStyled>
          }
           
          {user && user.role === "lessee" && (
            <ButtonStyled 
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginRight: '40px' }} 
              onClick={() => navigate(`/user/bookings`)}
            >
              <img src="https://iili.io/29jVhtp.png" alt="host-icon" />
              My Bookings
            </ButtonStyled>
          )}

          {
            user === undefined &&
            <Dropdown />
          }

          {
            user !== undefined ? (
              < div onClick={() => navigate("/myaccount")} style={{ backgroundColor: 'white', width: '35px', height: '35px', borderRadius: '10px' }}>
                <FiUser size={34} />
              </div>
            ) :
              <LoginButton onClick={() => navigate("/login")}>
                Login/SignUp
              </LoginButton>
          }
        </NavbarRightContainer>

      </NavbarWrapper>
    </NavbarContainer>
  );
}

function Hamburg() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: auth_logout });
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {
        user !== undefined ? (
          <HamburgerIcon boxsize={"5"} onClick={toggleDrawer} />
        ) :
          <GiHamburgerMenu boxsize={"5"} color="white" onClick={toggleDrawer} />
      }

      {isOpen && (
        <CustomDrawer>
          <DrawerOverlay onClick={toggleDrawer} />
          <DrawerContentStyled>
            <DrawerLink
              style={{ backgroundColor: "rgb(229, 232, 236)" }}
              to={user ? "/myaccount" : "/login"}
            >
              <FaUserAlt />
              {user ? "My Account" : "Login or Signup"}
            </DrawerLink>

            <IconTextContainer >
              <IoLocationOutline />
              <DrawerMenuItem>Change City</DrawerMenuItem>
              <CityAndLanguage style={{ marginLeft: '145px' }}>Chennai</CityAndLanguage>
            </IconTextContainer>

            <IconTextContainer>
              <FiGlobe />
              <DrawerMenuItem>Change Language</DrawerMenuItem>
              <CityAndLanguage>English</CityAndLanguage>
            </IconTextContainer>

            <IconTextContainer>
              <img
                src="https://iili.io/29jVhtp.png"
                alt="host-icon"
                height="40px"
                width="40px"
              />
              <DrawerMenuItem>Become a Host</DrawerMenuItem>
            </IconTextContainer>

            <IconTextContainer>
              <HiOutlineBuildingOffice2 />
              <DrawerMenuItem>Investor Relations</DrawerMenuItem>
            </IconTextContainer>

            <IconTextContainer>
              <FaPassport />
              <DrawerMenuItem>Press Releases</DrawerMenuItem>
            </IconTextContainer>

            <IconTextContainer>
              <IoCallOutline />
              <DrawerMenuItem>Help & Support</DrawerMenuItem>
            </IconTextContainer>

          </DrawerContentStyled>
        </CustomDrawer>
      )}
    </>
  );
}

export default Navbar;
