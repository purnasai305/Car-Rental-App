// CarStyles.js
import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    margin-top:7px
`;

export const CarImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 300px;
    width: 100%; // Ensure the container takes the full width
`;

// Main image takes up 50% of the width
export const MainImage = styled.img`
    height: 100%;
    width: 50%; // Set to 50% for main image
    object-fit: cover;
    border-radius: 10px;
`;

// Side images container for the smaller images
export const SideImagesContainer = styled.div`
    display: grid; // Use grid layout
    grid-template-columns: repeat(2, 1fr); // 2 columns
    grid-template-rows: repeat(2, 1fr); // 2 rows
    gap: 10px; // Add some gap between the images
    flex: 1; // Take up remaining space
    margin-left: 10px; // Space between main and side images
    overflow: hidden; // Ensure overflow is hidden
`;

// Side image styles
export const SideImage = styled.img`
    height: 100%; // Full height of the container
    width: 100%; // Full width of the grid item
    object-fit: cover; // Cover the area without distortion
    border-radius: 10px; // Add border radius for styling
`;

export const SecondBox = styled.div`
    border-radius: 20px;
    margin-top: 25px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    padding: 15px; // Add some padding for better layout
`;

export const TextContainer = styled.div`
    display: flex;
    margin-left: 15px;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1F1F1F; // Similar to previous style
    font-family: Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

export const Text = styled.span`
    font-size: md;
    color: #A8A8A8;
    margin-left: ${({ marginLeft }) => marginLeft || '0'}; // Flexible margin
`;


export const CommentsContainer = styled.div`
    margin-top: 15px; // Add margin to separate comments from other elements
`;

export const CommentBox = styled.div`
    margin-bottom: 10px; // Space between comments
    border: 1px solid #ccc; // Optional border for separation
    padding: 10px; // Padding for comfort
    border-radius: 5px; // Rounded corners
`;

export const CommentText = styled.p`
    /* Add styles for comment text */
`;

export const CommentsHeading = styled.h3`
    /* Style for comments heading */
`;

export const Container = styled.div`
    /* Container styles */
`;

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
        border-color: #007BFF; /* Highlight border on focus */
        outline: none;
    }
`;
export const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #28a745; /* Green */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #218838; /* Darker green on hover */
    }
`;

export const ExclusiveOffersBox = styled.div`
    background-color: rgb(245, 245, 245);
    height: auto;
`;

export const OfferButton = styled.button`
    height: 61px;
    width: 350px;
    background-color: white;
    display: flex;
    justify-content: space-around;
`;

export const PriceText = styled.p`
    margin-left: 10px;
    font-size: 2xl;
    font-weight: 600;
    color: #1F1F1F;
    font-family: Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif;
`;
