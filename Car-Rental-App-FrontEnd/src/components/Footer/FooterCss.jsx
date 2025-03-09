import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #666666;
  color: white;
  padding: 20px 0;
`;

export const FooterHeading = styled.h2`
  color: white;
  margin: 0 0 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Stack = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 4px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
  margin: 20px 0;
`;

export const FooterText = styled.p`
  text-align: center;
  margin: 0;
  padding: 10px;
`;
