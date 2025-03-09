import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import axios from 'axios';
import {
    MainDiv,
    CarImageContainer,
    MainImage,
    SideImagesContainer,
    SideImage,
    SecondBox,
    Title,
    Text,
    CommentsContainer,
    CommentBox,
    CommentText,
    CommentsHeading,
    Container,
    InputField,
    SubmitButton,
    ExclusiveOffersBox,
} from './OSingleCarCss';
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from 'react-redux';

const OSingleCar = () => {
    const { car_id } = useParams();
    const [data, setData] = useState(null);
    const [comments, setComments] = useState([]);
    const [bookings, setBookings] = useState([]);
    const { user, token } = useSelector((state) => state.auth);

    const getData = async (url) => {
        try {
            let res = await fetch(url,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            let carData = await res.json();
            setData(carData);
            setBookings(carData.bookings || []);
            setComments(carData.car.comment || []);
            console.log("Single car:", carData);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChangeBookingStatus = async (newStatus,bookingid) => {
        console.log("booking Id", bookingid);
        try {
            const response = await axios.put(
                `https://localhost:7190/api/bookings/changebookingstatus?bookingstatus=${newStatus}&bookingid=${bookingid}`,
                {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
            }
            );
            console.log('Booking status updated:', response.data);
            // setBookings((prevBookings) => 
            //     prevBookings.filter(booking => booking.bookings.id !== bookingid)
            // );
            setData(response.data);
            setBookings(response.data.bookings || []);
            
            // setData((prevData) => ({
            //     ...prevData,
            //     bookingStatus: newStatus,
            // }));
        } catch (error) {
            console.error('Error updating booking status:', error);
        }
    };

    // const handleCommentChange = (event) => {
    //     const { name, value } = event.target;
    //     setNewComment((prevComment) => ({
    //         ...prevComment,
    //         [name]: value,
    //     }));
    // };

    useEffect(() => {
        console.log("calling owner api");
        getData(`https://localhost:7190/api/cars/car/owner/${car_id}?ownerId=${user.id}`);
    }, [car_id, user]);

    if (!data || !data.car) {
        return <p>Loading...</p>;
    }

    return (
        <MainDiv style={{ marginTop: '7px' }}>
            <div style={{ width: '63%' }}>
                <CarImageContainer style={{ marginLeft: '10px' }}>
                    {data.car.photos && data.car.photos.length > 0 && (
                        <>
                            <MainImage src={data.car.photos[0]} />
                            <SideImagesContainer>
                                {data.car.photos.slice(1, 5).map((photo, index) => (
                                    <SideImage key={index} src={photo} />
                                ))}
                            </SideImagesContainer>
                        </>
                    )}
                </CarImageContainer>

                <SecondBox style={{ marginLeft: '10px' }}>
                    <Title>{data.car.title}</Title>
                    <div style={{ display: 'flex', marginLeft: '9px' }}>
                        <Text>{data.car.transmission}</Text>
                        <Text style={{ marginLeft: '10px' }}>{data.car.fueltype}</Text>
                        <Text style={{ marginLeft: '10px' }}>{data.car.seat} seats</Text>
                    </div>
                    <div>
                        <div style={{ display: 'flex', margin: 'auto', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ marginLeft: '5px' }}>{data.car.km} kms driven</Text>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '120px' }}>
                                <Text style={{ marginBottom: '3px', paddingBottom: '13px', fontSize: '49px' }}>{data.car.like}</Text>
                                <AiOutlineLike style={{ width: '69px', height: '69px', backgroundColor: 'gold' }} ></AiOutlineLike>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <CommentsHeading>COMMENTS:</CommentsHeading>
                    {comments.length > 0 && (
                        <CommentsContainer>
                            {comments.map((comment, index) => (
                                <CommentBox key={index}>
                                    <CommentText>{comment.commentText}</CommentText>
                                    <Text style={{ fontSize: 'sm', fontStyle: 'italic' }}>- {comment.userName}</Text>
                                </CommentBox>
                            ))}
                        </CommentsContainer>
                    )}
                </SecondBox>
            </div>

            <ExclusiveOffersBox style={{ padding: '10px 23px 16px', display: 'flex' }}>
                <div style={{ marginTop: '20px', justifySelf: 'center' }}>
                    {bookings.length > 0 && bookings.some(booking => booking.bookings.bookingStatus === 1) && (
                        <div style={{ backgroundColor: 'rgb(245, 245, 245)', borderRadius: '10px', padding: '20px', maxWidth: '500px' }}>
                        <div>
                            <h1 style={{ fontSize: '23px', fontWeight: '600', marginBottom: '15px' }}>OWNER PAGE</h1>
                        </div>
                        <hr />
                        <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '10px' }}>User Details</p>
                        <hr />
                        
                        <div style={{
                            maxHeight: '300px', 
                            overflowY: 'auto',
                            border: '1px solid #ccc', 
                            borderRadius: '8px',
                            padding: '10px',
                            backgroundColor: 'white'
                        }}> 
                            {bookings.map((booking) => {
                                if (booking.bookings.bookingStatus === 1) {
                                    return (
                                        <div key={booking.bookings.id} style={{
                                            marginBottom: '10px', 
                                            padding: '10px',
                                            border: '1px solid #e0e0e0', 
                                            borderRadius: '8px',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                                            backgroundColor: '#f9f9f9' 
                                        }}>
                                            <p style={{ margin: '5px 0' }}>Name: {booking.user.firstName} {booking.user.lastName}</p>
                                            <p style={{ margin: '5px 0' }}>Start Date of Booking: {new Date(booking.bookings.startDate).toLocaleString()}</p>
                                            <p style={{ margin: '5px 0' }}>End Date of Booking: {new Date(booking.bookings.endDate).toLocaleString()}</p>
                                            <p style={{ margin: '5px 0' }}>Email: {booking.user.email}</p>
                                            <p style={{ margin: '5px 0' }}>Mobile: {booking.user.mobile}</p>
                                            <p style={{ margin: '5px 0' }}>Address: {booking.user.city}</p>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <button
                                                    style={{
                                                        marginRight: '5px',
                                                        padding: '10px',
                                                        flex: '1',
                                                        border: 'none',
                                                        backgroundColor: '#f00',
                                                        color: 'white',
                                                        borderRadius: '6px',
                                                        fontWeight: '600',
                                                        fontSize: '16px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => handleChangeBookingStatus(3, booking.bookings.id)} 
                                                >
                                                    Reject
                                                </button>
                                                <button
                                                    style={{
                                                        marginLeft: '5px',
                                                        padding: '10px',
                                                        flex: '1',
                                                        border: 'none',
                                                        backgroundColor: '#10a310',
                                                        color: 'white',
                                                        borderRadius: '6px',
                                                        fontWeight: '600',
                                                        fontSize: '16px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => handleChangeBookingStatus(2, booking.bookings.id)} 
                                                >
                                                    Accept
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }
                                return null; 
                            })}
                        </div>
                    </div>
                    
                    )}

                </div>
            </ExclusiveOffersBox>
        </MainDiv>
    );
};

export default OSingleCar;
