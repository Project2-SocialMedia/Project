const initialState = {
    isLoggedIn: false,
  };

const authenticationReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case 'AUTH_REGISTER':
        return { isLoggedIn: true };
  
      case 'AUTH_LOGIN':
        return { isLoggedIn: true };

      case 'AUTH_LOGOUT':
        return { isLoggedIn: false };
        
      default:
        return state;
    }
};

  export default authenticationReducer;



export const auth = {
    register: (payload) => ({type: "AUTH_REGISTER", payload}),
    login: (payload) => ({type: "AUTH_LOGIN", payload}),
    logout: () => ({type: "AUTH_LOGOUT"})
}