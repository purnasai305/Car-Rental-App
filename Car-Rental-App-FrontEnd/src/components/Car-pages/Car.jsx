import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useSearchParams, Link, useNavigate, useParams } from 'react-router-dom'; // Ensure Link is imported from react-router-dom
import { Loading } from './Loading/Loading';
import { useSelector } from 'react-redux';
import Filter from './SideFilter/Filter';
import { CiStar } from "react-icons/ci";
import { MainDiv, FilterContainer, CarsContainer, SearchBar, CarBox, CarCard, ImageBox, CarDetails, RatingBox, SortContainer, SortSelect } from './CarCSS'; // Import styled components
import Error from './Error/Error';
const Car = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const { location } = useParams();
    useEffect(() => {
        const fetchCars = async () => {
            try {
                console.log("get request sent");
                const response = await axios.get('https://localhost:7190/api/cars', {
                    params: {
                        fueltype: searchParams.get("fueltype"),
                        cartype: searchParams.get("cartype"),
                        seat: searchParams.get("seat"),
                        transmission: searchParams.get("transmission"),
                        rating: searchParams.get("ratings"),
                        price: searchParams.get('price'),
                        sortby: searchParams.get('sortby'),
                        minValue: searchParams.get('minValue'),
                        maxValue: searchParams.get('maxValue'),
                        location: location
                    }
                });

                console.log("Total cars details:", response.data);
                // console.log("Images data",response.data[0].car.photos[0]);
                setCars(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsError(true);
                setIsLoading(false);
            }
        };
        fetchCars();
    }, [searchParams]);

    const handleSortChange = (e) => {
        console.log("Drop down value", e.target.value);
        const selectedSort = e.target.value;
        const currentParams = Object.fromEntries(searchParams);
        setSearchParams({ ...currentParams, sortby: selectedSort });
    };

    const handleImageClick = (carId) => {
        if (user) {
            navigate(`/car/singlecar/${carId}`);
        } else {
            alert("Please log in to view car details.");
        }
    };

    if (isError) {
        return <p>Error!!!</p>;
    } else if (isLoading) {
        return <Loading></Loading>;
    } else {
        return (
            <MainDiv>
                <FilterContainer>
                    <Filter />
                </FilterContainer>
                <CarsContainer>
                    <SearchBar>
                        <div className='searchBar'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ marginTop: '12px', fontSize: '20px', fontWeight: 600, color: 'rgb(102, 102, 102)' }}>
                                    Showing {cars.length} cars at  {location}  Location
                                </div>
                                <SortContainer>
                                    <span style={{ fontWeight: 600, fontSize: '17px' }}>Sort By </span>
                                    <SortSelect onChange={handleSortChange}>
                                        <option value='priceAsc'>Price-Low to High</option>
                                        <option value='priceDesc'>Price-High to Low</option>
                                        <option value='rating'>Ratings-High-to-Low</option>
                                        <option value='distanceNearestFirst'>Distance-Nearest First</option>
                                    </SortSelect>
                                </SortContainer>
                            </div>
                        </div>
                    </SearchBar>
                    <CarBox>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                            {cars.length > 0 && cars.map((item) => (

                                <CarCard key={item.car.id}>
                                    <div onClick={() => handleImageClick(item.car.id)}
                                        style={{ cursor: 'pointer' }}>
                                        <ImageBox>
                                            {item.car.photos && item.car.photos.length > 0 && (
                                                <img src={item.car.photos[0]} alt='car image' style={{ width: '100%', height: '100%', borderRadius: '25px 25px 0 0' }} />
                                            )}
                                        </ImageBox>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                            <RatingBox>
                                                <CiStar size={22} color="white" />
                                                <span style={{ color: 'white', fontWeight: 600, marginLeft: '10px', fontSize: '14px' }}>{item.car.like}</span>
                                            </RatingBox>
                                        </div>
                                        <CarDetails>
                                            <div style={{ margin: '10px', fontSize: '2xl', fontWeight: 600, color: '#1F1F1F' }}>{item.car.title}</div>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', marginLeft: '10px' }}>
                                                    <span style={{ color: '#A8A8A8' }}>{item.car.transmission}</span>
                                                    <span style={{ color: '#A8A8A8', marginLeft: '10px' }}>{item.car.fueltype}</span>
                                                    <span style={{ color: '#A8A8A8', marginLeft: '10px' }}>{item.car.seat} Seats</span>
                                                </div>
                                                <span style={{ color: '#A8A8A8', fontWeight: 600, marginRight: '20px', marginTop: '0px' }}>₹{item.car.price}/ Hour</span>
                                            </div>
                                            <span style={{ color: '#A8A8A8', marginLeft: '10px' }}> Location: {item.car.location}</span>
                                        </CarDetails>
                                    </div>
                                </CarCard>
                            ))}
                        </div>
                    </CarBox>
                </CarsContainer>
            </MainDiv>
        );
    }
};

export default Car;
