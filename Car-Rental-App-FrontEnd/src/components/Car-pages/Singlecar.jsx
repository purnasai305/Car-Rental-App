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
    OfferButton,
    PriceText,
} from './SingleCarCss';
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Loading } from './Loading/Loading';
import useFetchUserDetails from '../../common/useFetchUserDetails';
const Singlecar = () => {
    const { user1, loading, error } = useFetchUserDetails();
    const { car_id } = useParams();
    const [data, setData] = useState({});
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [newComment, setNewComment] = useState({
        userName: '',
        commentText: '',
    });
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
            console.log("Single car:", carData);
        } catch (err) {
            console.log(err);
        }
    };

    const handleLeaseCar = async () => {
        // if (data.bookings === null) {
            if (selectedStartDate === null || selectedEndDate===null) {
                alert("select Date");
                return;
            }
            try {
                const requestBody = {
                    carid: car_id,
                    userid: user.id,
                    StartDate: selectedStartDate,
                    EndDate:selectedEndDate
                };
                console.log("data for leasing car:", requestBody);
                const response = await axios.post('https://localhost:7190/api/bookings/create', requestBody,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                console.log("data after leasing the car", response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error leasing car:', error);
            }
        // }
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        const commentToSubmit = {
            carId: data.id,
            userName: newComment.userName,
            commentText: newComment.commentText,
        };
        try {
            const response = await axios.post(`https://localhost:7190/api/cars/comment/${data.car.id}?userId=${user.id}`, commentToSubmit,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log('Comment submitted:', response.data);
            setData(response.data);
            setNewComment({ userName: '', commentText: '' });

        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleLike = async () => {
        try {
            const response = await fetch(`https://localhost:7190/api/cars/like/${car_id}?userId=${user.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Netwrok response was not ok');
            }
            const result = await response.json();
            setData(result);
            console.log(result);
        }
        catch (error) {
            console.log('Error while liking the car', error);
        }
    };

    useEffect(() => {
        getData(`https://localhost:7190/api/cars/car/${car_id}?userId=${user.id}`);
    }, [car_id, user]);

    if (!data || !data.car) {
        return <Loading></Loading>;
    }

    return (
        <MainDiv>
            <div style={{ width: '63%' }}>
                <CarImageContainer>
                    {data.car && data.car.photos && data.car.photos.length > 0 && (
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

                <SecondBox>
                    <Title>{data.car.title}</Title>
                    <div style={{ display: 'flex', marginLeft: '9px' }}>
                        <Text>{data.car.transmission}</Text>
                        <Text style={{ marginLeft: '10px' }}>{data.car.fueltype}</Text>
                        <Text style={{ marginLeft: '10px' }}>{data.car.seat} seats</Text>
                    </div>
                    <div>
                        <div style={{ display: 'flex', margin: 'auto', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ marginLeft: '5px' }}>{data.car.km} kms driven {data.car.cartype}</Text>
                            <Text style={{}}>Location: {data.car.location}</Text>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '120px' }}>
                                <Text style={{ marginBottom: '3px', paddingBottom: '13px', fontSize: '49px' }}>{data.car.like}</Text>
                                <AiOutlineLike onClick={handleLike}
                                    style={{
                                        width: '69px',
                                        height: '69px',
                                        backgroundColor: data.car.hasLiked ? 'gold' : 'white'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <Container>
                        <Title>Comments</Title>
                        <form onSubmit={handleCommentSubmit}>
                            <InputField
                                placeholder="Your Name"
                                name="userName"
                                onChange={(e) => setNewComment({ ...newComment, [e.target.name]: e.target.value })}
                                value={newComment.userName}
                                required
                            />
                            <InputField
                                placeholder="Your Comment"
                                onChange={(e) => setNewComment({ ...newComment, [e.target.name]: e.target.value })}
                                value={newComment.commentText}
                                name="commentText"
                                required
                            />
                            <SubmitButton style={{ margin: '8px 20px' }} type="submit">Submit Comment</SubmitButton>
                        </form>
                    </Container>

                    <CommentsHeading>COMMENTS:</CommentsHeading>
                    {data.car.comment && data.car.comment.length > 0 && (
                        <CommentsContainer>
                            {data.car.comment.map((comment, index) => (
                                <CommentBox key={index}>
                                    <CommentText>{comment.commentText}</CommentText>
                                    <Text style={{ fontSize: 'sm', fontStyle: 'italic' }}>- {comment.userName}</Text>
                                </CommentBox>
                            ))}
                        </CommentsContainer>
                    )}
                </SecondBox>
            </div>

            <ExclusiveOffersBox>
                <div style={{ padding: '100px 23px 16px' }}>
                    <Text style={{ fontWeight: '600', lineHeight: '24px', fontSize: '18px', padding: '10px' }}>Exclusive Offers</Text>
                    <OfferButton style={{ padding: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '35px' }} src='https://zoomcar-assets.zoomcar.com/images/original/6b2c3b7e2bb90f274ced9c295c2fe4c600d84b55.png?1710941068' alt="Offer" />
                            <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
                                <Text style={{ fontSize: '14px', fontWeight: '600' }}>Explore Offers</Text>
                                <Text style={{ lineHeight: '16px', color: 'rgb(102, 102, 102)', fontWeight: '500', fontSize: '12px' }}>Check Availability Here</Text>
                            </div>
                        </div>
                        <FaAngleRight style={{ marginTop: '10px' }} />
                    </OfferButton>
                </div>
                <hr />
                <div style={{ marginBottom: '7px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                    <div style={{ fontSize: '16px', fontWeight: '500', display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ color: 'black' }}>Trip Protection Package</Text>
                        <Text style={{ color: 'black' }}>(Secure Plus) <span style={{ color: 'rgb(81, 96, 194)' }}>Change</span></Text>
                    </div>
                    <Text style={{ fontSize: '15px', lineHeight: '20px', fontWeight: '600', color: 'black' }}>$139</Text>
                </div>
                <hr />
                <div style={{ marginTop: '30px', height: '200px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '60%', marginLeft: '15px' }}>
                            <PriceText>Price: {`₹ ${data.car.price}`} /hour</PriceText>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px', justifySelf: 'center' }}>
                       <div>
                       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '10px' }}>
                            <p style={{ fontWeight: '600', fontSize: '20px' }}>Select Start Date:</p>
                            <DatePicker selected={selectedStartDate}
                                onChange={date => setSelectedStartDate(date)}
                                dateFormat="yyyy/MM/dd"
                                minDate={new Date()}
                                placeholderText='select Date'
                                style={{ backgroundColor: 'red', }}>
                            </DatePicker>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '10px' }}>
                            <p style={{ fontWeight: '600', fontSize: '20px' }}>Select End Date:</p>
                            <DatePicker selected={selectedEndDate}
                                onChange={date => setSelectedEndDate(date)}
                                dateFormat="yyyy/MM/dd" 
                                minDate={selectedStartDate ? selectedStartDate : new Date()} 
                                placeholderText='select Date'
                                style={{ backgroundColor: 'red', }}> 
                            </DatePicker>
                        </div> 
                       </div>
                       {
                        data.bookings !== null && data.bookings.bookingStatus === 4 && 
                        <div>
                             <p style={{ width: '400px',padding:'10px' }}>car is not available on {data.bookings.startDate} to {data.bookings.endDate}</p>
                        </div>
                       } 
                       {
                        data.bookings !== null && data.bookings.bookingStatus === 1 && 
                        <div>
                             <p style={{ width: '400px',padding:'10px' }}>car Request on {data.bookings.startDate} to {data.bookings.endDate} is <span style={{color:'yellow'}} >Pending</span></p>
                        </div>
                       }  
                       {
                        data.bookings !== null && data.bookings.bookingStatus === 3 && 
                        <div>
                             <p style={{ width: '400px',padding:'10px' }}>car Request on {data.bookings.startDate} to {data.bookings.endDate} is <span style={{color:'rgb(255, 255, 153)'}} >Rejected</span> by owner</p>
                        </div>
                       } 
                       {
                        data.bookings !== null && data.bookings.bookingStatus === 2 && 
                        <div>
                             <p style={{ width: '400px',padding:'10px' }}>car Request on  on {data.bookings.startDate} to {data.bookings.endDate} is <span style={{color:'green'}} >Accepted</span> by Owner</p>
                        </div>
                       } 
                        <button
                            style={{
                                marginLeft: '50px',
                                paddingTop: '5px',
                                height: '58px',
                                width: '80%',
                                border: '2px',
                                backgroundColor: '#10a310',
                                color: 'white',
                                borderRadius: '6px',
                                fontWeight: '600',
                                fontSize: '25px'
                            }} onClick={handleLeaseCar}  >
                            {data.bookings !== null && data.bookings.bookingStatus === 1 && 'Lease Again' ||
                                data.bookings !== null && data.bookings.bookingStatus === 2 && 'Lease Again' ||
                                data.bookings !== null && data.bookings.bookingStatus === 3 && 'Lease Again' ||
                                data.bookings !== null && data.bookings.bookingStatus === 4 && 'Lease Again' ||
                                'Lease Now'}
                            <p style={{ height: '16px', fontWeight: '600' }}></p>
                        </button>
                    </div>
                </div>
            </ExclusiveOffersBox>
        </MainDiv>
    );
};

export default Singlecar;

