import React, { useEffect, useState } from 'react';
import {
    Container,
    BannerContainer,
    BannerImage,
    CenteredBox,
    TabsContainer,
    Tab,    
    LocationDropDown,
    Button,
    Section,
    SectionText,
    Heading,
    SubHeading, OuterSection, SectionHeading,LocationOption
} from './HomePageCss';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../Car-pages/Loading/Loading';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Error from '../Car-pages/Error/Error';
const HomePage = () => {    
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [locations,setLocations]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [selectedLocation,setSelectedLocation]=useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleGetCarClick=()=>{
        const locationToSend = selectedLocation ? selectedLocation : 'All';
        if( user!==undefined && user.role==="owner"){
            navigate(`/owner/${user.role}`);
        }
        else{
            console.log("seletecd location in hompage",selectedLocation);
            navigate(`/car/${locationToSend}`);
        }
    }

    useEffect(()=>{
        const fetchLocations=async ()=>{
            try{
                console.log("get requests for locations is sent");
                const response=await axios.get("https://localhost:7190/api/cars/locations");
                console.log("Loaction",response.data);
                setLocations(response.data);
                setIsLoading(false);
            }
            catch(error){
                console.log(error);
                setIsError(true);
            }
        };
        fetchLocations();
    },[])

    useEffect(()=>{
        if(selectedLocation){
            setSearchParams({ location: selectedLocation });
        }
    },[selectedLocation]);

    const handleLocationChange=(event)=>{
        console.log("selected location",event.target.value);
        setSelectedLocation(event.target.value);
    }

    if(isError){
        return  <p>Error</p>
    }
    else if(isLoading){
        return <Loading/>
    }
    else{
    return (
        <Container>
            <BannerContainer>
                <BannerImage src={"https://www.zoomcar.com/img/web_banner.jpg"} alt="Banner" />
                <CenteredBox>
                    <Heading>Self-Drive Car Rentals in Chennai</Heading>
                    <SubHeading>Book your drive now!</SubHeading>
                </CenteredBox>
                <TabsContainer>
                    <LocationDropDown onChange={handleLocationChange}>
                        <option >Pick up Location</option>
                        {
                            locations.map((location,index)=>(
                                <LocationOption key={index} value={location}>{location}</LocationOption>
                            ))
                        }
                    </LocationDropDown>
                        <Button onClick={handleGetCarClick}>Get Car</Button>
                </TabsContainer>
            </BannerContainer>

            <OuterSection>
                <Section>
                    <Tab>
                        <Heading>ABOUT US</Heading>
                    </Tab>
                    <Tab>
                        <Heading>BLOGS</Heading>
                    </Tab>
                    <Tab>
                        <Heading>CAREERS</Heading>
                    </Tab>
                    <Tab>
                        <Heading>HELP & SUPPORT</Heading>
                    </Tab>
                </Section>
                <SectionText>
                    Zoomcar is the leading marketplace for car sharing in emerging markets,with over 20,000 cars on its technology-driven platform across India, Indonesia, and Egypt. Zoomcar empowers host entrepreneurs to safely and easily share their cars to earn additional passive income. Guests in the Zoomcar community enjoy a diverse, affordable selection of cars to unlock memorable driving experiences with friends and family. Founded in 2013 and headquartered in Bengaluru, India, Zoomcar employs over 250 people and operates in over 45 cities across India, Indonesia, and Egypt. Uri Levine, the co-founder of mobility unicorns Waze and Moovit, currently serves as Zoomcar's Chairman of the Board.
                </SectionText>
                <SectionText style={{ marginTop: '20px' }}>
                    Chennai! The city of filter coffee, Marina Beach strolls, and a vibrant cultural tapestry. But navigating its bustling streets and hidden gems can be tricky, especially when you're relying on cabs or public transport. That's where self driven cars in Chennai act as a saviour!</SectionText>
                <div>
                    <SectionHeading>Benefits Of Car Rentals In Chennai</SectionHeading>
                    <SectionText>Experience freedom in Chennai with Zoomcar's self drive car rental. Explore the city at your pace, enjoy comfort without the hassle, and create unforgettable memories. With affordable rates and flexible packages, and unlimited kms, every journey becomes a personalized adventure.</SectionText>
                </div>
                <div>
                    <SectionHeading>Why choose Zoomcar, a self drive car in Chennai?
                    </SectionHeading>
                    <SectionText>Explore Chennai in style with Zoomcar's diverse self drive car fleet, ranging from lively hatchbacks to spacious SUVs and luxurious sedans. Enjoy the freedom of unlimited kilometers on select cars, allowing you to venture far and wide without constraints. Conveniently pick up your chosen car from various locations, including the airport, and drop it off anywhere within the city limits. Booking is a breeze through our user-friendly app, ensuring a hassle-free experience. Plus, with 24/7 support, our dedicated team is just a call away to assist you throughout your journey.

                    </SectionText>
                </div>
                <div>
                    <SectionHeading>Places to Go in Chennai
                    </SectionHeading>
                    <SectionText>Embark on a journey through the diverse attractions of Chennai, experiencing the city's unique blend of culture and history. Begin with a leisurely walk along Marina Beach, India's second-longest beach, and savor the delights of street food as you soak in the sunset. Immerse yourself in history at Fort St. George, a former British fort transformed into a captivating museum. Explore the ancient Kapaleeshwarar Temple, where intricate Dravidian architecture and vibrant rituals await. Discover the natural wonders of Guindy National Park, a lush urban oasis teeming with spotted deer, blackbucks, and exotic birds. Wander through the narrow lanes of Mylapore, sipping on filter coffee in traditional cafes and exploring the vibrant neighborhood surrounding Kapaleeshwarar Temple. What better way to experience the vibrant hues of this amazing city than in a Zoomcar - the best rental car in Chennai?

                    </SectionText>
                </div>
                <div>
                    <SectionHeading>Places to Travel near Chennai
                    </SectionHeading>
                    <SectionText>Zoomcar's diverse fleet caters to every need and budget. Whether you're a solo traveler seeking a compact car, a family on vacation needing a spacious 7 seater car rental in Chennai, or a group of friends looking for a luxurious sedan, we have the wheels to make your on-road adventure unforgettable. You can choose from flexible daily and multi-day packages to make your trip a memorable one.

                    </SectionText>
                </div>
                <div>
                    <SectionHeading>Who can Rent a Car in Chennai?
                    </SectionHeading>
                    <SectionText>Whether planning a weekend getaway or a multi-day odyssey, hiring a rental car in Chennai is one of the best ways to explore this wonderful city. Chennai is home to a host of service providers who offer car rental for one day in Chennai. If you are looking for one of the best car rental in Chennai, which provides flexible options to suit your timeline and budget, then opt for Zoomcar! Be it outstation car rentals or in-city drives, we offer a host of vehicles suitable for all your travel needs. No time to pick up the car from the predefined location? No problem! Zoomcar offers a convenient home-delivery option, where you can get your rental car delivered to your doorstep.

                    </SectionText>
                </div>
                <div>
                    <SectionHeading>Car Rental At Chennai Airport With Zoomcar
                    </SectionHeading>
                    <SectionText>Skip the taxi queues and head straight to your Chennai adventure by hiring a self drive car from near the airport! Zoomcar offers conveniently located airport pick-up and drop-off, making your arrival and departure a breeze. Rent a car in Chennai today, experience the freedom of self-driven cars, and explore the city at your own pace!

                    </SectionText>
                </div>
                <div >
                    <SectionHeading >Want A Specific Car? We've Got It All:
                    </SectionHeading>
                    <SectionText>Rent Tata Nexon | Rent Honda Jazz | Rent Hyundai Creta | Rent Maruti Brezza | Rent Mahindra | Rent XUV500 | Rent Hyundai Verna | Rent Maruti Swift | Rent Toyota Innova | Rent Reanult Kwid | Rent Maruti Baleno | Rent Mahindra TUV300| Rent Maruti Swift | Rent Hyundai i20 | Rent Maruti Ertiga | Rent Volkswagen Polo | Rent Hyundai Venue | Rent Hyundai Eon | Rent Maruti S-Cross | Rent Maruti | Rent Dzire | Rent Honda Amaze | Rent Hyundai Verna | Rent Maruti Ciaz | Rent Hyundai Creta | Rent Renault Triber | Rent Maruti S-Cross | Rent Toyota Innova | Rent Mahindra TUV300 | Rent Tata Tiago | Rent Maruti Wagon R | Rent Datson Redi-Go | Rent Maruti Alto | Rent Hyundai Grand i10 | Rent Hyundai Xcent | Rent Maruti S-Presso | Rent Hyundai Santro | Rent Hyundai Verna | Rent Maruti Ignis | Rent Nissan Magnite | Rent Toyota Glanza | Rent Honda City | Rent Maruti Dzire | Rent Datson GO T | Rent Nissan Sunny | Rent Renault Kiger | Rent Hyundai Aura | Rent Renault Duster | Rent Mahindra Bolero | Rent Tata Altroz | Rent Ford EcoSport
                    </SectionText>
                    <SectionText style={{paddingBottom:'30px'}}>If you're looking for cars to rent near you, Zoomcar is your perfect solution! Rent cars in 3 easy steps: Pick your date & time of travel Select the vehicle of your choice from our wide range of cars Book & zoom away
                    </SectionText>
                </div>
            </OuterSection>
        </Container>
    );
};
}

export default HomePage;
