export default function reducer (state, action) {
	switch(action.type) {
		case 'setUserSignedIn': {
			return {
				...state,
				userSignedIn: action.data
			}
		}
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}
		default:
            return state
	}
}
