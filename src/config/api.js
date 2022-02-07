import axios from 'axios';

const signIn = async ({email, password}) => {
	try {
		const { status, data } = await axios.post("api/auth/sign_in", {
			email, password
		});
		console.log("api.signIn", data);
		if (status === 200 || status === 201) {
			return data;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};

const signUp = async ({username, email, password, password_confirmation}) => {
	try {
		const { status, data } = await axios.post("api/auth/sign_up", {
			username, email, password, password_confirmation
		});
		console.log("api.signUp", data);
		if (status === 200 || status === 201) {
			return data;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};

const inputDetails = async ({first_name, last_name, phone_number, street_number, street_name, suburb, postcode, state, rego, make, model}) =>{

	const token = sessionStorage.getItem('token')
	console.log("sessionStorage JWT token:", token)

	let tokenHeader = {
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json;charset=UTF-8"
		}
	  };

	try {
		const { status, data } = await axios.post("api/details",{
			first_name, last_name, phone_number, street_number, street_name, suburb, postcode, state, rego, make, model
		}, tokenHeader);
		console.log("api.inputDetails", data)
		if (status === 200 || status === 201) {
			return data;
		} else {
			return null
		}
	} catch (error) {
		console.error(error);
		return null
	}
}

const createBooking = async ({option_id, date, comment, finished, paid}) =>{

	const token = sessionStorage.getItem('token')
	console.log("sessionStorage JWT token:", token)

	let tokenHeader = {
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json;charset=UTF-8"
		}
	  };

	try {
		const { status, data } = await axios.post("api/bookings",{
			option_id, date, comment, finished, paid
		}, tokenHeader);
		console.log("api.createBooking", data)
		if (status === 200 || status === 201) {
			return data;
		} else {
			return null
		}
	} catch (error) {
		console.error(error);
		return null
	}
}

const getOptions = async () => {
	try {
		const { status, data } = await axios.get("/api/options");
		// console.log("api.getOptions", data);
		if (status === 200) {
			return data;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};

const getBookings = async () => {
	try {
		const { status, data } = await axios.get("/api/bookings");
		console.log("api.getBookings", data);
		if (status === 200) {
			return data;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};

export default {signIn, signUp, inputDetails, createBooking, getOptions, getBookings};