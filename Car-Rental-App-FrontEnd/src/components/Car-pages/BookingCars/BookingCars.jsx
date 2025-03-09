import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useSearchParams, Link, useNavigate, useParams } from 'react-router-dom'; // Ensure Link is imported from react-router-dom
import { Loading } from '../Loading/Loading';
import { useSelector } from 'react-redux';
import Filter from '../SideFilter/Filter';
import { CiStar } from "react-icons/ci";
import { MainDiv, FilterContainer, CarsContainer, SearchBar, CarBox, CarCard, ImageBox, CarDetails, RatingBox, SortContainer, SortSelect } from './BookingCarsCss';


const BookingsCars = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const { location } = useParams();
    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                console.log("get request sent");
                const response = await axios.get(`https://localhost:7190/api/bookings/${user.id}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
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


    const handleImageClick = (carId) => {
        if (user) {
            navigate(`/car/singlecar/${carId}`);
        } else {
            alert("Please log in to view car details.");
        }
    };

    if (isError) {
        return <h1>...Error</h1>;
    } else if (isLoading) {
        return <Loading />;
    } else {
        return (
            <MainDiv>
                {/* <FilterContainer>
                    <p>BookingsPage</p>
                    <Filter />
                </FilterContainer> */}
                <CarsContainer>
                    <SearchBar>
                        <div className='searchBar'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ marginTop: '12px', fontSize: '20px', fontWeight: 600, color: 'rgb(102, 102, 102)' }}>
                                    Showing {cars.length} cars at  {location}  Location
                                </div>
                                {/* <SortContainer>
                                    <span style={{ fontWeight: 600, fontSize: '17px' }}>Sort By </span>
                                    <SortSelect onChange={handleSortChange}>
                                        <option value='priceAsc'>Price-Low to High</option>
                                        <option value='priceDesc'>Price-High to Low</option>
                                        <option value='rating'>Ratings-High-to-Low</option>
                                        <option value='distanceNearestFirst'>Distance-Nearest First</option>
                                    </SortSelect>
                                </SortContainer> */}
                            </div>
                        </div>
                    </SearchBar>
                    <CarBox>
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
                                        </CarDetails>   
                                        <div style={{ textAlign: 'center', margin: '10px' }}>
                                            <button style={{ padding: '10px 20px', backgroundColor: 'rgb(12, 89, 6)',fontWeight:'600', color: 'white', borderRadius: '5px', cursor: 'pointer', border: 'none' }}>
                                                {(() => {
                                                    switch (item.bookings.bookingStatus) {
                                                        case 1:
                                                            return 'Pending';
                                                        case 2:
                                                            return 'Accepted';
                                                        case 3:
                                                            return 'Rejected';
                                                        case 4:
                                                            return 'Not Available';
                                                        default:
                                                            return 'Unknown Status'; // Fallback in case of an unexpected value
                                                    }
                                                })()}
                                            </button>
                                        </div>
                                       {
                                        item.bookings  && <p style={{marginLeft:'30px'}}>StartDate {item.bookings.startDate}</p>
                                       }
                                    </div>
                                </CarCard>
                            ))}
                    </CarBox>
                </CarsContainer>
            </MainDiv>
        );
    }
};

export default BookingsCars;
