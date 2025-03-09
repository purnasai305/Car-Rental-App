import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react'; // Keeping useToast from Chakra UI
import { authlogin } from '../../../redux/Auth/Auth.action';
import { isMsgFalse } from '../../../redux/Auth/Auth.actionType';
import {
  Container,
  Form,
  Input,
  Button,
  Text,
  Image
} from './LoginCss';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const toast = useToast();
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
  });

  const { isSuccessMsg, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccessMsg) {
      // toast({
      //   title: 'Login Successful',
      //   position: 'top',
      //   status: 'success',
      //   isClosable: true,
      // });
      if (user.role === "owner") {
        console.log("navigating to owner page");
        navigate(`/owner/${user.role}`);
      }
      else {
        navigate('/');
      }
    }
    // dispatch({ type: isMsgFalse });
  }, [isSuccessMsg]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user before login: ",user);
    dispatch(authlogin(formData));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          required/>
        <Input
          type="password"
          name="Password"
          placeholder="Password"
          value={formData.Password}
          onChange={handleChange}
          required/>
        <Button type="submit">Login</Button>
        <Text style={{
          fontWeight: 'bold',
          color: '#10A310',
          cursor: 'pointer',
        }} onClick={() => navigate('/signup')}>Not a User? Sign Up</Text>
        <Image src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" alt="Login Graphic" />
      </Form>
    </Container>
  );
}

export default Login;  