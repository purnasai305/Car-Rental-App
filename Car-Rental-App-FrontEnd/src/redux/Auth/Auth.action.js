import { auth_login, auth_logout, auth_success, auth_error, is_loading } from "./Auth.actionType";
import { Navigate } from "react-router-dom";


export const authlogin = (loginData) => async (dispatch,getState) => {
    try {
        let res = await fetch(`https://localhost:7190/api/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        let data = await res.json();
        console.log("data", data);
        console.log("Local Storage:",JSON.stringify(data.token));
        sessionStorage.setItem("authToken", JSON.stringify(data));
        sessionStorage.setItem("userId",data.user.id);
        dispatch({ 
            type: auth_login, 
            payload: { 
                token: data.token, 
                msg: data.msg, 
                name: data.name, 
                isAdmin: data.isAdmin, 
                isSeller: data.isSeller,
                user: {
                  id: data.user.id,
                  firstName: data.user.firstName,
                  lastName: data.user.lastName,
                  email: data.user.email,
                  mobile: data.user.mobile,
                  role: data.user.role,
                  city: data.user.city,
              } 
            } 
        });
        const currentState = getState();  
        console.log("Updated Redux State:", currentState.auth); 
        // Navigate('/');
    } catch (error) {
        console.log("Error\n",error.message);
    }
};

export const authSignup = (signupData) => async (dispatch) => {
    try {
        console.log("signup in Auth.action",signupData);
        let res = await fetch(`https://localhost:7190/api/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupData)
        });
        let data = await res.json();
        console.log("response msgh",data);
        // Navigate('/login');
    } catch (error) {
        console.log("Error\n",error);
    }
};
