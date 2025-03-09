import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Select,
    Container,
  } from "./OSignUpCss"; // Adjust the import path as necessary
  import axios from "axios";
  import { useState } from "react";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import {Stack} from "@chakra-ui/react";
  import { authSignup } from "../../../redux/Auth/Auth.action";
  // import StyledStack from 
  
  function OSignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const toast = useToast();
    const [formData, setFormData] = useState({
      FirstName: "",
      LastName: "",
      Email: "",
      PasswordHash: "",
      Mobile: "",
      Role: "owner",
      City: "",
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      dispatch(authSignup(formData));
      navigate("/login");
    };
  
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}> 
            <FormControl>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                name="FirstName"
                type="text"
                value={formData.FirstName}
                onChange={handleChange}
              required/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                name="LastName"
                type="text"
                value={formData.LastName}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="Email"
                type="email"
                value={formData.Email}
                onChange={handleChange}
                required/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="PasswordHash"
                type="password"
                value={formData.PasswordHash}
                onChange={handleChange}
                required/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="city">City</FormLabel>
              <Input
                id="city"
                name="City"
                type="text"
                value={formData.City}
                onChange={handleChange}
                required/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="mobile">Mobile</FormLabel>
              <Input
                id="mobile"
                name="Mobile"
                type="number" // Changed to lowercase 'number' to follow HTML5 standards
                value={formData.Mobile}
                onChange={handleChange}
                required/>
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Container>
    );
  }
  
  export default OSignUp;
  