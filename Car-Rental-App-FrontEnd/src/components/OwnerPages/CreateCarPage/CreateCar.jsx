import React, { useState } from 'react';
import {
    FormContainer,
    FormTitle,
    InputField,
    SelectField,
    SubmitButton
} from './CreateCarcss';
import axios from 'axios';
import { useSelector } from 'react-redux';
const CarLeaseForm = () => {
  const { token, user } = useSelector((state) => state.auth);

    const [carDetails, setCarDetails] = useState({
        title: '',
        price: '',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        seat: '',
        km: '',
        carType: 'Luxury',
        location: '',
        availability: true,
        photos: '',
        ownerId:user.id
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarDetails({
            ...carDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(carDetails);
        try {
            const response = await axios.post('https://localhost:7190/api/cars', {
                ...carDetails,
                availability: true, 
                photos: carDetails.photos.split(',').map(photo => photo.trim()) 
            }, {headers:{
                'Authorization':`Bearer ${token}`
            }});
            console.log('Car details submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting car details:', error);
        }
    };

    return (
        <FormContainer>
            <FormTitle>Lease a Car</FormTitle>
            <form onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    name="title"
                    placeholder="Car Title"
                    value={carDetails.title}
                    onChange={handleChange}
                    required
                />
                <InputField
                    type="number"
                    name="price"
                    placeholder="Price per Day"
                    value={carDetails.price}
                    onChange={handleChange}
                    required
                />
                <SelectField name="transmission" value={carDetails.transmission} onChange={handleChange}>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                </SelectField>
                <SelectField name="fuelType" value={carDetails.fuelType} onChange={handleChange}>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                </SelectField>
                <InputField
                    type="number"
                    name="seat"
                    placeholder="Number of Seats"
                    value={carDetails.seat}
                    onChange={handleChange}
                    required
                />
                <InputField
                    type="number"
                    name="km"
                    placeholder="Kilometers Driven"
                    value={carDetails.km}
                    onChange={handleChange}
                    required
                />
                <SelectField name="carType" value={carDetails.carType} onChange={handleChange}>
                    <option value="Luxury">Luxury</option>
                    <option value="Economy">Economy</option>
                    <option value="SUV">SUV</option>
                </SelectField>
                <InputField
                    type="text"
                    name="location"
                    placeholder="Location with small cases"
                    value={carDetails.location}
                    onChange={handleChange}
                    required
                />
                <InputField
                    type="text"
                    name="photos"
                    placeholder="Image URLs (comma separated)"
                    value={carDetails.photos}
                    onChange={handleChange}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </form>
        </FormContainer>
    );
};

export default CarLeaseForm;
