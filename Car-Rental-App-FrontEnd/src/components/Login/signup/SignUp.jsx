import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Select,
  Container,
  StyledStack
} from "./SignUpCss"; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast ,Stack} from "@chakra-ui/react";
import { authSignup } from "../../../redux/Auth/Auth.action";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PasswordHash: "",
    Mobile: "",
    Role: "lessee",
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
        <StyledStack> 
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
          <FormControl>
            <FormLabel htmlFor="role">Role</FormLabel>
            <Select
              id="role"
              name="Role"
              placeholder="Select role"
              value={formData.Role}
              onChange={handleChange}
            >
              <option value="lessee">Lessee</option>
              <option value="owner">Owner</option>
            </Select>
          </FormControl>
          <Button style={{
          fontWeight: 'bold',
          cursor: 'pointer',
        }} type="submit">Submit</Button>
        </StyledStack>
      </form>
    </Container>
  );
}

export default SignUp;
