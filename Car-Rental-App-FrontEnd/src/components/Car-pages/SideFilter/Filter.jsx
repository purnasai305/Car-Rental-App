import React, { useState, useEffect } from 'react';
import {
    FilterWrapper, FilterHeader, FilterHeaderText, FilterSection, SectionTitle,
    CheckboxWrapper,
    CheckboxGroup, CheckboxLabel, CheckboxInput, TextRow, FilterFooter, NumberInput, InputWrapper
} from './FilterCss';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialPrice = searchParams.getAll("price")[0] || "";
    const initialFuel = searchParams.getAll("fueltype") || "";
    const initialCarType = searchParams.getAll("cartype") || "";
    const initialCarSeat = searchParams.getAll("seat")[0] || "";
    const initialTransmission = searchParams.getAll("transmission") || "";
    const initialRating = searchParams.getAll("ratings")[0] || "";
    const initialminValue=searchParams.get("minValue") || "";
    const initialmaxValue=searchParams.get("maxValue") || "";


    const [price, setPrice] = useState(initialPrice);
    const [fueltype, setFuel] = useState(initialFuel);
    const [cartype, setCarType] = useState(initialCarType);
    const [seat, setSeats] = useState(initialCarSeat);
    const [transmission, setTransmission] = useState(initialTransmission);
    const [ratings, setRatings] = useState(initialRating);
    const [minValue, setMinValue] = useState(initialminValue);
    const [maxValue, setMaxValue] = useState(initialmaxValue);

    useEffect(() => {
        let params = {};
        if (price) params.price = price;
        if (fueltype.length > 0) params.fueltype = fueltype.join(',');
        if (cartype.length > 0) params.cartype = cartype.join(',');
        if (seat.length > 0) params.seat = seat.join(',');
        if (transmission.length > 0) params.transmission = transmission.join(',');
        if (ratings) params.ratings = ratings;
        if(minValue>=1) params.minValue = minValue; 
        if(maxValue>=1) params.maxValue = maxValue; 
        setSearchParams(params);
    }, [price, fueltype, cartype, seat, ratings, transmission,minValue,maxValue]);


    const handleTransmissionChange = (e) => {
        console.log("Current Transmission State:", transmission);
        const { value, checked } = e.target;
        if (checked) {
            console.log(" checked Transmission", checked, value);
            setTransmission((prev) => [...prev, value]);
        }
        else {
            console.log(" Unchecked Transmission", checked, value);
            setTransmission((prev) => prev.filter((item) => item !== value));
        }
    };

    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        setMinValue(value);
        console.log("Minimum value", value);
    };

    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        setMaxValue(value);
        console.log("Maximum value", value);
    };

    const handleCarByFuelType = (e) => {
        console.log("current fuel filter", fueltype);
        const { value, checked } = e.target;
        if (checked) {
            console.log("checked fuel filters", checked, value);
            setFuel((prev) => [...prev, value]);
        }
        else {
            console.log("Unchecked fuel filters", checked, value);
            setFuel((prev) => prev.filter((item) => item !== value));
        }
    }

    const handleCarType = (e) => {
        console.log("current cat type", cartype);
        const { value, checked } = e.target;
        if (checked) {
            console.log("checked ", checked, value);
            setCarType((prev) => [...prev, value]);
        }
        else {
            console.log("unchecked car types", checked, value);
            setCarType((prev) => prev.filter((item) => item !== value));
        }
    }
    
    return (
        <FilterWrapper>
            <FilterHeader>
                <FilterHeaderText>Find Your Perfect Ride!</FilterHeaderText>
            </FilterHeader>
            <CheckboxWrapper>

                <SectionTitle style={{ fontSize: '40px' }}>Filters</SectionTitle>
                <hr />
                <hr />
                <hr />
                <FilterSection>
                    <SectionTitle>Enter Range For Price</SectionTitle>
                    <InputWrapper>
                        <NumberInput
                            type="number"
                            min="100"
                            max="2000"
                            placeholder='min'
                            value={minValue}
                            onChange={handleMinChange}
                        />
                        <span>to</span>
                        <NumberInput
                            type="number"
                            max="2000" 
                            value={maxValue}
                            placeholder='max'
                            onChange={handleMaxChange}
                        />
                    </InputWrapper>

                </FilterSection>
                <SectionTitle>Car Type</SectionTitle>
                <CheckboxGroup>
                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="SUV"
                            checked={cartype.includes("SUV")}
                            onChange={handleCarType}
                        /> SUV
                    </CheckboxLabel>

                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="Sedan"
                            checked={cartype.includes("Sedan")}
                            onChange={handleCarType}
                        /> Sedan
                    </CheckboxLabel>

                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="HatchLab"
                            checked={cartype.includes("HatchLab")}
                            onChange={handleCarType} /> HatchLab
                    </CheckboxLabel>

                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="Luxury"
                            checked={cartype.includes("Luxury")}
                            onChange={handleCarType} /> Luxury
                    </CheckboxLabel>
                </CheckboxGroup>

                <CheckboxGroup>
                    <SectionTitle>Filter By Transmission</SectionTitle>
                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="Manual"
                            checked={transmission.includes("Manual")}
                            onChange={handleTransmissionChange}
                        /> Manual
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="Automatic"
                            checked={transmission.includes("Automatic")}
                            onChange={handleTransmissionChange}
                        /> Automatic
                    </CheckboxLabel>
                </CheckboxGroup>

                <CheckboxGroup>
                    <SectionTitle>Filter Car by Fuel Type</SectionTitle>
                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="Diesel"
                            checked={fueltype.includes("Diesel")}
                            onChange={handleCarByFuelType}
                        /> Diesel
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="Petrol"
                            checked={fueltype.includes("Petrol")}
                            onChange={handleCarByFuelType}
                        /> Petrol
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <CheckboxInput type="checkbox"
                            value="Electric"
                            checked={fueltype.includes("Electric")}
                            onChange={handleCarByFuelType}
                        /> Electric
                    </CheckboxLabel>
                </CheckboxGroup>
            </CheckboxWrapper>
        </FilterWrapper>
    );
};

export default Filter;
