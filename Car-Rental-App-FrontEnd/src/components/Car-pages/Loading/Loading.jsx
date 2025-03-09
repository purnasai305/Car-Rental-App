import React from 'react';
import { LoadingContainer, LoadingBox, LoadingHeading, LoadingImage } from './LoadingCss';

export const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingBox>
                <LoadingHeading>Getting Cars For You</LoadingHeading>
                <LoadingImage src='https://cdn.pixabay.com/animation/2023/01/24/23/10/23-10-50-478_512.gif' />
            </LoadingBox>
        </LoadingContainer>
    );
};
