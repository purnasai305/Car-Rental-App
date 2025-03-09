import React from 'react';
import styled from 'styled-components';

// Styled component for the select dropdown
const StyledSelect = styled.select`
    background-color: black; /* Black background */
    color: white; /* White text */
    padding: 10px;
    font-size: 18px;
    font-weight: bold;

    &:focus {
        outline: none; /* Remove default outline */
    }
`;

const StyledOption = styled.option`
    background-color: black; /* Black background for options */
    color: white; /* White text for options */
    font-size: 18px;
    font-weight: bold;
    pointer-events: none; /* Disable hover effect on options */
    &:hover{
    background-color:black;
    }
`;

// Dropdown component
const Dropdown = () => {
    return (
        <StyledSelect>
            <StyledOption>Company Profile</StyledOption>
            <StyledOption value="investorRelations">Investor Relations</StyledOption>
            <StyledOption value="pressReleases">Press Releases</StyledOption>
            <StyledOption value="leadership">Leadership</StyledOption>
        </StyledSelect>
    );
};

export default Dropdown;
