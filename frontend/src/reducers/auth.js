const initialState = {
    userId: false,
};

const authenticationReducer = (state = initialState, {type, payload}) => {
    switch (type) {
		case 'AUTH':
			return { 
				userId: payload 
			}
  
	default:
        return state;
    }
}
export default authenticationReducer;



export const authentication = {
	saveAuth: (payload) => ({type: "AUTH", payload})
}