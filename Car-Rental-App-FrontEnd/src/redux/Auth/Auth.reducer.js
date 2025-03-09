import {
  auth_login,
  auth_logout,
  isMsgFalse,
  auth_success,
  auth_error,
  is_loading,
} from "./Auth.actionType";
const token = JSON.parse(localStorage.getItem("authToken")) || false;
console.log(token);
let initialState = {
  // isAuth: token.token || false,
  // isAdmin: token.isAdmin || false,
  // isSeller: token.isSeller || false,
  // isUser: true,
  token: token.token || false,
  // error: false,
  // isErrorMsg: null,
  // isLoadingLoder: false,
  isSuccessMsg: null,
  // name: token.name || null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case auth_login: {
      return {
        ...state,
        // isAuth: true,
        token: payload.token,
        // error: false,
        // isLoadingLoder: false,
        isSuccessMsg: payload.user.id,
        // name: payload.name,
        // isAdmin: payload.isAdmin,
        // isSeller: payload.isSeller,
        user: {
          id: payload.user.id,
          firstName: payload.user.firstName,
          lastName: payload.user.lastName,
          email: payload.user.email,
          mobile: payload.user.mobile,
          role: payload.user.role,
          city: payload.user.city,
      },
      };
    }
    
    // case isMsgFalse: {
    //   return {
    //     ...state,
    //     isSuccessMsg: null,
    //     error: false,
    //   };
    // }
    // case auth_error: {
    //   return {
    //     ...state,
    //     isAuth: false,
    //     token: payload,
    //     isErrorMsg: payload.msg,
    //     error: true,
    //     isLoadingLoder: false,
    //   };
    // }
    // case is_loading: {
    //   return {
    //     ...state,
    //     isLoadingLoder: true,
    //   };
    // }
    case auth_logout: {
      localStorage.clear("authToken");
      console.log("Auth token was deleted"); 
      return {
        ...state,
        isAuth: false,
        token: false,
        isAdmin: false,
        isSeller: false,
        isLoadingLoder: false,
        user: undefined, 
        isSuccessMsg:false
      };
    }
    // case auth_success: {
    //   return {
    //     ...state,
    //     isLoadingLoder: false,
    //     isSuccessMsg: payload.msg,
    //   };
    // }  
    default:
      return state;
  }
};
