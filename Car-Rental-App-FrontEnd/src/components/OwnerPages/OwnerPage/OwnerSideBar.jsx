import React, { useState } from 'react';
import {
    FilterWrapper, FilterHeader, FilterHeaderText, CheckboxWrapper,
    SectionTitle, CheckboxLabel, CheckboxInput, CreateCarButton
} from './OwnerSideBarCss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import { useSelector } from 'react-redux';

const OwnerSideBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [bookingStatus, setBookingStatus] = useState('');

    const handleStatusChange = (e) => {
        setBookingStatus(e.target.value);
        setSearchParams({ status: e.target.value });
    };

    return (
        <FilterWrapper>
            <FilterHeader>
                <FilterHeaderText>Welcome {user.firstName}!</FilterHeaderText>
            </FilterHeader>

            <CheckboxWrapper>
                <SectionTitle>Car Details</SectionTitle>
                <CreateCarButton style={{ gap: '15px' }} onClick={() => navigate("/createCar")}>
                    <FaRegPlusSquare />
                    Add Car
                </CreateCarButton>
            </CheckboxWrapper>

            {/* Booking Status Filter */}
            <CheckboxWrapper>
                <SectionTitle>Booking Status</SectionTitle>
                <CheckboxLabel>
                    <CheckboxInput
                        type="radio"
                        value=""
                        checked={bookingStatus === ''}
                        onChange={handleStatusChange}
                    />
                    All
                </CheckboxLabel>
                <CheckboxLabel>
                    <CheckboxInput
                        type="radio"
                        value="Pending"
                        checked={bookingStatus === 'Pending'}
                        onChange={handleStatusChange}
                    />
                    Pending
                </CheckboxLabel>
                <CheckboxLabel>
                    <CheckboxInput
                        type="radio"
                        value="Accepted"
                        checked={bookingStatus === 'Accepted'}
                        onChange={handleStatusChange}
                    />
                    Accepted
                </CheckboxLabel>
                <CheckboxLabel>
                    <CheckboxInput
                        type="radio"
                        value="Rejected"
                        checked={bookingStatus === 'Rejected'}
                        onChange={handleStatusChange}
                    />
                    Rejected
                </CheckboxLabel>
            </CheckboxWrapper>
        </FilterWrapper>
    );
};

export default OwnerSideBar;
