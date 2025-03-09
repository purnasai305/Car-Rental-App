// src/hooks/useFetchUserDetails.js
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { auth_login } from '../redux/Auth/Auth.actionType';

const useFetchUserDetails = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = JSON.parse(sessionStorage.getItem("authToken"));
      const userId = sessionStorage.getItem("userId");

      if (token && userId) {
        try {
          const response = await axios.get(`https://localhost:7190/api/user/${userId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          const data = response.data;

          setUser(data);
          dispatch({
            type: auth_login,
            payload: {
              token:data.token,
              user: {
                id: data.user.id,
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                email: data.user.email,
                mobile: data.user.mobile,
                role: data.user.role,
                city: data.user.city,
              },
            },
          });
        } catch (error) {
          setError(error);
          console.error('Error fetching user details:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [dispatch]);

  return { user, loading, error };
};

export default useFetchUserDetails;
